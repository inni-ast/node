const { stdin, stdout } = process; // создаем 

stdout.write('Как тебя зовут?\n')
stdin.on('data', data => {
  const name = data.toString();
  const reverseName = name.split('').reverse().join('');
  stdout.write(`\nТвоё имя наоборот ${reverseName}`);
  process.exit();
});


