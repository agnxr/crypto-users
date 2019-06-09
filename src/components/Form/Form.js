<<<<<<< HEAD
import React from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const ipRegex = RegExp(
  /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/
);


class Form extends React.Component {

   state = {
      userName: null,
      ip: null,
      email: null,
      formErrors: {
        userName: "",
        ip: "",
        email: ""
      }
    }
  



  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };


    const usersy = this.props.items;

 
    switch (name) {
      case "userName":
      
          value.length < 3 ? formErrors.userName = "minimum 3 characaters required" : formErrors.userName = "" ||

          value.length > 12 ? formErrors.userName = "max 15 znakow!!!" : formErrors.userName = "" ||
          //value === 'cat' ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
          //users.filter(user => user.nickname == value) ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
         // value === 'cat' ? "minimum 3 characaters required" : "";
        //users.filter(v => v.nickname === value)
          //jezeli user juz istnieje

          value.indexOf(' ') !== -1 ? formErrors.userName = "The given name contains space" : formErrors.userName = "" ||

          //users.filter(x => x.nickname.toLowerCase().includes(value.toLowerCase())) ?  formErrors.userName = "taki user juz jest" : formErrors.userName = "";

       // users.filter(x => x.nickname.toLowerCase().includes(value.toLowerCase())).length > 1 ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
  
usersy.filter(x => x.nickname.toLowerCase() === value.toLowerCase()).length > 0  ? formErrors.userName = "This nickname is already on the list." : formErrors.userName = "";
       //console.log(users.filter(x => x.nickname.toLowerCase().includes(value.toLowerCase())));
        break;
      case "ip":
        /*
        formErrors.ip =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break; */

        formErrors.ip = ipRegex.test(value)
        ? ""
        : "invalid IP adress";
        break;

      case "email":
 
          usersy.filter(x => x.email.toLowerCase() === value.toLowerCase()).length > 0 ? formErrors.email = "This e-mail is already on the list." : formErrors.email = "" ||
          emailRegex.test(value) ? formErrors.email = "" : formErrors.email = "invalid email address";
          //value == "cat@gmail.com" ? formErrors.email = "mail zajety" : formErrors.email = "";
         // users.filter(x => x.email.toLowerCase() === value.toLowerCase()).length > 0  ? formErrors.email = "" : formErrors.email = "uztkownik o takim mailu juz jest";

        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.props.submitFn} 
          

          
          noValidate>
            <div className="userName">
              <label htmlFor="userName">User Name</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />{this.props.msgNick}
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />{this.props.msgMail}
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="ip">
              <label htmlFor="ip">IP adress</label>
              <input
                className={formErrors.ip.length > 0 ? "error" : null}
                placeholder="IP adress"
                type="text"
                name="ip"
                noValidate
                onChange={this.handleChange}
              />{this.props.msgIP}
              {formErrors.ip.length > 0 && (
                <span className="errorMessage">{formErrors.ip}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit"
              
              
              disabled={ 
                this.state.formErrors.email.length > 0 || this.state.formErrors.userName.length > 0 || this.state.formErrors.ip.length > 0 ||
                !this.state.userName || !this.state.ip || !this.state.email} > Create Account </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

=======
import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends React.Component {

    state = {

    }
    
    render(){
        return (
            <form onSubmit={this.props.submitFn} autoComplete="off">
            <Input 
            name="nickname"
            label="Nickname"
            maxLenghth={20}
            />

            <Input 
            name="email"
            label="Email"
            maxLenghth={15}
            />

            <Input 
            name="ip"
            label="Ip address"
            maxLenghth={30}
            />
            <Button>add new item</Button>
        </form>
        );
    }
} 

>>>>>>> ca28ef96dcebe46c821d45f94c32e43c1808984a
export default Form;