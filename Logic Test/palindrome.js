function palindrome(str) {
  const removeChar = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
  const checkPalindrome = removeChar.split('').reverse().join('');
  return removeChar === checkPalindrome ? 'palindrome' : 'not palindrome';
}

console.log(palindrome('Malas'));
console.log(palindrome('Malam'));
