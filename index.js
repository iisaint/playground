const abi = require('ethereumjs-abi');

const url = 'https://kovan.etherscan.io/api?module=proxy&action=eth_call&to=0x6532Fc9c95A622A504e5bB4539eC159970b3abF3&data=';
let data = '';
const tail = '&tag=latest&apikey=YourApiKeyToken';

const functions = {
    getRemainSLSAmount: '8db2a3de',
    balanceOfSLS: '6f34c081',
    balanceOfSLT: '46df547e'
}

const portfolios = ['Portfolio1', 'Portfolio2', 'Portfolio3', 'Portfolio4'];

const account = '0xC48d10cBe75db7BE2F193636fEa4daF2C74F9ce9';

let encoded;

// getRemainSLSAmount(string)
portfolios.map((portfolio) => {
    encoded = abi.rawEncode(["string"], [portfolio]);
    console.log('\x1b[33m%s\x1b[0m','getRemainSLSAmount(\"'+portfolio+'\")');
    console.log(url + functions.getRemainSLSAmount + encoded.toString('hex') + tail);
});

// balanceOfSLS(string,address)
portfolios.map((portfolio) => {
    encoded = abi.rawEncode(["string", "address"], [portfolio, account]);
    console.log('\x1b[33m%s\x1b[0m','balanceOfSLS(\"'+portfolio+'\",\"'+account+'\")');
    console.log(url + functions.balanceOfSLS + encoded.toString('hex') + tail);
});

// balanceOfSLT(string,address)
portfolios.map((portfolio) => {
    encoded = abi.rawEncode(["string", "address"], [portfolio, account]);
    console.log('\x1b[33m%s\x1b[0m','balanceOfSLT(\"'+portfolio+'\",\"'+account+'\")');
    console.log(url + functions.balanceOfSLT + encoded.toString('hex') + tail);
});
