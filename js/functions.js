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

const сonvertToMinutes = (time) => {
  const container = time.split(':');
  const timeInMinutes = Number(container[0]) * 60 + Number(container[1]);
  return timeInMinutes;
};


const isWeHaveTimeForMeeting = (dayStart, dayEnd, meetingStart, meetingDuration) => {
  const container = [dayStart, dayEnd, meetingStart].map(сonvertToMinutes);
  const [dayStartInMin, dayEndInMin, meetingStartInMin] = container;

  if (meetingStartInMin < dayStartInMin || meetingStartInMin > dayEndInMin){
    return false;
  };

  const meetingEnd = meetingStartInMin + meetingDuration;
  return meetingEnd <= dayEndInMin;
};

console.log(isWeHaveTimeForMeeting('08:00', '17:30', '14:00', 90)); // true
console.log(isWeHaveTimeForMeeting('8:0', '10:0', '8:0', 120));     // true
console.log(isWeHaveTimeForMeeting('08:00', '14:30', '14:00', 90)); // false
console.log(isWeHaveTimeForMeeting('14:00', '17:30', '08:0', 90));  // false
console.log(isWeHaveTimeForMeeting('8:00', '17:30', '08:00', 900)); // false
