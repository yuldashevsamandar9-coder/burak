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
/* N-TASK

Shunday function yozing, u string qabul qilsin va string palindrom 
yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false.

@MITASK
*/

function palindromCheck(word1: string) {
  let word2 = word1.split("").reverse().join("");
  return word2 === word1;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
console.log(palindromCheck("non"));
console.log(palindromCheck("somsa"));
console.log(palindromCheck("mit"));
console.log(palindromCheck("mom"));
function palindromCheck1(word3: string) {
  let word4 = word3.split("").reverse().join("");
  return word4 === word3;
}
console.log(palindromCheck1("dad"));
console.log(palindromCheck1("mom"));

/** O-TASK

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin 
va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
 MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45.

@MITASK */
function calculateSumOfNumbers(arr: any[]): number {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      count = count + arr[i];
    }
  }
  return count;
}

console.log(calculateSumOfNumbers([7, "10", { son1: 5 }, true, 3]));
