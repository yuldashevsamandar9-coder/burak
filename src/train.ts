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
