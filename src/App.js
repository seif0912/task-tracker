import Header from './components/Header'
import Tasks from './components/Tasks'
import React, {useState} from 'react'
import AddTask from './components/AddTask'

let link = 'heyy'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30',
          reminder: true
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th at 2:30',
          reminder: false
      }
  ])
  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task )
    )
  }

  return (
    <div className="container">
      <Header title='Task Tracker'
        onAdd={()=> setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
