const github = require('./github'); // подключаем модуль
const username = process.argv[2]; // в качестве аргумента будет передаваться username

github.getRepos(username, (error, repos) => {
  if (error) return console.error(error.message);

  repos.forEach(repo => console.log(repo.name));
});
