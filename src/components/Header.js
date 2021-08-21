import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'} clicked={onAdd}/>
        </header>

    )
}

Header.defaultProps = {
    title: "Task Default"
}

Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyle = {
//     color: 'red', backgroundColor:'black'
// }

export default Header
