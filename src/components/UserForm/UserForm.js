import React from "react";
import Input from '../Input/Input';
import Button from '../Button/Button';
import users from '../../data/data.json';



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const ipRegex = RegExp(
  /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/
);


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      ip: null,
      email: null,
      formErrors: {
        userName: "",
        ip: "",
        email: ""
      }
    };
  }



  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };


 
    switch (name) {
      case "userName":
      
          value.length < 3 ? formErrors.userName = "minimum 3 characaters required" : formErrors.userName = "" ||

          value.length > 12 ? formErrors.userName = "max 15 znakow!!!" : formErrors.userName = "" ||
          //value === 'cat' ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
          //users.filter(user => user.nickname == value) ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
         // value === 'cat' ? "minimum 3 characaters required" : "";
        //users.filter(v => v.nickname === value)
          //jezeli user juz istnieje

          //users.filter(x => x.nickname.toLowerCase().includes(value.toLowerCase())) ?  formErrors.userName = "taki user juz jest" : formErrors.userName = "";

       // users.filter(x => x.nickname.toLowerCase().includes(value.toLowerCase())).length > 1 ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
  
users.filter(x => x.nickname.toLowerCase() === value.toLowerCase()).length > 0  ? formErrors.userName = "taki user juz jest" : formErrors.userName = "";
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
 
          users.filter(x => x.email.toLowerCase() === value.toLowerCase()).length > 0 ? formErrors.email = "mail zajety" : formErrors.email = "" ||
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
          <form onSubmit={this.props.submitFn} noValidate>
            <div className="userName">
              <label htmlFor="userName">User Name</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
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
              />
              {formErrors.ip.length > 0 && (
                <span className="errorMessage">{formErrors.ip}</span>
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
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit" disabled={ 
                this.state.formErrors.email.length > 0 || this.state.formErrors.userName.length > 0 || this.state.formErrors.ip.length > 0 ||
                !this.state.userName || !this.state.ip || !this.state.email} > Create Account </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;