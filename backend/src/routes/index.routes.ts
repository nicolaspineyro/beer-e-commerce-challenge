import { Router, Request, Response } from "express";

const indexRouter = Router();

//GET
indexRouter.get('/' , (_: Request, res: Response)=>{
  res.send('Hi! This is an API responding to the challenge!')
})

export default indexRouter;