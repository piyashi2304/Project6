import React ,{useState} from 'react'

function Usertodo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingTask, setEditingTask] = useState('');
  
    const addTask = () => {
      if (newTask.trim()) {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    const editTask = (index) => {
      setEditingIndex(index);
      setEditingTask(tasks[index].text);
    };
  
    const saveTask = (index) => {
      if (editingTask.trim()) {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, text: editingTask } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditingTask('');
      }
    };
  
    const toggleCompletion = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    return (
      <div className="Parent">
        <div className="child">
          <h1>To-Do List</h1> <br /><hr /> <br />
          <input type="text" placeholder=   "add item...." value={newTask} onChange={(e) => setNewTask(e.target.value)} /> <br />  <br />
          <button className='add' onClick={addTask}>Add</button> <br /> <br />
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                {editingIndex === index ? (
                  <div className='child1'>
                    <input type="text" value={editingTask} onChange={(e) => setEditingTask(e.target.value)} />
                    <button className='child2' onClick={() => saveTask(index)}>Save</button>
                  </div>
                ) : (
                  <div className='child3'>
                    <span onClick={() => toggleCompletion(index)}>
                      {task.text}
                    </span>
                    <div className='grandchild'>
                    <button className='grandchild1' onClick={() => editTask(index)}>Edit</button>
                    <button className='grandchild1' onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Usertodo