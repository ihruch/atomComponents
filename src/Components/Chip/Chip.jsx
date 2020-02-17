import React from 'react';
import PropTypes from 'prop-types';
import Image from './../Image/Image';
import Icon from './../Icon/Icon';
import classNames from 'classnames';

import './Chip.css';

const Chip = ({ text, className, withImage, withIcon, withClose, imageSrc, imgAlt, iconName, onCloseClick, onChipClick, id }) => {

  const onCloseClickAction = e => {
    e.stopPropagation();
    onCloseClick(e, id);
  };

  const onChipClickAction = () => {
    onChipClick(id)
  };


  const classes = classNames(
    'chip',
    className,
  );

  return (
    <div className={classes} onClick={onChipClickAction}>

      { withImage &&  
        // eslint-disable-next-line react/jsx-wrap-multilines
        <span className="chipImage"> 
          <Image src={imageSrc} alt={imgAlt} width={24} heigh={24} />
        </span>
      }   

      { withIcon &&   
        // eslint-disable-next-line react/jsx-wrap-multilines
        <span className="chipIcon"> 
          <Icon name={iconName} />
        </span>
      }

      <span className="chipText">{text}</span>
      
      {withClose && 
        // eslint-disable-next-line react/jsx-wrap-multilines
        <span className="chipClose" onClick={ (e) => onCloseClickAction(e) }>
          <Icon name="times" />
        </span>
      } 

    </div>
  );

}
Chip.propTypes = {
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string ]).isRequired,
  withImage: PropTypes.bool, 
  withIcon: PropTypes.bool, 
  withClose: PropTypes.bool,
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  iconName: PropTypes.string,
  onCloseClick: PropTypes.func, 
  onChipClick: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Chip.defaultProps = {
  className: '',
  withImage: false, 
  withIcon: false, 
  withClose: false,
  imageSrc: '',
  imgAlt: '',
  iconName: '',
  onCloseClick: () => {}, 
  onChipClick: () => {},
  id: null,
};
export default Chip;
