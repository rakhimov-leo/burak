console.log("_________________TRAIN AREA________________");

//                  TASK W

/*
Shunday function yozing,
 u o'ziga parametr sifatida
yagona array va number qabul 
qilsin. Siz tuzgan function
arrayni numberda berilgan 
uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan
 array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib 
qaytmoqda. Qolgani esa o'z holati qolyapti
*/

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 3));

//                  TASK V
/*
Shunday function yozing,
 uni string parametri bo'lsin.
Va bu function stringdagi
 har bir harfni o'zi bilan
necha marotaba taktorlanganligini
 ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.

*/
/*
function countChars(str: string): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  for (const char of str) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

console.log(countChars("welcome"));

*/
//                      TASK U

/*
Shunday function tuzing,
 uni number parametri bo'lsin.
Va bu function berilgan 
parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar
 borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda,
 argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 
9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

*/
/*
function sumOdds(n: number): number {
  let count = 0;

  for (let i = 1; i < n; i += 2) {
    count++;
  }

  return count;
}

console.log(sumOdds(11));

*/
//                        TASK T

/*
Shunday function tuzing, u sonlardan 
tashkil topgan 2'ta array 
qabul qilsin.
Va ikkala arraydagi sonlarni 
tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); 
return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni 
birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
*/
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const mergedArray = [...arr1, ...arr2];
//   return mergedArray.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([2, 3, 5, 25], [4, 10, 20]));

//                       TASK-S:
/*
Shunday function yozing, 
u numberlardan tashkil topgan array 
qabul qilsin va osha numberlar 
orasidagi tushib qolgan sonni topib
 uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2

*/
/*
function missingNumber(arr: number[]): number | null {
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const curr = sorted[i];

    if (curr - prev > 1) {
      return prev + 1;
    }
  }

  return null;
}

console.log(missingNumber([10, 12, 9]));
*/

//                         TASK R
/*
Shunday function yozing, 
u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan
string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni 
hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
*/
/*
function calculate(expression: string): number {
  const parts = expression.split("+"); 
  const num1 = parseInt(parts[0].trim());
  const num2 = parseInt(parts[1].trim());
  return num1 + num2;
}

console.log(calculate("1 + 3"));
*/

//                            TASK Q:
/*
Shunday function yozing, 
u 2 ta parametrga ega bo'lib
birinchisi object, 
ikkinchisi string bo'lsin.
Agar qabul qilinayotgan 
ikkinchi string, objectning
biror bir propertysiga mos kelsa, 
'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.
*/
/*
function hasProperty(obj: Record<string, any>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); 
*/
//                       TASK P:

/*
Parametr sifatida yagona
 object qabul qiladigan 
 function yozing.
Qabul qilingan objectni nested 
array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

*/
/*
function objectToArray(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj);
}
  

console.log(objectToArray({ a: 10, b: 20 }));
*/

//                        TASK O:
/*

Shunday function yozing va u
 har xil qiymatlardan iborat 
 array qabul qilsin.
Va array ichidagi sonlar yig'indisini
 hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.
*/

/*
function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;
  arr.forEach((item) => {
    if (typeof item === "number") {
      sum += item;
    }
  });
  return sum;
}

const result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
console.log(result);


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

/*
 * Request:
 Traditional Api
 Rest Api
 GraphQL Api
 ......


 * Frontend Development:
 Traditional FD  => SSR  => EJS
 Modern FD       => SPA  => REACT

 * Cokies:
 request join
 self destroy


 * Validation:
 Frontend validition
 Backend validition
 Database validation


*/

//                        TASK N:
/*
Shunday function yozing, u string 
qabul qilsin va string palindrom yani 
togri oqilganda ham, orqasidan oqilganda
 ham bir hil oqiladigan soz ekanligini aniqlab
  boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/
/*
function palindromCheck(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("mom"));
console.log(palindromCheck("eye"));
console.log(palindromCheck("son"));
*/
//                         TASK M:

/*
Shunday function yozing, u raqamlardan
 tashkil topgan array qabul qilsin
  va array ichidagi har bir raqam 
  uchun raqamni ozi va hamda osha 
  raqamni kvadratidan tashkil topgan 
  object hosil qilib, hosil bolgan 
  objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) 
return [{number: 1, square: 1}, 
  {number: 2, square: 4}, {number: 3, square: 9}];

*/

/*
function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
  return arr.map((num) => {
    return {
      number: num,
      square: num * num,
    };
  });
}

console.log(getSquareNumbers([3, 4, 6]));

*/

//                           TASK L:
/* 
Shunday function yozing, 
u string qabul qilsin va string
 ichidagi hamma sozlarni chappasiga
  yozib va sozlar ketma-ketligini 
  buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/
/*
function reverseSentence(sentence: string): string {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}
console.log(reverseSentence("we like coding!"));

*/

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
