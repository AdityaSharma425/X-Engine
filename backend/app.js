import express from "express";
import { config } from "dotenv";
import cors from "cors";
import {sendEmail} from "./utils/sendEmail.js";

const app = express();

const router = express.Router();

config({path: "./config.env"});

app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// router.get("/", (req, res, next) => {
//     res.json({
//         success: true,
//         message: "HELLO"
//     })
// });


router.post("/send/mail", async(req, res, next) => {
    const {fullName, email, message, subject} = req.body;
    if(!fullName || !email || !message || !subject){
        return next(res.status(400).json({
                success: false,
                message: "Please provide all the details"
            })
        );
    }
    try{
        await sendEmail({
            email: "asrecovery422k5@gmail.com",
            fullName: fullName,
            subject: subject,
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        })
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
