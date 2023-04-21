import style from './Button.module.css'
const Button = (props) => { 
    const clickToBtn = () => { 
        alert(`User clicked to btn ${props.text}`)
    }
    let styleForBtn = ""
    switch(props.theme){ 
        case "orange": {styleForBtn = style.themeOrange; break;}
        case "green": {styleForBtn = style.themeGreen; break;}
        case "red": {styleForBtn = style.themeRed; break;}
        default: {styleForBtn = style.themeDefault;break}
    }
    return (
        <button className={`${style.btn} ${styleForBtn}`} onClick={clickToBtn}>{props.text}</button>
    )
}

export default Button
