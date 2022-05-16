const path = require('path');

// console.log(path.basename(__filename)) // index.js - имя файла на Windows, полный путь к файлу на POSIX-системах
// console.log(path.dirname(__filename)) // C:\Users\Admin\Desktop\nodejs-basic - название папки
// console.log(path.extname(__filename)) // .js - расширение файла
// console.log(path.parse(__filename)); // возвращает объект в котором указывается корень диска, имя папки, имя файла, расширение файла, имя файла без расширения

console.log(path.join(__dirname, 'test', 'second.html'));
