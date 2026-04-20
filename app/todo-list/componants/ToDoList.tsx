import React from 'react';
import taskType from "@/app/utils/tasks";
import ToDoListItem from "@/app/todo-list/componants/ToDoListItem";

export interface PropType {
    tasks: taskType[]
    title?: string
}

class ToDoList extends React.Component<PropType> {
    render(): React.ReactNode {
        return <React.Fragment>
            <h2>{this.props.title}</h2>
            {
                this.props.tasks.map((t) => (
                    <ToDoListItem task={t} key={t.id} ></ToDoListItem>
                ))
            }
        </React.Fragment>
    }
}

export default ToDoList;