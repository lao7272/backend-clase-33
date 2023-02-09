import express from "express";

const app = express();


app.get('/', (req, res) => {

    res.send("Hello world with railway")
});

app.listen(PORT, () => {
    console.log(`RUN http://localhost:${PORT}`)
});