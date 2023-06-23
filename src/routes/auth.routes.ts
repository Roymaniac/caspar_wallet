import express from "express"
import { register, login } from "../controllers/auth.controller"

export const authRouter = express.Router()

authRouter.route("/register").post(register)
authRouter.route("/login").post(login)
