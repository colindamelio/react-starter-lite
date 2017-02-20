import React from 'react';
import Contact from '../contacts';

import userData from '../../data';

class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        {userData.map(contact =>
          <Contact key={contact.id} name={contact.name} email={contact.email} />, // {...info}
        )}
      </div>
    );
  }
}

export default Homepage;
