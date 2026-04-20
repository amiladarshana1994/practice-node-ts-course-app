
type taskType = {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

export const tasks: taskType[] = [
    { id: 1, title: 'Task 1', description: "des 1", completed: false },
    { id: 2, title: 'Task 2', description: "des 2", completed: true },
    { id: 3, title: 'Task 3', description: "des 3", completed: false },
    { id: 4, title: 'Task 4', description: "des 4", completed: true },
    { id: 5, title: 'Task 5', description: "des 5", completed: false },
];

export default taskType;