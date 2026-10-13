// render dari state, sehingga perubahan pada state secara dinamis di update pada tampilan

import { useState } from 'react';

function TodoList() {
    // State untuk menyimpan daftar tugas
    const [todos, setTodos] = useState([
        { id: 1, task: "Belajar React" },
        { id: 2, task: "Mengerjakan Tugas 1" },
        { id: 3, task: "Mengerjakan Tugas 2" },
        { id: 4, task: "Mengerjakan Tugas 3" },
        { id: 5, task: "Mengerjakan Tugas 4" },
        { id: 6, task: "Mengerjakan Tugas 5" },
        { id: 7, task: "Mengerjakan Tugas 6" },
    ]);
    const hapusTugas = (idTarget) => {
        // Memfilter array untuk membuang task yang diklik
        const todoTerbaru = todos.filter(todo => todo.id !== idTarget);
        setTodos(todoTerbaru);
    };
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.task}
                    <button onClick={() => hapusTugas(todo.id)}>Selesai</button>
                </li>
            ))}
        </ul>
    );
}
export default TodoList;