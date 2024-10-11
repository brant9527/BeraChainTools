const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.JsonRpcProvider("https://bartio.rpc.berachain.com/");
    const signer = new ethers.Wallet("11542310756d62ee402ee50aff2d46c57c5902dce73f459073c0fb5d1f07768a", provider);
    console.log("Signer Address:", signer.address);
    
    const multiSwapABI = [
        {
          "type": "constructor",
          "inputs": [
            {
              "name": "_crocSwapDex",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_crocImpact",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_crocQuery",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "receive",
          "stateMutability": "payable"
        },
        {
          "type": "function",
          "name": "crocSwapDex",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract CrocSwapDex"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "multiSwap",
          "inputs": [
            {
              "name": "_steps",
              "type": "tuple[]",
              "internalType": "struct SwapHelpers.SwapStep[]",
              "components": [
                {
                  "name": "poolIdx",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "base",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "quote",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "isBuy",
                  "type": "bool",
                  "internalType": "bool"
                }
              ]
            },
            {
              "name": "_amount",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "_minOut",
              "type": "uint128",
              "internalType": "uint128"
            }
          ],
          "outputs": [
            {
              "name": "out",
              "type": "uint128",
              "internalType": "uint128"
            }
          ],
          "stateMutability": "payable"
        },
        {
          "type": "function",
          "name": "previewMultiSwap",
          "inputs": [
            {
              "name": "_steps",
              "type": "tuple[]",
              "internalType": "struct SwapHelpers.SwapStep[]",
              "components": [
                {
                  "name": "poolIdx",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "base",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "quote",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "isBuy",
                  "type": "bool",
                  "internalType": "bool"
                }
              ]
            },
            {
              "name": "_amount",
              "type": "uint128",
              "internalType": "uint128"
            }
          ],
          "outputs": [
            {
              "name": "out",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "predictedQty",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "retire",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        }
      ]
    const routerAddress = "0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D";
    const multiSwap = new ethers.Contract(routerAddress, multiSwapABI, signer);

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

    const amount = ethers.parseEther("0.01");
    const minOut = 0;
    const amountToSend = ethers.parseEther("100");

    console.log('amount:', amount);
    // // 授权
    // const approvalTx = await multiSwap.approve(routerAddress, amountToSend);
    // await approvalTx.wait();
    // console.log("Approval successful");

    const tx = await multiSwap.multiSwap(swapSteps, amount.toString(), minOut,{
        gasLimit:2000000
    });
    await tx.wait();
    console.log("Swap successful");
}

main();
