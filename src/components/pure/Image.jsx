import PropTypes from 'prop-types';


const Image = ({ src, alt, width, height }) => {
  return (
    <figure
      className='sm:overflow-hidden sm:rounded-s-xl'
    >
      <img 
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='aspect-video object-cover sm:aspect-[3/4] md:aspect-square'
      />
    </figure>
  );
};


Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};


export default Image;
