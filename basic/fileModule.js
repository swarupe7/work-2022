const file=require('fs');
const a=file.readFileSync('file.txt');
console.log(a);
console.log(a.toString());
console.log('finished reading');

 const b= file.writeFileSync('f2.txt','writing some data using nodejs')
 console.log(b)