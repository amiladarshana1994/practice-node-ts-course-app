import React from 'react';

export interface PropType {
    addTask: (taskTitle: string) => void;
}

interface StateType {
    taskTitle: string;
}

class ToDoListInput extends React.Component<PropType, StateType> {
    state: {taskTitle:string}
    constructor(prop:PropType) {
        super(prop);
        this.state = { taskTitle:"" }
    }
    render(): React.ReactNode {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.addTask(this.state.taskTitle)
                this.setState({ taskTitle:"" })
            }}
            >
                <input value={this.state.taskTitle}
                       onChange={(e)=> {
                           this.setState({taskTitle: e.target.value});
                       }} 
                       type="text" 
                       placeholder="Add a new task" 
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default ToDoListInput;