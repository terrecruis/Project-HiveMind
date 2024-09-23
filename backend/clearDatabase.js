import fs from 'fs';

const dbPath = './database.db'; // Percorso del database

if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log('Database eliminato.');
} else {
    console.log('Nessun database trovato.');
}
