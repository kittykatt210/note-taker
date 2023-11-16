const router = require('express').Router();
const fs = require('fs');
var uniqid = require('uniqid');

router.get('/api/notes', async (req, res) => {
    const db = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(db);
});

router.post('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const { title, text } = req.body;
    
    const newNote = {
        title,
        text,
        id: uniqid(),
    };

    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

module.exports = router;