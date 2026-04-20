"use client";
import ToDoListApp from "@/app/todo-list/componants/ToDoListApp";

export default function Index() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex items-center justify-center p-6">
            <div className="w-full max-w-xl rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 shadow-xl backdrop-blur p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                    Todo List
                </h1>
                <ToDoListApp />
            </div>
        </div>
    );
}
