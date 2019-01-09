const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (error, hash) => {
//     console.log(hash);
//   });
// });

const hashedPassword = '$2a$10$u/.uC9HS8uJcnbhRpkee5eZIGcyeP1lJV/2UitfZ23EL2Rl9KvA4i';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});


// const data = {
//   id: 4
// };
//
// const token = jwt.sign(data, '123123');
// console.log(token);
//
//
// const decoded = jwt.verify(token, '123123');
// console.log('decoded:', decoded);


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
