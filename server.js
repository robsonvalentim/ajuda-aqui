// Carrega as variáveis de ambiente do arquivo .env
import 'dotenv/config';

// Importa o framework Express
import express from 'express';

// Importa nossa função de conexão com o banco de dados
import connectDB from './src/config/db.config.js';

// Executa a função para conectar ao banco de dados
connectDB();

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor vai escutar
const PORT = process.env.PORT || 5000; // Usa a porta definida no .env ou 5000 como padrão

// Inicia o servidor e o faz escutar na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});