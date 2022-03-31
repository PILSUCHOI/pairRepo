/* TODO: TodoForm, Todo 컴포넌트를 불러옵니다. */
import TodoForm from '../component/TodoForm';
import Todo from '../component/Todo';
import {useState} from 'react';
import "../todos.css";

var counter = 0;

function Todos() {
  /* TODO: 리스트를 담을 state를 생성합니다. */
  const [todoList, setTodoList] = useState([]);

  const addTodo = (content) => {
    /* TODO: Todo를 생성할 메소드를 만듭니다. */
    let objContent = {'id': counter++, 'text': content};
    setTodoList([...todoList,objContent]);
    // console.log(todoList);
  };

  const removeTodo = (id) => {
    /* TODO: Todo를 삭제할 메소드를 만듭니다. */
    setTodoList(todoList.filter(list=>list.id !== id));
    // console.log(todoList);
  };

  const completeTodo = (e)=>{let targetTag = e.target.parentElement;
    targetTag.classList.contains('complete') ? targetTag.classList.remove("complete"): targetTag.classList.add("complete")
  };
  


  return (
    <div>
      <div className='todo-app'>
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm onSubmit={addTodo}/>
        {/* TODO: TodoForm 컴포넌트를 연결합니다. */}
        {/* TODO: Todo 컴포넌트를 연결한 뒤, 생성한 메소드를 prop으로 보냅니다. */}
        <Todo todos={todoList} completeTodo={completeTodo} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default Todos;
