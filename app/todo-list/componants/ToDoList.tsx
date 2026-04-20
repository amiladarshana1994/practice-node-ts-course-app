import React from 'react';
import taskType from "@/app/utils/tasks";
import ToDoListItem from "@/app/todo-list/componants/ToDoListItem";
import styles from "./ToDoListApp.module.css";

export interface PropType {
    tasks: taskType[]
    title?: string
    updateTasks
}

class ToDoList extends React.Component<PropType> {

    render(): React.ReactNode {
        return <React.Fragment>
            <h2 className={styles.title}>{this.props.title}</h2>
            {
                this.props.tasks.map((t) => (
                    <ToDoListItem updateTasks={this.props.updateTasks} task={t} key={t.id} ></ToDoListItem>
                ))
            }
        </React.Fragment>
    }
}

export default ToDoList;