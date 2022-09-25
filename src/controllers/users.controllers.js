import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (e) {
        return res.status(500).json({
            message: "Something goes wrong while getting users"
        });
    }
};


export const getUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
        
        rows.length <= 0 ? res.status(404).json({ message: "User not found 😭" }) : res.json({ rows });
    } catch (e) {
        return res.status(500).json({
            message: 'Something went wrong with user query'
        });
    };
};