import  { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.375rem 0 0 0.375rem;
    padding: 0.375rem 0.75rem;
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.15s;
    &:focus {
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 0 0.375rem 0.375rem 0;
    padding: 0.375rem 0.75rem;
    background-color: #48bb78;
    color: white;
    cursor: pointer;
    transition: background-color 0.15s;
    &:hover {
        background-color: #38a169;
    }
`;

function TodoForm() {
    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false });
        setTodo('');
        window.location.replace("http://localhost:5173/welcomepage/viewtodo");
    };

    return (
        <Form onSubmit={add}>
            <Input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <Button type="submit">Add</Button>
        </Form>
    );
}

export default TodoForm;
