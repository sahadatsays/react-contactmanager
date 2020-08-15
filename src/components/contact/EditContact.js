import React, { Component } from 'react';
import { Consumer } from "../../context";
import InputGroup from '../layouts/InputGroup';
import axios from 'axios';

class EditContact extends Component {



     state = {
          name: '',
          email: '',
          phone: '',
          errors: {}
     }
     async componentDidMount() {
          let { id } = this.props.match.params;
          const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          const contact = res.data;
          this.setState({
               name: contact.name,
               email: contact.email,
               phone: contact.phone
          })
     }

     // onNameChange = e => this.setState({ name: e.target.value });
     // onEmailChange = e => this.setState({ email: e.target.value });
     // onPhoneChange = e => this.setState({ phone: e.target.value });

     onInputChange = e => this.setState({ [e.target.name]: e.target.value });

     formSubmit = async (dispatch, e) => {
          e.preventDefault();

          const { name, email, phone } = this.state;

          // Input Error Check
          if (name === '') {
               this.setState({ errors: { name: 'The Name Field is required' } });
               return;
          }
          if (email === '') {
               this.setState({ errors: { email: 'The Email Field is required' } });
               return;
          }
          if (phone === '') {
               this.setState({ errors: { phone: 'The Phone Field is required' } });
               return;
          }

          const upData = {
               name,
               email,
               phone
          }

          const { id } = this.props.match.params;

          const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, upData);

          dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

          // Clear Input Field
          this.setState({
               name: '',
               email: '',
               phone: '',
               errors: {}
          });

          // Redirect 
          this.props.history.push("/");
     }



     render() {
          const { name, email, phone, errors } = this.state;

          return (
               <Consumer>
                    {value => {
                         const { dispatch } = value;
                         return (
                              <div className="card mb-3">
                                   <div className="card-header">Edit <span className="text-danger">Contact</span></div>
                                   <div className="card-body">
                                        <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                                             <InputGroup
                                                  label="Name"
                                                  name="name"
                                                  placeholder="Enter Name..."
                                                  onChange={this.onInputChange}
                                                  value={name}
                                                  error={errors.name}
                                             />
                                             <InputGroup
                                                  label="Email"
                                                  name="email"
                                                  placeholder="example@company.com"
                                                  onChange={this.onInputChange}
                                                  value={email}
                                                  error={errors.email}
                                             />
                                             <InputGroup
                                                  label="Phone"
                                                  name="phone"
                                                  placeholder="000-0000-00000"
                                                  onChange={this.onInputChange}
                                                  value={phone}
                                                  error={errors.phone}
                                             />

                                             <button type="submit" className="btn btn-danger btn-block">Update</button>
                                        </form>
                                   </div>
                              </div>
                         )
                    }}
               </Consumer>
          )
     }

}

export default EditContact;