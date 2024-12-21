import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
const router = express.Router();

// JWT SECRET
const JWT_SECRET = process.env.JWT_SECRET;

// ROTA CADASTRO

router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });
    res.status(201).json(userDB);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor, tente novamente" });
  }
});

// ROTA LOGIN

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;

    // busca usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
    });

    // verifica se o usuário existe dentro do banco de dados
    if (!user) {
      return res.status(404).json({ message: "Usuario não encontrado" });
    }

    // Aqui ele compara as senhas do banco com a que o usuario digitou
    const isMatch = await bcrypt.compare(userInfo.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Senha invalida!" });
    }

    // gerar o token

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: "Error no servidor" });
  }
});

export default router;
