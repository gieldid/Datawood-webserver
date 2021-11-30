pool = require("../utils/db.js");
module.exports = {
  async read(plankname) {
    try {
      conn = await pool.getConnection();
      sql = "SELECT id,name,height,width, length, weight, color FROM Planks WHERE name = ?";
      const rows = await conn.query(sql, plankname);
      conn.end();
      if (rows.length == 1) {
        return rows[0];
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  },
  async last() {
    try {
      conn = await pool.getConnection();
      sql = "SELECT id,name,height,width, length, weight, color FROM Planks ORDER BY id DESC LIMIT 1";
      const rows = await conn.query(sql);
      conn.end();
      if (rows.length == 1) {
        return rows[0];
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  },
  async list() {
    try {
      conn = await pool.getConnection();
      sql = "SELECT id,name,height,width, length, weight, color FROM Planks";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  }
}; 