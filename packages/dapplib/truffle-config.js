require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food fire defy stick miss install flower army gasp'; 
let testAccounts = [
"0xa83eeb950a208ad21666248fcef3bdc6ddc64a753e25ca5cafae19251260b648",
"0x74db6056c574761e0e6c02978910d8256eebaa02095e4d8e7ba93f59fbde4e61",
"0xd63423f1b2cac967496335e46267a091218724ade1e3290c2fc3aa651ee9ba0e",
"0x37f071ceae44fa5626f854663488ecd3eabf0e4cdc4d9c4b395db8e2df850bbd",
"0xd6ee6e683db23bd0ece419652405afa2a9f5bc0c31153149270fa7f6280539e9",
"0xa2c750c05c430c229d00ea8495f06f01630ca622cfd344a5229b6b2d149ceb21",
"0xface7d86845d83f3c1a357a9a8615401e0d4d09a5f6bdcb47bc62f9c1aad2cf1",
"0xdb7440bc2092bbac149a8a313d5abb49e47e116c3bf9bf11a0c28036a119fc04",
"0xdca6b2e29f3908832ebaa9c48546f30833db58e3dfcfbf5290dce99401425810",
"0x8d96c8056a8533b8e90aa8390cdbea559a0eaa530c6ba92480dd21a58851f0e2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


