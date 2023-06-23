import express from "express"
import { activateEmail } from "../controllers/email.controller"


export const mailRouter = express.Router()

mailRouter.route('/:token').get(activateEmail)