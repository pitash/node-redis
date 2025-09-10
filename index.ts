import express from "express";
// import express, { Express, Request, Response } from "express";
import restaurantsRouter from "./routes/restaurants";
import cuisinesRouter from "./routes/cuisines";

const PORT = process.env.PORT || 3003

const app = express();
app.use(express.json())

app.use("/restaurants", restaurantsRouter);
app.use("/cuisines", cuisinesRouter);

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
}).on("error", (error)=> {
    throw new Error(error.message)
});