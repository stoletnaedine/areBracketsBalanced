const areBracketsBalanced = (brackets) => {
  if (brackets === '') {return true;}
  let left = 0;
  let right = 0;
  let result;
  for (let i = 0; i < brackets.length; i++) {
    brackets[i] === '(' ? left++ : right++;
    if (right > left) {
      result = false;
      break;
    }
    result = left === right;
  }
  return result;
}
