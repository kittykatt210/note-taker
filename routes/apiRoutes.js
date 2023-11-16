const router = require('express').Router();
const path = require('path');
const fs = require('fs');
var uniqid = require('uniqid');

router.get('/api/notes', async (req, res) => {
   res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };

    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

module.exports = router;