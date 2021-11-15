import web3 from "./web3";
const abi = require('../abi/KaliDAOfactory.json');

const factory = new web3.eth.Contract(
  abi,
  "0x6f2EB2d5BF6678697ffFCC0B0503bF76a6eAC39E"
);

export default factory;
