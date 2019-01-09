const jwt = require('jsonwebtoken');

const data = {
  id: 4
};

const token = jwt.sign(data, '123123');
console.log(token);


const decoded = jwt.verify(token, '123123');
console.log('decoded:', decoded);


//const { SHA256 } = require('crypto-js');

// const message = 'I am user number 4';
//
// const hash = SHA256(message).toString();
//
// // console.log(`Message: ${message}`);
// // console.log(`Hash: ${hash}`);
//
// const data = {
//   id: 4
// };
//
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(`${data} somesecret`)).toString()
// };
//
// const resultHash = SHA256(JSON.stringify(`${data} somesecret`)).toString();
//
// console.log(resultHash);
// //console.log(token.hash);
