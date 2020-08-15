import React, { Component } from 'react';
import Contact from './Contact';



import { Consumer } from '../../context';


class Contacts extends Component {
     constructor(props) {
          super(props);
          this.state = {}
     }
     // Delete Contact Method
     // deleteContact = (id) => {
     //      const { contacts } = this.state;
     //      const newContacts = contacts.filter(contact => contact.id !== id)
     //      this.setState({ contacts: newContacts })
     // }


     render() {

          return (
               <Consumer>
                    {value => {
                         const { contacts } = value
                         return (
                              <React.Fragment>
                                   <h1 className="display-4 mb-3"><span className="text-danger">Contact</span> List</h1>
                                   {contacts.map((contact, id) => <Contact key={id} contact={contact} />)}
                              </React.Fragment>
                         );
                    }}
               </Consumer>
          );
          // const { contacts } = this.state;

          // return (
          //      <React.Fragment>
          //           {contacts.map((contact, id) => <Contact key={id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />)}
          //      </React.Fragment>
          // );
     }
}

export default Contacts;