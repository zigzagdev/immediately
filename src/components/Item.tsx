import React, {useState} from 'react';
import {todo} from "./Todo";

interface lists {
    todos: todo;
    updateTodo: Function;
    complete: Function;
}

const Item: React.FC<lists> = ({todos, updateTodo, complete}) => {
    const [items, setItems] = useState(todos.content);

    const edit = () => {
        const changing = {
            ...todos,
            editing: !todos.status
        };
        updateTodo(changing);
    };
    const editComplete = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updating = {
          ...todos,
          content: items,
          editing: !todos.status
        }
        updateTodo(updating);
    }
    return (
        <div key={todos.id}>
            <form onSubmit={editComplete} style={{display: 'inline'}}>
                <span onClick={edit}>
                    {todos.status ? (
                        <input
                          type='text'
                          value={items}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItems(e.target.value)}
                        />
                    ): (
                        todos.content
                    )}
                </span>
            </form>
            <button onClick={() => complete(todos.id)}>-</button>
        </div>
    );
};

export default Item;