
import Header from "./Components/Assets/Header/Header"
import Notes from "./Components/Notes/Notes"

const App = (props) => {
    return (
        <>
            <Header />
            <Notes
                notesStore = {props.notesStore}
                reRender = {props.reRender}
                type="notes"
             />
        </>
    )
}

export default App