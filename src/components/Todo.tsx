import {useState} from "react";
import Form from "./Form";
import List from "./List";

export type todo = {
    id: number,
    content: string,
    status: boolean
};

const Todo = () => {
  const lists = [
      {
          id: 1,
          content: 'make a result',
          status: false
      },
      {
          id: 2,
          content: 'laver ses main',
          status: false
      },
      {
          id: 3,
          content: 'Laravel study',
          status: false
      },
      {
          id: 4,
          content: '4',
          status: false
      },
      {
          id: 5,
          content: '5',
          status: false
      },
      {
          id: 6,
          content: '6',
          status: false
      },
  ];

    // oblige to set an initial value.
  const [todo, setTodo] = useState<todo[]>(lists);
  
  const make = (todo: todo) => {
    setTodo([...lists, todo]);
  };

  const updateTodo = (todo: todo) => {
    const newTodo = lists.map((list) => {
        return list.id == todo.id ? {...list, ...todo} : {...list}
    });
    return setTodo(newTodo);
  };

  const deleteTodo = (id: number) => {
      const newTodo = lists.filter((todo) => {
          return todo.id !== id;
      })
      setTodo(newTodo);
  };
  return(
      <>
          <div>
              <List todos={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
              <Form make={make}/>
          </div>
      </>
  );
}

export default Todo;