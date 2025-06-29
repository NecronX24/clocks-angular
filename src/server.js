import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:4200',
  credentials:true
}));
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'notes',
  password: process.env.DB_PASSWORD || 'admin',
  port: process.env.DB_PORT || 5432,
});

// Rutas de la API
app.post('/api/login', async (req, res) => {
  try {
    
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Se requieren username/email y contraseña' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Se requiere la contraseña' });
    }

    let userQuery = await pool.query(
      'SELECT * FROM public.user WHERE username = $1', 
      [username]
    );

    if (userQuery.rows.length === 0) {
      userQuery = await pool.query(
        'SELECT * FROM public.user WHERE mail = $1', 
        [username]
      );
    }

    if (userQuery.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const user = userQuery.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    delete user.password;
    res.status(200).json({ message: 'Inicio de sesión exitoso' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al autenticar usuario' });
  }
});

app.post('/api/signup', async (req, res) => {
  const { user, mail, password } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO public.user (username, mail, password) VALUES ($1, $2, $3) RETURNING *',
      [user, mail, password]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(req.body);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});



app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});