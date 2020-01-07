const express = require('express');
const cors = require('cors');

const app = express();
const { Client } = require('pg');
const redis = require('redis');

const pgClient = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
});
const redisClient = redis.createClient({ host: 'devops_tp_redis' });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/status', async (req, res) => {
    const postgresQuery =
        "SELECT date_trunc('second', current_timestamp - pg_postmaster_start_time()) as uptime;";
    const result = await pgClient.query(postgresQuery);
    const { uptime } = result.rows[0];
    const uptimeString = () => {
        let time = '';

        time += uptime.hours ? `${uptime.hours}h ` : '';
        time += uptime.minutes ? `${uptime.minutes}m ` : '';
        time += uptime.seconds ? `${uptime.seconds}s` : '';

        return time;
    };

    res.json({
        status: 'ok',
        postgresUptime: uptimeString(),
        redisConnectedClients: Number(redisClient.server_info.connected_clients),
    });
});

const { PORT } = process.env;
app.listen(PORT, () => {
    setTimeout(() => {
        pgClient.connect();
    }, 5000);
    console.log(`Server started. PORT : ${PORT}`);
});
