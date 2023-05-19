import {useState} from "react";

export type todo = {
    id: number,
    content: string,
    status: boolean
};

const todo = () => {
  const lists = [
      {
          id: 1,
          content: 'make a result',
          status: true
      },
      {
          id: 2,
          content: 'laver ses main',
          status: true
      },
      {
          id: 3,
          content: 'Laravel study',
          status: true
      },
      {
          id: 4,
          content: 'learn machine learning',
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
      const newTodo = lists.filter((list) => {
          return list.id !== id;
      })
      setTodo(newTodo);
  };
  return(
      <>
          <div>

          </div>
      </>
  );
}