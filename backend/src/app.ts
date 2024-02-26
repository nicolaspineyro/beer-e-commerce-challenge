import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";
import productsRoutes from "./routes/products.routes";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));

//ROUTES
app.use("/api", indexRoutes);
app.use("/api/products", productsRoutes);

//SETTINGS
app.set("port", process.env.PORT || 3000);

export default app;
