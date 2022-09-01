import bcrypt from "bcryptjs";
const saltRounds: number = 10;

export const hashIt = async (plainPass: string) => {
  const res = await bcrypt.hash(plainPass, saltRounds);
  return res;
};

export const compareIt = async (plainPass: string, hashPass: string) => {
  const res = await bcrypt.compare(plainPass, hashPass);
  return res;
};
