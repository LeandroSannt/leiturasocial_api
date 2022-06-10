import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { getCustomRepository } from "typeorm";

export async function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepositories = getCustomRepository(UserRepository);
  const { isAdmin } = await usersRepositories.findOne(id);

  // Verificar se usuario admin

  if (isAdmin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
