import React from 'react';
import {todo} from './Todo';
import Item from "./Item";

interface lists  {
    todos: todo[];
    updateTodo: Function;
    deleteTodo: Function;
}

const List: React.FC<lists> = ({todos, updateTodo, deleteTodo}) => {
    const complete = (id: number) => {
        deleteTodo(id);
    };
    return (
        <div>
            {todos.map((todo) => {
                return(
                    <div>
                        <Item
                            todos={todo} updateTodo={updateTodo} complete={complete} key={todo.id}
                        />
                    </div>
                )}
            )}
        </div>
    );
};

export default List;