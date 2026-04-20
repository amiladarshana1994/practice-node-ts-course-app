import React from 'react';
import taskType from "@/app/utils/tasks";

export interface PropType {
    task: taskType,
    key?: number
}

class ToDoListItem extends React.Component<PropType> {
    render(): React.ReactNode {
        return (
            <details key={this.props.task.id}>
                <summary>{this.props.task.title}</summary>
                <p>{this.props.task.description}</p>
            </details>
        )
    }
}

export default ToDoListItem;