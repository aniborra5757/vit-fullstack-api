import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// your /bfhl POST route here (same as before)

export default app;  // ✅ Vercel uses this
