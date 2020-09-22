const args = process.argv;
args.shift();
args.shift();

const getTime = function (sec) {
  if (sec < 60) {
    return sec + 's';
  } else if (sec < 3600) {
    let min = Math.floor(sec / 60);
    let second = sec % 60;
    return `${min}m:${second}`;
  } else if ( sec > 3600) {
    let hour = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60);
    let second = Math.floor((sec % 3600) % 60);
    return `${hour}h:$m{min}:${second}`;
  }
};

const findMax = function (array) {
  if (array === undefined) {
    return 0;
  }
  let currentHighest = 0;
  for (let item of array) {
    if (Number(item) > currentHighest) {
      currentHighest = item;
    }
  }
  return currentHighest;
};


const clock = function (...alarm) {
  let max = findMax(alarm[0]);
  let count = 1;
  let delay = 0;
  for (let x = 0; x < max; x++) {

    setTimeout(() => {
      let output = "";
      output += getTime(count + x);
      for (let a of alarm[0]) {
        if (count + x === Number(a)) {
          output += ` - ALARM TIME!!!! beep beep beep beep beep`;
        }
      }
      console.log(output);
      
    }, delay);

    delay += 1000;
  }
}

clock(args);

module.exports = {
  getTime,
  clock
}
// module.exports = clock;