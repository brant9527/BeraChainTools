# -*- coding: utf-8 -*-
# Time     :2024/1/21 00:19
# Author   :ym
# File     :address_config.py
from web3 import Web3

w3 = Web3()
bex_swap_address = w3.to_checksum_address('0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D')
bend_address = w3.to_checksum_address('0x9261b5891d3556e829579964B38fe706D0A2D04a')
honey_swap_address = w3.to_checksum_address('0x09ec711b81cD27A6466EC40960F2f8D85BB129D9')
weth_address = w3.to_checksum_address('0xE28AfD8c634946833e89ee3F122C06d7C537E8A8')
honey_address = w3.to_checksum_address('0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03')
btg_address=w3.to_checksum_address('0xbDa130737BDd9618301681329bF2e46A016ff9Ad')
btg_stake=w3.to_checksum_address('0x791fb53432eED7e2fbE4cf8526ab6feeA604Eb6d')

usdc_address = w3.to_checksum_address('0xd6D83aF58a19Cd14eF3CF6fe848C9A4d21e5727c')
stg_usdc_address = w3.to_checksum_address('0xd6D83aF58a19Cd14eF3CF6fe848C9A4d21e5727c')

usdc_pool_address = w3.to_checksum_address('0x36Af4FBAb8ebE58b4EfFE0D5d72CeFfc6eFc650A')
usdc_pool_liquidity_address = w3.to_checksum_address('0x5479FbDef04302D2DEEF0Cc78f7D503d81fDFCC9')
weth_pool_liquidity_address = w3.to_checksum_address('0x101f52c804C1C02c0A1D33442ecA30ecb6fB2434')
bex_approve_liquidity_address = w3.to_checksum_address('0x0000000000000000000000000000000000696969')
weth_pool_address = w3.to_checksum_address('0xD3C962F3F36484439A41d0E970cF6581dDf0a9A1')
zero_address = w3.to_checksum_address('0x0000000000000000000000000000000000000000')
wbear_address = w3.to_checksum_address('0x7507c1dc16935B82698e4C63f2746A2fCf994dF8')
wbtc_address = w3.to_checksum_address('0x2577D24a26f8FA19c1058a8b0106E2c7303454a4')
bend_borrows_address = w3.to_checksum_address('0xfb618D1e361C362adDE4E148A4Dc85465a0A4A22')
bend_pool_address = w3.to_checksum_address('0x40C33CcbF44F554E1Bf8379BE1a5151Ab0F80f65')
ooga_booga_address = w3.to_checksum_address('0x6553444CaA1d4FA329aa9872008ca70AE6131925')
bera_name_address = w3.to_checksum_address('0x8D20B92B4163140F413AA52A4106fF9490bf2122')
