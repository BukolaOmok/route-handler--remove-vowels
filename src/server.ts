const express = require("express");
import { removeVowels } from "./removeVowels";
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"));

app.get("/removeVowels/:word", (req: any, res: any) => {
    const word = (req.params.word)

    res.send(removeVowels(word))
})

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})