import { pool } from "../db.js";
function queryPromise(query, value) {
  return new Promise((resolve, reject) => {
      pool.query(query, value, (err, result) => {
          if (err) reject(err);
          else resolve(result);
      })
  })
}

export const getChistes = async (req, res) => {
  try {
    const query = 'SELECT ch.titulo, ch.chiste, ch.imagenUrl, cat.categoria FROM chiste ch JOIN categoria cat ON ch.categoria_id = cat.id ';
    const result = await queryPromise(query);
    res.status(200).send(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Some issue occurred" });
  }
};
export const getChiste = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await queryPromise("SELECT * FROM chiste WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Chiste not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const getChisteContains = async (req, res) => {
  try {
    const { contiene } = req.body;
    const [rows] = await queryPromise("SELECT * FROM chiste WHERE chiste LIKE '%'+?+'%'", [contiene]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Chiste not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const createChiste = async (req, res) => {
  try {
    const { chiste, categoria_id, imagenUrl } = req.body;
    const [rows] = await queryPromise(
      "INSERT INTO chiste (chiste, categoria_id, imagenUrl) VALUES (?, ?, ?)",
      [chiste, categoria_id, imagenUrl]
    );
    res.status(201).json({ id: rows.insertId, chiste, categoria_id, imagenUrl });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};