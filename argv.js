console.log(process.argv); // все аргументы включая программу и файл
console.log(process.argv.slice(2)); //только аргументы
// Напишите программу, которая просит у пользователя ввести два числа, складывает эти числа, 
// если запускается с флагом -s, или перемножает, если запускается с флагом -m, после чего завершает свою работу. 
// Для ввода и вывода информации используйте стандартные потоки ввода/вывода. 
// Пример работы (пользовательский ввод начинается с >
const { stdin, stdout } = process;

stdout.write('Введите, пожалуйства два числа\n');
stdin.on('data', data => {
  const num = data.toString();
  const array = num.split(' ');

  process.exit();
})
