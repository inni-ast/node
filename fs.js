const fs = require('fs');
const path = require('path');

// make directory

// fs.mkdir(path.join(__dirname, 'files'), err => {
//   if (err) throw err;
//   console.log('Папка была создана');
// });

// make file
fs.writeFile(
  path.join(__dirname, 'files', 'test.txt'),
  'Hello world',
  (err) => {
    if (err) throw err;
    console.log('Файл был создан');
  }
);

// дополнить файл информацией
fs.appendFile(
  path.join(__dirname, 'files', 'test.txt'),
  '\nFrom append file',
  err => {
    if (err) throw err;
    console.log('Файл был изменен');
  }
);
// прочитать файл - выведет содержание файла
fs.readFile(
  path.join(__dirname, 'files', 'test.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
// переименовать файл
fs.rename(
  path.join(__dirname, 'files', 'test.txt'),
  path.join(__dirname, 'files', 'new-test.txt'),
  err => {
    if (err) throw err;
    console.log('Файл переименован');
  }
);
