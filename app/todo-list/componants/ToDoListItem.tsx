import React from 'react';
import taskType from "@/app/utils/tasks";
import styles from "./ToDoListApp.module.css";

export interface PropType {
    task: taskType,
    key?: number,
    updateTasks
}

class ToDoListItem extends React.Component<PropType> {
    render(): React.ReactNode {
        return (
            <details key={this.props.task.id} className={styles.details}>
                <summary className={styles.summary}>
                    <input type="checkbox" className={styles.checkbox} checked={this.props.task.completed} onClick={() => {
                        this.props.task.completed = !this.props.task.completed
                        this.props.updateTasks()
                    }}
                    />
                    {this.props.task.title}
                </summary>
                <p className={styles.description}>{this.props.task.description}</p>
            </details>
        )
    }
}

export default ToDoListItem;