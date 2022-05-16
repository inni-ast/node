// console.log(__dirname);// путь к папке
// console.log(__filename);// путь к файлу

const { stdout, stdin, exit } = process;
const flag = process.argv[2];
console.log(flag)
const allowedFlags = ['-d', '-f'];
if (!allowedFlags.includes(flag)) {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -d или -f');
  exit();
}
if (flag === allowedFlags[0]) {
  console.log(__dirname);
} else if (flag === allowedFlags[1]) {
  console.log(__filename);
}

// second solution
// const { stdout } = process;
// const flag = process.argv[2];

// if (flag === '-d') {
//   stdout.write(__dirname);
// } else if (flag === '-f') {
//   stdout.write(__filename);
// } else {
//   stdout.write('Пожалуйста, запустите программу с флагом -d или -f');
// }
