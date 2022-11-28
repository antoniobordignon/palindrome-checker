function palindrome() {

let word = document.getElementById('word')
let answer = document.getElementById('answer')
let w = String(word.value);

let removingSpecialCharacters = w.replace(/[^a-z0-9]/gi, "").toLowerCase()
let wordBackwards = removingSpecialCharacters.split("").reverse().join("");

if(removingSpecialCharacters == wordBackwards) {
  return answer.innerHTML = `the word ${w} is a palindrome`
} else {
  return answer.innerHTML = `the word ${w} is not a palindrome`
}

}