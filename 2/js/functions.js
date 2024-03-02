let checkLineLength = (line, len) => {
  if (line.length <= len) {
    return true;
  } else {
    return false;
  }
};

let isPalindrome = (line) => {
  let container = line.replaceAll(' ', '');
  container = container.toLowerCase();
  let newLine = '';
  for (let i = container.length - 1; i >= 0; i -= 1) {
    newLine += container[i];
  }
  return newLine === container;
};

let extractingNnumbers = (data) => {
  data = data.toString();
  let result = '';
  for (let i of data) {
    let container = parseInt(i);
    if (!isNaN(container)) {
      result += i;
    }
  }
  return parseInt(result, 10);
};
