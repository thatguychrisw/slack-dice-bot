import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (request, response) => response.send('💙 Netlify Functions!'));

app.post('/', (request, response) => {
    const rollDice = (max: number):number => Math.floor(Math.random() * (max - 1)) + 1;

    let result = rollDice(6).toString();

    response.send(`You rolled a ${result} on a six sided dice.`);
});


export default app;
export const handler = serverless(app);
