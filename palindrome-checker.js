function palindrome(str) {

let removingSpecialCharacters = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
let wordBackwards = removingSpecialCharacters.split("").reverse().join("");

if(removingSpecialCharacters == wordBackwards) {
  return true
} else {
  return false
}

}

palindrome("A man, a plan, a canal. Panama");
