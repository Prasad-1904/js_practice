let name = 'prasad'
let lang = 'javascript'

console.log(`Hi I am ${name}, I am learning ${lang}`); // usw back tiks "`"

const userName = new String("prasadkk")

console.log(userName);
console.log(userName[3]);
console.log(userName.__proto__);

console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.charAt(5));
console.log(userName.indexOf('k'));


const newName = userName.substring(0,5)
console.log(newName);

const slName = userName.slice(-4, -1)
console.log(slName);

const trName = " abcdef "
console.log(trName.trim());

const accId = "prk_hhf_werkfkd_22"
console.log(accId.split('_'));
