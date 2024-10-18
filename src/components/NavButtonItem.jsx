import { PropTypes } from 'prop-types';

export const NavButtonItem = ({ active = false, onClick, text, val }) => {
  // console.log('NavButtonItem rendered');
  return (
    <button 
      className={`nav-link ${active ? 'active' : ''}`}
      onClick={ () => onClick(val) }
    >
      { text }
    </button>
  )
}

NavButtonItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired
}
