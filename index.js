const express = require('express');
const cors = require('cors');

const app = express();
const { Client } = require('pg');
const redis = require('redis');

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, PORT, REDIS_HOST } = process.env;

const pgClient = new Client({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 5432,
});

const redisClient = redis.createClient({ host: REDIS_HOST });

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

app.listen(PORT, () => {
    setTimeout(() => {
        pgClient.connect();
    }, 5000);
    console.log(`Server started. PORT : ${PORT}`);
});
