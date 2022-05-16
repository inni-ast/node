const http = require('http');
const PORT = 3000; // localhost:3000/some/page - адрес сервера, для отображения изменений в файле нужно закрыть и запустить заново

const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(`Получен ${method}-запрос на ${url}`);
  response.write('Hello Node.js');
  response.end('Bye!');
};

const server = http.createServer(requestHandler);
// слушатель сервера
server.listen(PORT, 'localhost', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});


