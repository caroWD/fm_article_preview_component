import PropTypes from 'prop-types';


const Copy = ({ title, intro }) => {
  return (
    <hgroup
      className='p-7 sm:px-10 sm:py-8 md:pb-5'
    >
      <h2
        className='font-bold text-base mb-3 sm:text-lg md:text-xl'
      >
        {title}
      </h2>
      <p>
        {intro}
      </p>
    </hgroup>
  );
};


Copy.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};


export default Copy;
