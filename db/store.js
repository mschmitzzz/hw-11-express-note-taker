const fs = require('fs');

const uuidv1 = require('uuid/v1');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    getNotes() {
        return readFileAsync('db/db.json', 'utf8').then((notes) => {
            return JSON.parse(notes)
        })
    }

    addNote(note) {
        const { title, text } = note;

        if(!title || !text) {
            throw new Error ('Title and text are required')
        }

        const newNote = { title, text, id: uuidv1() };
        this.getNotes().then((notes) => {
            notes.push(newNote);

        });
    }
}

module.exports = new Store();