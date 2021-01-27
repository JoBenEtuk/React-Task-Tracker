const { default: Button } = require("./Button")

const Header = ({ onAdd, showAdd }) => {
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'Red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </div>
    )
}

export default Header
