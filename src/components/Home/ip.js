const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/logUserInfo', (req, res) => {
    const userInfo = req.body;
    const logEntry = `IP: ${userInfo.ip}, City: ${userInfo.city}, Region: ${userInfo.region}, Country: ${userInfo.country}, UserAgent: ${userInfo.userAgent}, Browser Language: ${userInfo.browserLanguage}, Time: ${userInfo.timeVisited}\n`;

    fs.appendFile('user_log.txt', logEntry, (err) => {
        if (err) {
            console.error("Log dosyasına yazılamadı: ", err);
            return res.status(500).send("Sunucu hatası");
        }
        res.status(200).send("Bilgiler kaydedildi");
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
