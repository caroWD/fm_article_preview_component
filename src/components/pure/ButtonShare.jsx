import { IoArrowRedoOutline, IoArrowRedoSharp } from "react-icons/io5";
import PropTypes from "prop-types";


const ButtonShare = ({ handle, state }) => {
  return (
    <button
      className={(`${state ? 'bg-fiord text-white' : 'bg-cadet-blue text-fiord'} relative block p-2 rounded-full cursor-pointer transition-colors duration-300 *:size-4 *:hover:opacity-100`)}
      onClick={() => handle()}
    >
      <IoArrowRedoOutline />
      <IoArrowRedoSharp className="absolute top-2 left-2 opacity-0 transition-opacity duration-300" />
    </button>
  );
};


ButtonShare.propTypes = {
  handle: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};


export default ButtonShare;