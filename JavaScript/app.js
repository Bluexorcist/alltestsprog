let menu = {
  width: 200,
  height: 150,
  title: 'my menu'
};

function multiplayNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    }
  }
  console.log(obj);
}

multiplayNumeric(menu)
const pi = 3.14
let wer = 2
console.log(wer);

