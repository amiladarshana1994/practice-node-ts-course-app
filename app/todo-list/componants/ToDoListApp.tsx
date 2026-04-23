import React from 'react';
import taskType, { tasks } from "@/app/utils/tasks";
import ToDoList from "@/app/todo-list/componants/ToDoList";
import styles from "./ToDoListApp.module.css";
import ToDoListInput from "@/app/todo-list/componants/ToDoListInput";

class ToDoListApp extends React.Component {
    state: Readonly<{tasks: taskType[]}> = { tasks}
    updateTasks = () => {
        const updatedTasks = [...this.state.tasks];
        this.setState({ updatedTasks });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    addTask = (taskTitle: string) => {
        const newTask:taskType = { id: this.state.tasks.length + 1, title: taskTitle, description: "", completed: false };
        const updatedTasks = [...this.state.tasks, newTask];
        this.setState({ tasks : updatedTasks });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    render(): React.ReactNode {
        return (
            <main className={styles.wrapper}>
                <ToDoListInput addTask={this.addTask} />
                <ToDoList updateTasks={this.updateTasks} title={"Tasks OnGoing"} tasks={this.state.tasks.filter(t => !t.completed)}></ToDoList>
                <ToDoList updateTasks={this.updateTasks} title={"Tasks Completed"}  tasks={this.state.tasks.filter(t => t.completed)}></ToDoList>
            </main>
        )
    }

    componentDidMount() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            this.setState({ tasks: JSON.parse(storedTasks) });
        }
    }
}

export default ToDoListApp;