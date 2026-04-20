import React from 'react';
import taskType, { tasks } from "@/app/utils/tasks";
import ToDoList from "@/app/todo-list/componants/ToDoList";
import styles from "./ToDoListApp.module.css";

class ToDoListApp extends React.Component {
    state: Readonly<{tasks: taskType[]}> = { tasks}
    updateTasks = (tasks: taskType[]) => {
        this.setState({ tasks });
    }
    render(): React.ReactNode {
        return (
            <main className={styles.wrapper}>
                <ToDoList updateTasks={this.updateTasks} title={"Tasks OnGoing"} tasks={tasks.filter(t => !t.completed)}></ToDoList>
                <ToDoList updateTasks={this.updateTasks} title={"Tasks Completed"}  tasks={tasks.filter(t => t.completed)}></ToDoList>
            </main>
        )
    }
}

export default ToDoListApp;