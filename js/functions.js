const checkLineLength = (line, len) => {
  if (line.length <= len) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome = (line) => {
  let container = line.replaceAll(' ', '');
  container = container.toLowerCase();
  let newLine = '';
  for (let i = container.length - 1; i >= 0; i -= 1) {
    newLine += container[i];
  }
  return newLine === container;
};

const extractingNnumbers = (data) => {
  data = data.toString();
  let result = '';
  for (const i of data) {
    const container = parseInt(i, 10);
    if (!isNaN(container)) {
      result += i;
    }
  }
  return parseInt(result, 10);
};

export {checkLineLength, isPalindrome, extractingNnumbers};
