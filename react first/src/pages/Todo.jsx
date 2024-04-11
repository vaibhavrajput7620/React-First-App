import  { useState, useEffect } from 'react';
import { TodoProvider } from '../contexts/index';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
// import TodoItem from '../components/TodoItem';

const TodoContainer = styled.div`
    background-color: #172842;
    min-height: 100vh;
    padding: 2rem 0;
`;

const TodoWrapper = styled.div`
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #1f2a48;
    color: white;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

// const TodoList = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 1rem;
// `;

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        );
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));

        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
            <TodoContainer>
                <TodoWrapper>
                    <Title>Manage Your Todos</Title>
                    <div>
                        <TodoForm />
                    </div>
                    {/* <TodoList>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </TodoList> */}
                </TodoWrapper>
            </TodoContainer>
        </TodoProvider>
    );
};

export default Todo;
