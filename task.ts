/*L-TASK

Shunday function yozing, u string qabul qilsin va string ichidagi 
hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan 
stringni qaytarsin. MASALAN: reverseSentence("we like coding!") 
return "ew ekil gnidoc".

@MITASK */

function reverse(soz: string): string {
  let suz1: string = "";
  let suz2: string = "";

  for (let i = 0; i < soz.length; i++) {
    let count = soz[i];

    if (count !== " ") {
      suz2 = count + suz2;
    } else {
      suz1 = suz1 + suz2 + " ";
      suz2 = "";
    }
  }

  return suz1 + suz2;
}

console.log(reverse("mening farishtang juda ajoyib"));
