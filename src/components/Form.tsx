import React, {useState} from 'react';

interface lists {
    make: Function
}
const Form: React.FC<lists> = ({make}) => {
    const [enter, setEnter] = useState('');
    const add = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const making = {
          id: Math.floor(Math.random() * 1e5),
          content: enter
      };
      make(making);
      setEnter('');
    }
    return (
        <div>
            <form onSubmit={add}>
                <input
                  type='text'
                  value={enter}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                      setEnter(e.target.value)
                  }
                />
                <button>+</button>
            </form>
        </div>
    );
};

export default Form;