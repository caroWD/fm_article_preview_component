import PropTypes from 'prop-types';
import { IoClose } from "react-icons/io5";


const ButtonClose = ({ handle }) => {
  return (
    <button
      className='block bg-lynch p-2 rounded-full cursor-pointer'
      onClick={() => handle()}
    >
      <IoClose className='size-4' />
    </button>
  );
};


ButtonClose.propTypes = {
  handle: PropTypes.func.isRequired,
};


export default ButtonClose;
