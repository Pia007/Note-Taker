// getNewNoteId()
//      1. The notes stored locally are assigned to the newNoteObject variable.
//      If there are not any saved notes, the newNoteObject assigned a value of 1.
//      Key of the newNoteObject is assigned to the list called constant keysArray.
//      Each key and its value is assigned to the keysArray constant  based on order, and is assured to be a number.
//      As each key value pair is added to the array, the id is assigned by adding a 1 to the highest existing key in the array.

function getNewNoteId() {
    let newNoteObject = getSavedNotes()
    if(!newNoteObject){
        return 1
    }
    const keysArray = Object.keys(newNoteObject)
    const numberKeys = keysArray.map((key) => Number(key))
    console.log(numberKeys)
    return Math.max(...numberKeys) + 1
}

// getSavedNotes() retrieves notes, in order, from local storage.
   // 1. If there all no saved notes, "view notes" will be blank.

function getSavedNotes() {
    let notes = localStorage.getItem('notes')
    if(!notes){
        return null
    }
    return JSON.parse(notes)
}