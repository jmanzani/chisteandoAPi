import { pool } from "../db.js";
function queryPromise(query, value) {
  return new Promise((resolve, reject) => {
      pool.query(query, value, (err, result) => {
          if (err) reject(err);
          else resolve(result);
      })
  })
}
export const ping = async (req, res) => {
  try {
    const query = 'SELECT "pong" AS RESULT';
    const result = await queryPromise(query);
    res.status(200).send(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Some issue occurred" });
  }
}