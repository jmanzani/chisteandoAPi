import { pool } from "../db.js";
function queryPromise(query, value) {
  return new Promise((resolve, reject) => {
      pool.query(query, value, (err, result) => {
          if (err) reject(err);
          else resolve(result);
      })
  })
}

export const getCategorias = async (req, res) => {
  try {
    const query = 'SELECT * FROM categoria';
    const result = await queryPromise(query);
    res.status(200).send(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Some issue occurred" });
  }
};
export const getCategoria = async (req, res) => {
  try {
    const { id } = req.body;
    const rows = await queryPromise("SELECT * FROM categoria WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Categoria not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" + error });
  }
};
export const createCategorias = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await queryPromise(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.status(201).json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};