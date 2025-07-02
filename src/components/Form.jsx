import { useState } from "react"
import styles from "../styles/Header.module.css"
import ShowTask from "./ShowTask"


export default function Form(){
    const[isVisible, setIsVisible] = useState(false)
    return(
        {isVisible && 
            <div className={styles.addtask}>
            <form>
                <label For="task" className={styles.label}><h2>Add Task</h2></label>
                <input type="text" id="Task" name="AddTask" placeholder="Add Task" className={styles.input}/>
                <button className={styles.button}>Submit</button>
                <ShowTask/>
            </form>
        </div>
        }
        
    )
}