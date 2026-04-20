import React from 'react';

export interface PropType {
    addTask: (taskTitle: string) => void;
}

class ToDoListInput extends React.Component<PropType> {
    render(): React.ReactNode {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                const input = e.target[0] as HTMLInputElement
                console.log(input.value)
                this.props.addTask(input.value)
                input.value = ""
            }}
            >
                <input type="text" placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default ToDoListInput;