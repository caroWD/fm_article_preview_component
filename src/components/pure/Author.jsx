import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import ButtonShare from './ButtonShare';
import ShareBox from './ShareBox';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import ShareFloating from './ShareFloating';
import avatar from '../../assets/avatar-michelle.jpg'


const Author = ({ author, date, share }) => {

  const { firstName, lastName } = author;
  const { day, month, year } = date;
  const { facebook, twitter, pinterest } = share;

  const [shareBox, setShareBox] = useState(false);
  const handleShareBox = () => setShareBox(!shareBox);

  const [widthScreen, setWidthScreen] = useState(false);
  const handleWidthScreen = () => setWidthScreen(!widthScreen);

  useEffect(() => {
    window.matchMedia('(min-width: 640px)').matches && handleWidthScreen();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={(`${!widthScreen ? 'relative' : ''} px-7 pb-5 flex gap-4 justify-between items-center sm:px-10 md:pb-8`).trim()}
    >
      <img
        src={avatar}
        alt={`Avatar of ${firstName} ${lastName}`}
        width='40'
        height='40'
        className='rounded-full'
      />
      <div
        className="grow"
      >
        <h3
          className="font-black"
        >
          {`${firstName} ${lastName}`}
        </h3>
        <p
          className="text-cadet-blue"
        >
          {`${day} ${month} ${year}`}
        </p>
      </div>
      {
        !widthScreen ? 
          <div>
            <ButtonShare 
              handle={handleShareBox}
              state={shareBox}
            />
            <AnimatePresence>
              {
                shareBox &&
                  <motion.div
                    className='absolute -top-4 bottom-0 left-0 w-full'
                    initial={{ opacity: 0, translateY: 100 }}
                    animate={{ opacity: 1,  translateY: 0 }}
                    exit={{ opacity: 0,  translateY: 100 }}
                    transition={{ bounce: 0 }}
                    key='box'
                  >
                    <ShareBox 
                      facebook={facebook}
                      twitter={twitter}
                      pinterest={pinterest}
                      handle={handleShareBox}
                    />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
        :
          <div
            className='relative'
          >
            <ButtonShare
              handle={handleShareBox}
              state={shareBox}
            />
            <AnimatePresence>
              {
                shareBox &&
                  <motion.div
                  className='absolute -top-1/2 left-full'
                    initial={{ opacity: 0, scale: 0, translateX: -150, translateY: -25 }}
                    animate={{ opacity: 1, scale: 1, translateX: -150, translateY: -75 }}
                    exit={{ opacity: 0, scale: 0, translateX: -150, translateY: -25 }}
                    transition={{ bounce: 0 }}
                    key="floating"
                  >
                    <ShareFloating 
                      facebook={facebook}
                      twitter={twitter}
                      pinterest={pinterest}
                    />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
      }
    </div>
  );
};


Author.propTypes = {
  author: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  share: PropTypes.object.isRequired,
};


export default Author;
