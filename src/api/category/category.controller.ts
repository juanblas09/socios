import { NextFunction, Request, Response, Router } from "express";
import * as categoryService from "./category.service";

const router = Router();

router.get('/', getAll);

export default router;

function getAll(req: Request, res: Response, next: NextFunction) {
    categoryService
        .getAll()
        .then((category) => res.status(200).json(category))
        .catch((err) => next(err));
}