import express from "express";
import configViewEngine from "../configs/viewEngine";
import initWebRoutes from "../routes/web";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8888;

//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`JWT Backend is running at ${PORT}`);
});
