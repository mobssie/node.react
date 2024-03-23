import { useState, useEffect } from 'react';

function App() {

  const [ todoList, setTodoList ] = useState([])

  
  const getData = () => {
    fetch('http://localhost:4000/api/todo')
    .then((response) => response.json())
    .then((data) => setTodoList(data))
  }
  
  const onFetch = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        done
      })
    })
    getData()
  }
  
  useEffect(()=> {
    getData()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>TODO LIST</h1>
        <form onSubmit={onFetch}>
          <input name="text" />
          <input name="done" type="checkbox" />
          <input type="submit" value="추가" />
        </form>
        {todoList?.map((todo)=> (
          <div key={todo.id} style={{ display: 'flex' }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? 'Y' : 'N'}</div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
