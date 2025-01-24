import { IoLogoFacebook, IoLogoTwitter, IoLogoPinterest } from "react-icons/io5";
import PropTypes from 'prop-types';


const ShareFloating = ({ facebook, twitter, pinterest }) => {
  return (
    <div
      className="flex items-center gap-4 rounded-xl px-10 py-5 bg-fiord text-white shadow-xl after:absolute after:size-8 after:left-1/2 after:-translate-x-1/2 after:-bottom-[45%] after:border-t-[1rem] after:border-r-[1rem] after:border-l-[1rem] after:border-solid after:border-x-[transparent] after:border-t-fiord"
    >
      <p
        className="tracking-[0.3rem] uppercase text-lynch"
      >Share</p>
      {facebook && <IoLogoFacebook className="size-6 cursor-pointer transition-opacity duration-300 hover:opacity-80" />}
      {twitter && <IoLogoTwitter className="size-6 cursor-pointer transition-opacity duration-300 hover:opacity-80" />}
      {pinterest && <IoLogoPinterest className="size-6 cursor-pointer transition-opacity duration-300 hover:opacity-80" />}
    </div>
  );
};


ShareFloating.propTypes = {
  facebook: PropTypes.bool.isRequired,
  twitter: PropTypes.bool.isRequired,
  pinterest: PropTypes.bool.isRequired,
};


export default ShareFloating;
