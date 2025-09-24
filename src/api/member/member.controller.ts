import { NextFunction, Request, Response, Router } from "express";
import * as memberService from "./member.service";

const router = Router();

router.get("/id/:id", getById);
router.get("/number/:memberNumber", getByMemberNumber);
router.get("/", getAll);

export default router;

function getById(req: Request, res: Response, next: NextFunction) {
  const idMember = parseInt(req.params["id"]);
  memberService
    .getById(idMember)
    .then((member) => res.status(200).json(member))
    .catch((err) => next(err));
}

function getByMemberNumber(req: Request, res: Response, next: NextFunction) {
  const memberNumber = parseInt(req.params["memberNumber"]);
  memberService
    .getByMemberNumber(memberNumber)
    .then((member) => res.status(200).json(member))
    .catch((err) => next(err));
}

function getAll(req: Request, res: Response, next: NextFunction) {
  memberService
    .getAll()
    .then((members) => res.status(200).json(members))
    .catch((err) => next(err));
}