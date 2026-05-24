/*L-TASK

Shunday function yozing, u string qabul qilsin va string ichidagi 
hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan 
stringni qaytarsin. MASALAN: reverseSentence("we like coding!") 
return "ew ekil gnidoc".

@MITASK */
function getReversed(str: string): string {
  let words = str.split(" ").map((word) => word.split("").reverse().join(""));
  return words.join(" ");
}

const result = getReversed("Mening farishtam ");
console.log(result);

/*  M-TASK

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array 
ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil 
topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin. 
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1},
{number: 2, square: 4}, {number: 3, square: 9}].

@MITASK

*/
const list = [1, 2, 3, 6, 8, 9, 0];
const newList = list.map((ele) => {
  return {
    numbers: ele,
    kvadrat: ele * ele,
  };
});
console.log("newList:", newList);
