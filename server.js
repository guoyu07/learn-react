import express from 'express';
const app = express();

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
  next();
});

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/cards', (request, response) => {
  let cardsList = [
    {
      id: 1,
      title: "Read the Book",
      description: "I should read the whole book",
      color: 'red',
      status: "in-progress",
      tasks: []
    },
    {
      id: 2,
      title: "Write some code",
      description: "Code along with the samples in the [baidu](https://baidu.com)",
      color: 'purple',
      status: "todo",
      tasks: [
        {
          id: 1,
          name: "ContactList Example",
          done: true
        },
        {
          id: 2,
          name: "Kanban Example",
          done: false
        },
        {
          id: 3,
          name: "My own experiments",
          done: false
        }
      ]
    },
    {
      id: 3,
      title: "Review",
      description: "I should read the whole book",
      status: "done",
      color: "green",
      tasks: []
    },
  ];
  response.send(cardsList);
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
  console.log('Hello world!');
});
