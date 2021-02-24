const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
// Designate the port this server will run through
app.set('port', process.env.port || 9000);
const port = process.env.PORT || 9000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(port, ()=>{console.log(`listening on ${port}`)});

app.get('/reflections', async (request, response) => {
  try {
    const reflections = await database('reflections').select();
    response.status(200).json(reflections);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.post('/reflections', async (request, response) => {
  const reflection = request.body;
  for (let requiredParameter of ['userId', 'body', 'feeling']) {
    if (!reflection[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { userID: <String>, body: <String>, feeling: <String> }. You're missing a "${requiredParameter} property.` });
    }
  }

  try {
    const id = await database('reflections').insert(reflection, 'id');
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error });
  }
});
