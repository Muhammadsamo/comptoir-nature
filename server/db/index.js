import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "mysql-82523-0.cloudclusters.net",
  user: "webcms_user",
  password: "DS@Pass2023$",
  database: "website_content",
  localAddress: "38.17.53.107",
  port: "19342",
  waitForConnections: true,
  connectionLimit: 10,
});

export const read = async (table) => {
  const [rows] = await pool.query(
    `SELECT * FROM ${table} WHERE ProjectId = '2'`
  );
  console.log(rows);
  return rows;
};

