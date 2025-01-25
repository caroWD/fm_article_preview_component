import PropTypes from 'prop-types';
import image from '../../assets/drawers.jpg'


const Image = ({ alt, width, height }) => {
  return (
    <figure
      className='sm:overflow-hidden sm:rounded-s-xl'
    >
      <img 
        src={image}
        alt={alt}
        width={width}
        height={height}
        className='aspect-video object-cover sm:aspect-[3/4] md:aspect-square'
      />
    </figure>
  );
};


Image.propTypes = {
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};


export default Image;
