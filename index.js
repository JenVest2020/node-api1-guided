const express = require('express');
const shortid = require('shortdid');

const server = express();

server.use(express.json());
// --------------------------------------------------------------//
server.get('/', (req, res) => {
    res.send({ hello: 'world' });
});

server.get('/hello', (req, res) => {
    res.send({ hello: 'Lambda school' });
});
// ---------------------------------------------------------------//

server.post('/api/hubs', (re, res) => {
    const hubInfo = req.body;

    const hubid = shortid.generate();

    hubs.push(hubInfo);
    res.status(201).json(hubInfo);
});

server.delete('/api/hubs/:id', (req, res) => {
    const { id } = req.params;
    const deleted = hubs.find(hub => hub.id === id);
    if (deleted) {
        hubs = hubs.filter(hub => hub.id !== id);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({ message: "id not found" });
    }
});

server.patch('/api/hubs/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    let found = hubs.find(hub => hub.id === id);

    if (found) {
        Object.assign(found, changes);
        res.status(200).json(found);
    } else {
        res.status(404).json({ message: 'id not found' });
    }
});




const port = 5000;

server.listen(port, () => {
    console.log(`listening on port ${port}...fat and happy`);
})