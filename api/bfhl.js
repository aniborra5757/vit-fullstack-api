export default function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body || {};

    if (!Array.isArray(data)) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const odd_numbers = data.filter(
      (x) => !isNaN(x) && parseInt(x) % 2 !== 0
    );
    const even_numbers = data.filter(
      (x) => !isNaN(x) && parseInt(x) % 2 === 0
    );
    const alphabets = data.filter((x) => /^[a-zA-Z]$/.test(x)).map((c) => c.toUpperCase());
    const special_characters = data.filter((x) => !/^[a-zA-Z0-9]+$/.test(x));

    const sum = odd_numbers.reduce((acc, num) => acc + parseInt(num), 0);
    const concat_string = alphabets.sort().reverse().join("");

    return res.status(200).json({
      is_success: true,
      user_id: "borra_ani_16032004",
      email: "ani.22bcb7283@vitapstudent.ac.in",
      roll_number: "22BCB7283",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({ operation_code: 1 });
  }

  res.status(405).json({ error: "Method not allowed" });
}
