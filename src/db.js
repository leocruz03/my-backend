import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "18142412",
    port: 3306,
    database: "leo_project",
});