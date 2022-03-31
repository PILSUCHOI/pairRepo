import { useState } from 'react';

function TodoForm({ onSubmit }) {
  /* TODO: input을 변수로 하는 state값을 생성합니다. */
  const [inputContent, setInputContent] = useState('');

  const handleChange = (e) => {
    /* TODO: input 내의 value가 변경되는 메소드를 작성합니다. */
    setInputContent(e.target.value);
  };

  const handleSubmit = (e) => {
    /* TODO: Todo를 입력해 전송하는 메서드를 작성합니다. */
    e.preventDefault();
    if(inputContent.length === 0){}
    else{onSubmit(inputContent)}
    setInputContent('');
  };

  return (
    <form id='todoForm' className='todo-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add a todo' value={inputContent} name='todoInput' className='todo-input' onChange={handleChange} />
      <button className='todo-button'>Add todo</button>
    </form>
  );
}

export default TodoForm;
