import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = ()=>{
        console.log('clicked')
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
        <Button color='green' text='hello'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header