const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'child_tracker_15Jan',
  password: 'postgres',
  port: 5432,
});

module.exports = { pool: pool };