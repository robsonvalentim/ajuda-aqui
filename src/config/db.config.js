// Importa o mongoose, nossa ferramenta para modelar e interagir com o MongoDB
const mongoose = require('mongoose');

// Função assíncrona para conectar ao banco de dados
const connectDB = async () => {
  try {
    // Tenta conectar ao MongoDB usando a URI do nosso arquivo .env
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Se a conexão for bem-sucedida, exibe uma mensagem no console
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    // Se ocorrer um erro na conexão, exibe o erro e encerra o processo
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1); // Encerra a aplicação com falha
  }
};

// Exporta a função para que ela possa ser usada em outros arquivos (como o server.js)
module.exports = connectDB;