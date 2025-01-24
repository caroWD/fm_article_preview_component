import PropTypes from 'prop-types';
import Copy from '../pure/Copy';
import Image from '../pure/Image';
import Author from '../pure/Author';


const PostCard = ({ postItem }) => {

  const { post, author, date, share } = postItem;
  const { title, intro, urlImage, altImage, sizeImage } = post;

  return (
    <article className='flex flex-col overflow-hidden rounded-xl bg-white shadow-lg sm:flex-row sm:overflow-visible'>
      <Image src={urlImage} alt={altImage} width={sizeImage[0]} height={sizeImage[1]} />
      <div>
        <Copy title={title} intro={intro} />
        <Author author={author} date={date} share={share} />
      </div>
    </article>
  );
};


PostCard.propTypes = {
  postItem: PropTypes.object.isRequired,
};


export default PostCard;
