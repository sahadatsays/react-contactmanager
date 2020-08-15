/**
 *  Uncontrolled Component form handling.
 * */

import React, { Component } from 'react';

class AddContact extends Component {

     static defaultProps = {
          name: 'Sahadat Hossain',
          email: 'sahadat@gmail.com',
          phone: '999-8887-5555'
     }

     constructor(props) {
          super(props);

          this.nameInput = React.createRef();
          this.emailInput = React.createRef();
          this.phoneInput = React.createRef();
     }


     formSubmit = e => {
          e.preventDefault();
          const contact = {
               name: this.nameInput.current.value,
               email: this.emailInput.current.value,
               phone: this.phoneInput.current.value,
          }
          console.log(contact);
     }

     render() {

          const { name, email, phone } = this.props;

          return (
               <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                         <form onSubmit={this.formSubmit}>
                              <div className="form-group">
                                   <label forhtml="name">Name</label>
                                   <input type="text"
                                        name="name"
                                        className="form-control"
                                        defaultValue={name}
                                        ref={this.nameInput}
                                   />
                              </div>
                              <div className="form-group">
                                   <label forhtml="email">Email</label>
                                   <input type="text"
                                        name="email"
                                        className="form-control"
                                        defaultValue={email}
                                        ref={this.emailInput}
                                   />
                              </div>
                              <div className="form-group">
                                   <label forhtml="phone">Phone</label>
                                   <input type="text"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Enter Phone..."
                                        defaultValue={phone}
                                        ref={this.phoneInput}
                                   />
                              </div>
                              <button type="submit" className="btn btn-danger btn-block">Submit</button>
                         </form>
                    </div>
               </div>
          );
     }

}

export default AddContact;