import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const FULL_NAME = "borra_ani";
const DOB = "16032004"; // ddmmyyyy
const EMAIL = "ani.22bcb7283@vitapstudent.ac.in";
const ROLL_NUMBER = "22BCB7283";

// GET endpoint
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

// POST endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;

  data.forEach((item) => {
    if (!isNaN(item)) {
      const num = parseInt(item, 10);
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
      sum += num;
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      special_characters.push(item);
    }
  });

  res.json({
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: alphabets.sort().join(""),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
