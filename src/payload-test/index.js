import path from "path";
import express from "express";
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    return console.log(`Express is listening at http://localhost:3000`);
});

const payloadLengthShort = 100000;
const payloadLengthLong = 3000000;
let veryLongPayload = "a".repeat(payloadLengthLong);

console.log(veryLongPayload.length);
app.get("/", (req, response) => {
    response.status(200).send(veryLongPayload);
})
