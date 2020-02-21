import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tooltip.css';

class Tooltip extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'fight']),
    content: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
  }

  static defaultProps = {
    position: 'top',
    style: {},
    content: '',
  }

  state = { visible: false }

  changeVisibleTooltip = (visible = true) => {
    this.setVisible(visible) ;
  }

  setVisible = visible => {
    this.setState({
      visible
    });
  }

  render() {
    const { visible } = this.state;
    const {children, position, content, style } = this.props;

    const classes = classNames(
      'tooltip', 
      position
    )
    return (
        
      <span className="tooltipWrapper">  
        {visible && <span className={classes} style={style}> {content} </span>}
        <span 
          onMouseEnter={() => this.changeVisibleTooltip()}
          onMouseLeave={() => this.changeVisibleTooltip(false)}
        >
          {children}
        </span>
      </span>
        
    )
  }
}



export default Tooltip;