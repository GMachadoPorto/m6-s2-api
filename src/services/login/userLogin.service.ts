import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import jwt from "jsonwebtoken";
import { iUserLogin } from "../../interfaces";
import { AppError } from "../../errors";

const userLoginService = async (loginData: iUserLogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userData: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!userData) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordIsValid: boolean = await compare(
    loginData.password,
    userData.password
  );

  if (!passwordIsValid) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: userData.id.toString(),
  });

  return token;
};

export { userLoginService };
