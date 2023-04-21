import style from "./Note.module.css"
import Button from "../../Button/Button"
const Note = (props) => { 
    return (
        <div className={style.note}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.text}>{props.text}</p>
            <p className={style.time}>{props.time}</p>
            <Button text="Delete" />
        </div>
    )
}

export default Note