import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ListGroupItem.css';


const ListGroupItem = ({ children, className, tag: Tag, active, disabled, ...attrs}) => {
   
  if(attrs.href && Tag === 'li') {
    Tag = 'a';
  }

  const classes = classNames(
    'list-group-item',
    className,
    { active },
    { disabled }
  ); 
    

  return (
    <Tag className={classes} {...attrs}>
        { children } 
    </Tag>   
  )
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li',
};

export default ListGroupItem;