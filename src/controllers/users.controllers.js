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

export const postUsers = async (req, res) => {

    const { name, lastname, username, email, password, role } = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO users (name, lastname, username, email, password, role) VALUES (?, ?, ?, ?, ?, ?)', [name, lastname, username, email, password, role]);

        res.send({
            id: rows.insertId,
            name,
            lastname,
            username,
            email,
            password,
            role
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Error inserting a new user'
        });
    }
};