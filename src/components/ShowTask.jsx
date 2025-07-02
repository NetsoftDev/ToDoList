import styles from "../styles/Header.module.css"

export default function ShowTask(){
    return(
        <div>
            <button type="button" className={styles.show_button} aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>all</span>
                <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className={styles.show_button} aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Active</span>
                <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className={styles.show_button} aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Completed</span>
                <span className="visually-hidden"> tasks</span>
            </button>
        </div>
    )
}