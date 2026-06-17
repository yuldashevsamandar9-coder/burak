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

/**
 P-TASK

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib
 arrayni qaytarsin.
 MASALAN: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]].

@MITASK
 */

function objectToArray(obj: any) {
  let result: any[] = [];
  for (let key in obj) {
    let value = obj[key];
    result.push([key, value]);
  }
  return result;
}
console.log(objectToArray({ samandar: 39, Sem: 30 }));
/**
 * Q-TASK

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, 
ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin. 
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false.

@MITASK
 */
function hasProperty(obj: object, str: string): boolean {
  return str in obj;
}
console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
/**
 
 R-TASK

Shunday function yozing, u string parametrga ega bolsin.
 String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
  MASALAN: calculate("1+3") return 4.

@MITASK
 */
//
function calculate(str: string): number {
  let arr = str.split("+");

  let son2 = Number(arr[0]);
  let son3 = Number(arr[1]);

  return son2 + son3;
}

console.log(calculate("1+3"));
console.log(calculate("50+20"));

/**
 * S-TASK

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni 
topib uni return qilsin.
 MASALAN: missingNumber([3, 0, 1]) return 2.

@MITASK
 */
function missingNumber(nums: number[]) {
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

console.log(missingNumber([3, 0, 1, 5, 2]));

/* T-TASK
Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin
a ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]) return [0,3,4,4,6,30,31].
*/

function mergeSortedArrays(arr1: number[], arr2: number[]) {
  const Array = [...arr1, ...arr2];
  return Array.sort((a, b) => a - b);
}
const result1 = mergeSortedArrays([0, 3, 4, 35], [4, 63, 32]);
console.log(result1);
const result2 = mergeSortedArrays([0, 509, 29, 16], [66, 100, 500]);
console.log(result2);

/**
 U-TASK

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan
 parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin. 
 MASALAN: sumOdds(9) return 4; sumOdds(11) return 5.

@MITASK
 */
function sumOdds(num: number) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) count++;
  }
  return count;
}
console.log(sumOdds(25));
console.log(sumOdds(100));
console.log(sumOdds(11));
console.log(sumOdds(9));
