import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import enviroments from "./config/enviroments";
import AllRoutes from "./routes/users.routes";
const app = express();

//settings
app.set("PORT", process.env.PORT || 1000);


//middlerwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes
app.get(`/`, (req , res) =>{
    res.send({ message: `Wellcum to my application`});
});

app.use(`/api`, AllRoutes);

export default app;