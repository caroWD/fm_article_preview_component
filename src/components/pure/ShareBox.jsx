import { IoLogoFacebook, IoLogoTwitter, IoLogoPinterest } from "react-icons/io5";
import PropTypes from 'prop-types';
import ButtonClose from "./ButtonClose";


const ShareBox = ({ facebook, twitter, pinterest, handle }) => {

  return (
    <div
      className="min-h-full px-7 py-5 flex items-center justify-between gap-3 bg-fiord text-white"
    >
      <p
        className="tracking-[0.3rem] uppercase text-lynch"
      >
        Share
      </p>
      {facebook && <IoLogoFacebook className="size-6" />}
      {twitter && <IoLogoTwitter className="size-6" />}
      {pinterest && <IoLogoPinterest className="size-6 mr-auto" />}
      <ButtonClose handle={handle} />
    </div>
  );
};


ShareBox.propTypes = {
  facebook: PropTypes.bool.isRequired,
  twitter: PropTypes.bool.isRequired,
  pinterest: PropTypes.bool.isRequired,
  handle: PropTypes.func.isRequired,
};


export default ShareBox;
