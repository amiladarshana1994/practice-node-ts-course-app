import React from 'react';
import taskType, { tasks } from "@/app/utils/tasks";
import ToDoList from "@/app/todo-list/componants/ToDoList";
import styles from "./ToDoListApp.module.css";
import ToDoListInput from "@/app/todo-list/componants/ToDoListInput";

class ToDoListApp extends React.Component {
    state: Readonly<{tasks: taskType[]}> = { tasks}
    updateTasks = (tasks: taskType[]) => {
        this.setState({ tasks });
    }

    addTask = (taskTitle: string) => {

        const newTask:taskType = { id: this.state.tasks.length + 1, title: taskTitle, description: "", completed: false };
        this.setState({ tasks : [...this.state.tasks, newTask] });
        console.log(this.state.tasks)
    }

    render(): React.ReactNode {
        return (
            <main className={styles.wrapper}>
                <ToDoListInput addTask={this.addTask} > </ToDoListInput>
                <ToDoList updateTasks={this.updateTasks} title={"Tasks OnGoing"} tasks={this.state.tasks.filter(t => !t.completed)}></ToDoList>
                <ToDoList updateTasks={this.updateTasks} title={"Tasks Completed"}  tasks={this.state.tasks.filter(t => t.completed)}></ToDoList>
            </main>
        )
    }
}

export default ToDoListApp;