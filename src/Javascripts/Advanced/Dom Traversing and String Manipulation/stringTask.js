// const reversedString = function (text) {
//   return text.split("").reverse().join("");
// };

const reversedString = function (text) {
  let word = "";
  for (let index = text.length - 1; index >= 0; index--) {
    word += text.charAt(index);
  }
  return word;
};
console.log(reversedString("Kenan"));

const capitalizeWords = function (sentence) {
  let words = sentence.split(" ");
  let capitalizeWordArray = [];
  for (let i = 0; i < words.length; i++) {
    capitalizeWordArray.push(
      words[i].charAt(0).toUpperCase() + words[i].slice(1)
    );
  }

  return capitalizeWordArray.join(" ");
};

console.log(capitalizeWords("Hello World programming"));

const countVowels = function (text) {
  const vowels = ["a", "i", "o", "u"];

  let count = 0;
  for (let index = 0; index < text.length; index++) {
    if (vowels.includes(text.charAt(index).toLowerCase())) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("Ana vətən Azərbaycan"));

const findLongestWord = function (sentence) {
  let words = sentence.split(" ");
  let longWord = words[0];
  for (let index = 1; index < words.length; index++) {
    if (longWord.length <= words[index].length) {
      longWord = words[index];
    }
  }
  return longWord;
};

console.log(findLongestWord("This is a sample sentence with long words"));
