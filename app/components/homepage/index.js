import React from 'react';
import Contact from '../contacts';

import userData from '../../data';

class Homepage extends React.Component {
  componentWillMount() {
    this.setState({
      contacts: userData,
    });
  }

  handleAddContact = (e) => {
    const contacts = this.state.contacts;
    const newId = contacts[contacts.length - 1].id + 1;

    e.preventDefault();
    this.setState({
      contacts: contacts.concat({ id: newId, name: `New Contact # ${newId}` }),
    });
  };


  render() {
    return (
      <div id="homepage">
        <button onClick={this.handleAddContact}>Click To Add More</button>
        <div className="contact-list">
          {this.state.contacts.map(contact =>
            <Contact key={contact.id} name={contact.name} {...contact} />,
          )}
        </div>
      </div>
    );
  }
}

export default Homepage;
