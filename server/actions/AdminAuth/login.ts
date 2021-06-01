import { User } from "utils/types";
import { sign } from "jsonwebtoken";
export const login = (userData: User) => {
  const secret = process.env.JWTSECRET as string;
  if (userData.username == null || userData.pass == null)
    throw new Error("Cannot have empty parameters.");

  if (
    userData.username != process.env.USERNAME ||
    userData.pass != process.env.PASSWORD
  ) {
    console.log("env var:", process.env.USERNAME);
    console.log("env var:", process.env.PASSWORD);
    console.log(userData.username);
    console.log(userData.pass);
    throw new Error("Invalid login credentials");
  }

  return sign(
    {
      role: "admin",
    },
    secret,
    {
      expiresIn: "7d",
    }
  );
};
