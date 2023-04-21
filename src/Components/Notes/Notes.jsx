import React from 'react'
import s from './Notes.module.css'
import Note from "./Note/Note"
const Notes = (props) => { 
    let notesStore = props.notesStore
    let NoteElements = notesStore.map((note, index) => {
        return <Note key={`${props.type}${index}`} theme={note.theme} text={note.text} title={note.title} time = {note.time}/>
    })
    let inputRef = React.createRef()
    let inputRef2 = React.createRef()

    const createNewNote = () => {
        notesStore.push({
            title: inputRef.current.value,
            text: inputRef2.current.value,
            time: new Date().toLocaleString(),
            theme: null
        })
        props.reRender(notesStore)
        inputRef.current.value = null
        inputRef2.current.value = null
    }
    return(
        <>
            {NoteElements}
            <div className={s.form}>
                <input ref={inputRef} className={s.input} type="text" placeholder="Write new title"/>
                <input ref={inputRef2} className={s.input} type="text" placeholder="Write new text"/>
                <button onClick={createNewNote} className={s.btn}>Create</button>
            </div>
        </>
    )
}

class NotesStore {
    constructor(title, text, time, index) {
        this.title = title
        this.text = text
        this.time = time
        this.index = index
    }
}

export default Notes