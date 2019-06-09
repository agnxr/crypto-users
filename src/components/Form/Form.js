import React from "react";
import styles from './Form.module.scss';

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
  
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    const allUsers = this.props.items;

    switch (name) {
      case "userName":
        value.length < 3 ? formErrors.userName = "Minimum 3 characaters required." : formErrors.userName = "" ||
        value.length > 10 ? formErrors.userName = "Nickname can contain up to 10 characters." : formErrors.userName = "" ||
        value.indexOf(' ') !== -1 ? formErrors.userName = "The given name contains space." : formErrors.userName = "" ||
        allUsers.filter(x => x.nickname.toLowerCase() === value.toLowerCase()).length > 0  ? formErrors.userName = "This nickname is already on the list." : formErrors.userName = "";
        break;

      case "ip":
        formErrors.ip = ipRegex.test(value) ? "" : "Wrong IP adress format.";
        break;

      case "email":
        allUsers.filter(x => x.email.toLowerCase() === value.toLowerCase()).length > 0 ? formErrors.email = "This e-mail is already on the list." : formErrors.email = "" ||
        emailRegex.test(value) ? formErrors.email = "" : formErrors.email = "Invalid email address.";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <div>
          <form 
            className={styles.form} 
            onSubmit={this.props.submitFn} 
            noValidate
          >
            <div className={styles.formItem}>
              <label htmlFor="userName" className={styles.label}>Nickname</label>
              <div className={styles.inputField}>
                <input
                  className={styles.input}
                  placeholder="Enter user name"
                  type="text"
                  name="userName"
                  noValidate
                  onChange={this.handleChange}
                />
                <div className={formErrors.userName.length > 0 ? styles.tooltip : null}>
                    <span className={this.props.msgNick !== '' ? styles.emptyFieldMsg : null}>{this.props.msgNick}</span>
                    {formErrors.userName.length > 0 && (
                      <span className={styles.tooltiptext}>{formErrors.userName}</span>
                    )}
                </div>
              </div>
              <div className={formErrors.userName.length > 0 ? styles.error : styles.formItemBar} />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <div className={styles.inputField}>
                <input
                  className={styles.input}
                  placeholder="Enter e-mail adress"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                <div className={formErrors.email.length > 0 ? styles.tooltip : null}>
                    <span className={this.props.msgMail !== '' ? styles.emptyFieldMsg : null}>{this.props.msgMail}</span>
                    {formErrors.email.length > 0 && (
                      <span className={styles.tooltiptext}>{formErrors.email}</span>
                    )}
                </div>
              </div>
              <div className={formErrors.userName.length > 0 ? styles.error : styles.formItemBar} />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="ip" className={styles.label}>IP address</label>
              <div className={styles.inputField}>
                <input
                  className={styles.input}
                  placeholder="Enter IP address"
                  type="text"
                  name="ip"
                  noValidate
                  onChange={this.handleChange}
                />
                <div className={formErrors.ip.length > 0 ? styles.tooltip : null}>
                    <span className={this.props.msgIP !== '' ? styles.emptyFieldMsg : null}>{this.props.msgIP}</span>
                    {formErrors.ip.length > 0 && (
                      <span className={styles.tooltiptext}>{formErrors.ip}</span>
                    )}
                </div>
              </div>
              <div className={formErrors.userName.length > 0 ? styles.error : styles.formItemBar} />
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={ 
                this.state.formErrors.email.length > 0 || 
                this.state.formErrors.userName.length > 0 || 
                this.state.formErrors.ip.length > 0 ||
                !this.state.userName || 
                !this.state.ip || 
                !this.state.email
              } 
            >
              Add user
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;