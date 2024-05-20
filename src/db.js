import { createPool } from "mysql";

import {
  DB_NAME,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});