import React, { useReducer } from 'react';

const MyuseReducerEx = () => {
    const initialState = {
        todos: [],
        newTodo: ''
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NEW_TODO':
                return { ...state, newTodo: action.playload };
            case 'ADD_TODO':
                if (state.newTodo.trim() === '') return state;
                return {
                    ...state,
                    todos: [...state.todos, { id: Date.now(), text: state.newTodo }],
                    newTodo: ''
                };
            case 'DELETE_TODO':
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.playload)
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (e) => {
        dispatch({ type: 'SET_NEW_TODO', playload: e.target.value });
    };

    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO' });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', playload: id });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                type="text"
                value={state.newTodo}
                onChange={handleInputChange}
                placeholder='할 일을 입력하세요.'    
            />
            <button onClick={handleAddTodo}>추가</button>

            <ul>
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyuseReducerEx;