require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name raise sad mistake hunt desert flock gate'; 
let testAccounts = [
"0x45b9b08d7b54f864d71aff065420a917bdc3668e67110ef35d4cce26cbcfd8b0",
"0x02c6d13a1ae573da550e1e77a5ff13a085eeed5b172c213db2f73bdf0ef8f397",
"0x6ebfb64d18c05af60fec9eaa38ea066a74032394c5c52c6f66255774e097ea79",
"0xd84d9aef1bd4854cbb93537739f5f71321e1a04e8ff2c1ee1f01ccaa025546d3",
"0x827a49c9c73ae8c9c4191858f593b489ab98c5a293e1a9e86835e3a15793a778",
"0x449ecd6cfff01730de7f0bdc024ca18790d82dd8b79c6a77540932821a65628c",
"0xa8e8916eea2526037997c63f7b170a866288af84879197ec18b5ee85b75c7b8d",
"0x80a171eef3aa9533e9759164aeeab80bcf3ae5b7f9f7bc29575741c174c522e4",
"0xa1c65c41db3d8abe86414408002e81dba08d13810b527b4af869dce2c79ae4c5",
"0x61392be5ac27bb595427dec1951bb78bb34848fa7ce548a0d46ec05afd019341"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

