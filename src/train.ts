console.log("_________________TRAIN AREA________________");

//                           TASK L:
/* 
Shunday function yozing, 
u string qabul qilsin va string
 ichidagi hamma sozlarni chappasiga
  yozib va sozlar ketma-ketligini 
  buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/

function reverseSentence(sentence: string): string {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}
console.log(reverseSentence("we like coding!"));

//                            TASK K:
/*

Shunday function yozing, u string qabul 
qilsin va string ichidagi unli harflar
 sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/

/*
function countVowels(str: string): number {
  const letters = str.split("");
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const letter of letters) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("I came from Uzbekistan!"));

*/

//                       TASK J:
/*
Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
*/

/*

function findLongestWord(str: string): string {
  const words = str.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
console.log(findLongestWord("I came from Uzbekistan!"));

*/

//                           TASK-I:
/*
Shunday function tuzing, u parametrdagi 
array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array 
tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
*/
/*
function majorityElement(array: number[]): number {
  const countMap: Record<number, number> = {};

  for (const num of array) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let maxCount = 0;
  let majority = array[0];

  for (const key in countMap) {
    if (countMap[key] > maxCount) {
      maxCount = countMap[key];
      majority = Number(key);
    }
  }

  return majority;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

*/
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
// function getDigits(a: string): string {
//   return a
//     .split("")
//     .filter((char) => char >= "0" && char <= "9")
//     .join("");
// }
// console.log(getDigits("m1vds2wi1t"));

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
