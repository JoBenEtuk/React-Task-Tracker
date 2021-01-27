import './index.css';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: `Kill John Wick's dog`,
        day: 'Feb 5th at 5:30pm',
        reminder: false,
      },
      {
        id: 2,
        text: `Get killed by John Wick for killing his dog`,
        day: 'Feb 6th at 6:00pm',
        reminder: false,
      },
      {
        id: 3,
        text: `Still alive 'cause I changed my mind`,
        day: 'Feb 7th at 2:30pm',
        reminder: true,
      },
    ])

  //Add Task
  const addTask = (e) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...e }
    setTasks([...tasks, newTask])
  }
  useEffect(() => {
    const getState = localStorage.getItem('state')
    if (getState) {
      setTasks(JSON.parse(getState));
    }
  }, []);

  useEffect(() => {
    const serializedState = JSON.stringify(tasks)
    localStorage.setItem('state', serializedState)
  });

  //Delete Task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (e) => {
    console.log(e)
    setTasks(
      tasks.map((task) =>
        task.id === e ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowForm(!showForm)}
        showAdd={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /> : 'No task to show'}
    </div>
  );
}

export default App;
