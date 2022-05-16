const http = require('http');
const PORT = 3000; // localhost:3000/some/page - адрес сервера, для отображения изменений в файле нужно закрыть и запустить заново


const requestHandler = (request, response) => {
  const { method, url } = request;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`Получен ${method}-запрос на ${url}`);
  response.write(heading);
  response.end(content);
};

const server = http.createServer(requestHandler);
// слушатель сервера
server.listen(PORT, 'localhost', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});


