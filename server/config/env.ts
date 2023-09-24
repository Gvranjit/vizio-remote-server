import { config } from "dotenv";
import { z } from "zod";
import { exit } from "process";
const env = config().parsed;
console.log(env);

const envSchema = z.object({
  AUTH_KEY: z.string(),
  IP: z.string(),
});
type Env = z.infer<typeof envSchema>;
let validatedEnv: Env;
try {
  validatedEnv = envSchema.parse(env);
} catch (error) {
  console.log(error);
  exit();
}

export { validatedEnv as env };
