import { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoContainer = styled.div`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.375rem;
    padding: 0.75rem 0.5rem;
    gap: 0.75rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
    color: black;
    background-color: ${({ completed }) => (completed ? "#c6e9a7" : "#ccbed7")};
    width: 500px;

    input[type='checkbox'] {
        cursor: pointer;
    }

    input[type='text'] {
        border: 1px solid transparent;
        outline: none;
        width: 100%;
        background-color: transparent;
        border-radius: 0.375rem;
        padding: ${({ editable }) => (editable ? "0 0.5rem" : "0")};
        ${({ completed }) => completed && "text-decoration: line-through;"};
    }

    button {
        display: inline-flex;
        width: 2rem;
        height: 2rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.375rem;
        justify-content: center;
        align-items: center;
        background-color: #f7fafc;
        cursor: pointer;
        transition: background-color 0.3s;
        flex-shrink: 0;
        &:hover {
            background-color: #edf2f7;
        }
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`;

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <TodoContainer completed={todo.completed} editable={isTodoEditable}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </TodoContainer>
    );
}
TodoItem.propTypes = {
    todo: PropTypes.string.isRequired
  };

export default TodoItem;
