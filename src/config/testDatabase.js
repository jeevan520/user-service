const pool = require("./database");

const testDatabase = async () => {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("User DB connected:", result.rows[0]);
  } catch (error) {
    console.error("User DB connection failed:", error.message);
  } finally {
    await pool.end();
  }
};

testDatabase();