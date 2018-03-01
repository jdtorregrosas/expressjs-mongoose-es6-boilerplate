import express from 'express';

let app = express();

app.get('/', (req, res) => {
    res.send({ status: true });
});

export default app;