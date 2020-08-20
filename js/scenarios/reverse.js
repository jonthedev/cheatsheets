// reversing a string and then check if identical
const word = 'AaBaa'

function caseInsensitivePalindrome(str) {
  const caselessStr = str.toLowerCase()
  // const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
  let reversedCaselessStr = ''

  for (let i = caselessStr.length - 1; i >= 0; i--) {
    reversedCaselessStr += caselessStr[i]
  }

  return caselessStr === reversedCaselessStr
}
caseInsensitivePalindrome(word)