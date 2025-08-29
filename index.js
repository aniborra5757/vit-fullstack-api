import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Student details
const DETAILS = {
  fullName: "borra_ani",
  dob: "16032004",
  email: "ani.22bcb7283@vitapstudent.ac.in",
  roll: "22BCB7283"
};

// Helper: alternating caps in reverse order
function alternatingCapsReverse(str) {
  let result = "";
  let toggle = true;
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];
    if (/[a-zA-Z]/.test(ch)) {
      result += toggle ? ch.toUpperCase() : ch.toLowerCase();
      toggle = !toggle;
    }
  }
  return result;
}

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Expected array" });
  }

  const odd = [], even = [], alphabets = [], specials = [];
  let sum = 0, alphaString = "";

  for (const item of data) {
    if (/^-?\d+$/.test(item)) {
      const num = parseInt(item, 10);
      sum += num;
      (num % 2 === 0 ? even : odd).push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      alphaString += item;
    } else {
      specials.push(item);
    }
  }

  res.json({
    is_success: true,
    user_id: `${DETAILS.fullName}_${DETAILS.dob}`,
    email: DETAILS.email,
    roll_number: DETAILS.roll,
    odd_numbers: odd,
    even_numbers: even,
    alphabets,
    special_characters: specials,
    sum: String(sum),
    concat_string: alternatingCapsReverse(alphaString)
  });
});

// 👇 Export handler for Vercel
export default app;
