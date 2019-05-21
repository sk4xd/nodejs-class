const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added.'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const filteredNotes = notes.filter((note) => note.title !== title);

    if(filteredNotes && filteredNotes.length !== notes.length) {
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note removed.'))

    } else if (filteredNotes.length === notes.length) {
        console.log(chalk.red.inverse('Note not found.'))
    };
};

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.inverse('Notes list:'))
    notes.forEach((note) => {
        console.log('Title: ',note.title)
    })
}

const readNote = (title) => {
    notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log('Title: ', chalk.inverse(note.title))
        console.log((note.body))
    } else {
        console.log(chalk.red.inverse('Note not found.'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}