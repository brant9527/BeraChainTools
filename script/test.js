const Web3 = require('web3');

const multiSwapABI= require("./bexABI.json"); // 你可以将 ABI 放在单独的 JSON 文件中，方便引用
console.log(multiSwapABI)
async function main() {
    const web3 = new Web3("https://bartio.rpc.berachain.com/");
    const privateKey = "11542310756d62ee402ee50aff2d46c57c5902dce73f459073c0fb5d1f07768a"; // 替换为你的私钥
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);
    console.log("Signer Address:", account.address);

    const routerAddress = "0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D";

    const HONEY = "0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03";
    const WBERA = "0x7507c1dc16935B82698e4C63f2746A2fCf994dF8";
    const WETH = "0xE28AfD8c634946833e89ee3F122C06d7C537E8A8";

    const swapSteps = [
        {
            poolIdx: 36000,
            base: HONEY,
            quote: WBERA,
            isBuy: true,
        },
        {
            poolIdx: 36001,
            base: WETH,
            quote: WBERA,
            isBuy: true,
        },
    ];

    const amount = web3.utils.toWei("0.01", "ether"); // 将金额转化为 Wei
    const minOut = 0;
    const amountToSend = web3.utils.toWei("100", "ether"); // 将授权金额转化为 Wei

    console.log('amount:', amount);

    // 授权
    const multiSwapContract = new web3.eth.Contract(multiSwapABI, routerAddress);

    // 获取 nonce
    const nonce = await web3.eth.getTransactionCount(account.address);

    const approvalTx = multiSwapContract.methods.approve(routerAddress, amountToSend);
    const approvalTxData = approvalTx.encodeABI();

    const approvalTxObject = {
        from: account.address,
        to: routerAddress,
        data: approvalTxData,
        gas: 2000000,
        nonce: nonce,
    };

    // 签名授权交易
    const signedApprovalTx = await web3.eth.accounts.signTransaction(approvalTxObject, privateKey);
    await web3.eth.sendSignedTransaction(signedApprovalTx.rawTransaction);
    console.log("Approval successful");

    // 再次获取 nonce
    const newNonce = await web3.eth.getTransactionCount(account.address);

    const tx = multiSwapContract.methods.multiSwap(swapSteps, amount, minOut);
    const txData = tx.encodeABI();

    const txObject = {
        from: account.address,
        to: routerAddress,
        data: txData,
        gas: 2000000,
        nonce: newNonce,
    };

    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log("Swap successful");
}

main().catch((error) => {
    console.error("Error:", error);
});
