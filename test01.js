// แบบ es module
import { sau, score, sumNumber, squareArea } from './my-module01.js'

console.log(sau)
console.log(score)
// score =  555 // error ต้องระวังแบบต้นทางเป็น let แต่ก็ห้ามแก้ไข
console.log(score)
console.log(sumNumber(10,20))
console.log(squareArea(10,20))