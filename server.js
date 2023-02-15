import express from "express";

const app = express();


app.get('/', (req, res) => {
    const { name } = req.query;
    res.send(`Hello ${name}! We are using railway`)
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`RUN http://localhost:${PORT}`)
});