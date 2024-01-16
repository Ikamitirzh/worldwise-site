/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button({children, onClick, type}) {
    return (
        <button onClick={onClick} className={`${StyleSheet.btn}
        ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button
