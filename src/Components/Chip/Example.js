/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Chip from './Chip';

class Example extends Component {
  state = {
    people: 
        [ 
            { name: 'Max' , active: false, icon: 'user' },  
            { name: 'Jack', active: false, icon: 'user-secret' }, 
            { name: 'Leo' , active: true,  icon: 'user-tie'  } 
        ]
  }

  removeChip = (e, id) => {
    this.setState( ({ people }) => ({
      people: people.filter( ({ name }) => name !== id )
    }));
  }

  toggleActiveChip = id => {
    this.setState(({ people }) => ({
      people: people.map( ({ name, active }) => {
        if (name === id) {
          active = !active;
        }
        return {
          name,
          active,
        };
      }),
    }));
  }

  render() {
    const { people } = this.state;

    return (
      <Fragment>
        {people.map(({ name, active, icon }) => (
          <Chip
            text={name}
            key={name}
            iconName='user'
            id={name}
            className={active ? 'active' : ''}
            withClose
            withIcon
            onCloseClick={this.removeChip}
            onChipClick={this.toggleActiveChip}
          />
        ))}
      </Fragment>
    );
  }
}

export default Example;
/* eslint-enable */