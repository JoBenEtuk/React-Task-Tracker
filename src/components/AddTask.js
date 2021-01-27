import { useState } from "react"

const AddTasks = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        const error = document.getElementById('error');
        const success = document.getElementById('success');
        if (!text) {
            error.style.display = 'block'
            setTimeout(() => {
                error.style.display = 'none'
            }, 2000);
            return
        } else {
            success.style.display = 'block'
            setTimeout(() => {
                success.style.display = 'none'
            }, 2000);
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div style={{ display: 'none', background: 'gainsboro', borderRadius: '3px', padding: '9px' }} id="error">
                Please add a task
            </div>
            <div style={{ display: 'none', background: ' rgb(161, 240, 161)', borderRadius: '3px', padding: '9px' }} id="success">
                Task Added
            </div>
            <div className="form-control">
                <label>Task</label>
                <input type="text"
                    placeholder='Add Task'
                    value={text}
                    // required
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    value={day}
                    placeholder='Add Day & Time'
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check ">
                <label>Set Reminder</label>
                <input type="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTasks
