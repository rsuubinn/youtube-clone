import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`Sever listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
