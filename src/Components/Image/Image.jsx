import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Image.css';

const Image = ({ src, alt, className, width, heigh, circle,  ...attrs }) => {

  if(!src) {
    src = `https://via.placeholder.com/${width}x${heigh}`
  }

  const classes = classNames(
    className,
    {isCircle: circle}
  );
   
  return(
    <img 
      src={src}
      alt={alt}
      className={classes}
      width={width}
      heigh={heigh}
      {...attrs}
    />
  )
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  heigh: PropTypes.number,
  circle: PropTypes.bool,
};

Image.defaultProps = {
  src: '',
  alt:  'Image name',
  className: '',
  width: 100,
  heigh: 100,
  circle: false,
};
export default Image;