import React from 'react';
import { tasks } from "@/app/utils/tasks";
import ToDoList from "@/app/todo-list/componants/ToDoList";


class ToDoListApp extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <h1>Todo List App</h1>
                <ToDoList title={"Tasks OnGoing"} tasks={tasks.filter(t => !t.completed)}></ToDoList>
                <ToDoList title={"Tasks Completed"}  tasks={tasks.filter(t => t.completed)}></ToDoList>
            </main>
        )
    }
}

export default ToDoListApp;