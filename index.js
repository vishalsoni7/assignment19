const express = require("express");
const cors = require("cors");
const app = express();

const dataBase = require("./db");

const expensesRouter = require("./routers/expense.router.js");
const incomeRouter = require("./routers/income.router.js");
const savingRouter = require("./routers/saving.router.js");

app.use(express.json());

app.use(cors());

dataBase();

app.get("/", (req, res) => {
  res.json("Assignment Nineteen");
});

app.use("/expense", expensesRouter);

app.use("/income", incomeRouter);

app.use("/saving", savingRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "something went wrong" });
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
