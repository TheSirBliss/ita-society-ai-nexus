import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// API: salva messaggio nel DB
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
    }

    const newMessage = await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return res.json(newMessage);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Errore server" });
  }
});

app.listen(4000, () => {
  console.log("🚀 Backend avviato su http://localhost:4000");
});