import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <input type="checkbox"
                checked={task.reminder}
                onChange={() => onToggle(task.id)} />
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red' }}
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
