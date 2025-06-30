console.log("_________________TRAIN AREA________________");

/* Project Standards:
- Logging Standards
- Naming Standards
function, method, variable => CAMEL
class => PASCAL
folder => KEBAB
css => SNAKE
-Error handling
*/

//                            H2-TASK:
/*
Shunday function tuzing, unga string 
argument pass bolsin. Function ushbu 
agrumentdagi digitlarni yangi stringda 
return qilsin

MASALAN: getDigits("m14i1t") return qiladi "141"
*/
function getDigits(a: string): string {
  return a
    .split("")
    .filter((char) => char >= "0" && char <= "9")
    .join("");
}
console.log(getDigits("m1vds2wi1t"));

//                            TASK H:

/*
shunday function tuzing, u integerlardan
 iborat arrayni argument sifatida qabul qilib,
  faqat positive qiymatlarni olib string holatda 
  return qilsin

MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/

// function getPositive(array: number[]): string {
//   return array.filter((num) => num > 0).join("");
// }

// console.log(getPositive([5, -6, 6, -8]));

//                              TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot
// turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi
// eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng
// katta son hisobladi va bizga uning indeksi 1 qaytadi.

// function getHighestIndex(array: number[]): number {
//   const max = Math.max(...array);
//   return array.indexOf(max);
// }

// console.log(getHighestIndex([5, 2, 12, 21, 8]));
