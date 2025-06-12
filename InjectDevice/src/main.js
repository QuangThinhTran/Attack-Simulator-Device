const express = require('express');
const cors = require('cors');
const os = require('os');
const si = require('systeminformation');
require('dotenv').config();
const db = require('./sql');

const app = express();
const PORT = process.env.PORT_SERVER || 3000;

app.use(cors({
    methods: ['GET'],
    allowedHeaders: [process.env.HEADER_NAME]
}));


app.get('/', async (req, res) => {
    try {
        const headerValue = req.header(process.env.HEADER_NAME);
        if (headerValue !== process.env.HEADER_AUTHORIZATION) {
            return res.status(403).json({ error: 'Forbidden: Invalid header value' });
        }

        const cpu = await si.cpu();
        const mem = await si.mem();
        const osInfo = await si.osInfo();
        const network = await si.networkInterfaces();
        const uuid = await si.uuid()
        const system = await si.system();

        const info = {
            hostname: os.hostname(),
            platform: os.platform(),
            os: `${osInfo.distro} ${osInfo.release} (${osInfo.arch})`,
            kernel: osInfo.kernel,
            uptime: `${Math.floor(os.uptime() / 60)} minutes`,
            total_memory: `${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`,
            cpu: `${cpu.manufacturer} ${cpu.brand} (${cpu.cores} cores, ${cpu.speed} GHz)`,
            ip: network.find((n) => n.internal === false)?.ip4 || 'N/A',
            mac: network.find((n) => n.internal === false)?.mac || 'N/A',
            machine_uuid: uuid.os,
            hardware_uuid: uuid.hardware,
            mac_uuid: uuid.mac,
            serial: system.serial || 'N/A',
            manufacturer: system.manufacturer,
            model: system.model
        };

        db.query('INSERT INTO system_info SET ?', info, (error) => {
            if (error) {
                console.error('[ERROR] Failed to insert system info:', error.message);
                return res.status(500).json({ error: 'Unable to save system info' });
            }

            res.json({ success: true, info });
        });
    } catch (err) {
        console.error('[ERROR] Failed to get system info:', err.message);
        res.status(500).json({ error: 'Unable to fetch system info' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
