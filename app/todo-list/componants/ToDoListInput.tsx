import React from 'react';

export interface PropType {
    addTask: (taskTitle: string) => void;
}

class ToDoListInput extends React.Component<PropType> {
    state: {taskTitle:string}
    constructor(prop:never) {
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
                       onInput={(e)=> {
                           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                           // @ts-expect-error
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