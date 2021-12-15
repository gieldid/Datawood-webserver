pool = require("../utils/db.js");
module.exports = {
  /**
   * Return one plank
   * @param  {The name of the plank to return} plankname
   */
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
  
  /**
   * Get the last added plank
   */
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
  /**
   * Returns all Planks
   */
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
  },
  /**
   * Inserts just the weight
   * @param  {Weight to be added to the database} weight
   */
  
  async insertWeight(weight){
    try{
      conn = await pool.getConnection();
      sql = "INSERT INTO Planks (weight) VALUES(?);";
      conn.query(sql, weight);
    }catch(err){
      console.log("error: "+ err + " weight: " +  weight);
      throw err;
    }
  },
  /**
   * Updates row with new weight
   * @param  {Row to update} id
   * @param  {Weight it should get} weight
   */
  async updateWeight(id,weight){
    try{
      conn = await pool.getConnection();
      sql = "UPDATE Planks SET weight = ? WHERE id = ?;";
      conn.query(sql,[weight,id]);
    }catch(err){
      throw err;
    }
  }
}; 