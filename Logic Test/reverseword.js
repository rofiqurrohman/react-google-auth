function reverseString(str) {
  const splitString = str.split(' ');

  let new_string = [];
  splitString.forEach((word) => {
    const splitWord = word.split('');
    const reverseArray = splitWord.reverse();
    const joinArray = reverseArray.join('').split(' ');
    joinArray.forEach((kata) => {
      const capitalLetter = /[A-Z]/.test(kata);
    });
    new_string.push(joinArray);
  });

  return new_string.join(' ');
}

console.log(reverseString('I am A Great human'));
