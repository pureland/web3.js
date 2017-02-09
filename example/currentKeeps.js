var Web3 = require('../index.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

function getKeeps() {

    web3.eth.getCurrentKeeps(function(err,res){
        console.log(res)
    })
}
getKeeps()
