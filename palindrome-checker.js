function palindrome() {

  let word = document.getElementById('word')
  let answer = document.getElementById('answer')
  let w = String(word.value);

  if (w == "") {
    return answer.innerHTML = `Please enter a word or phrase.`
  } else {
    let removingSpecialCharacters = w.replace(/[^a-z0-9]/gi, "").toLowerCase()
    let wordBackwards = removingSpecialCharacters.split("").reverse().join("");

    if(removingSpecialCharacters == wordBackwards) {
      return answer.innerHTML = `${w} is a palindrome.`
    } else {
      return answer.innerHTML = `${w} is not a palindrome.`
    }
  }
}