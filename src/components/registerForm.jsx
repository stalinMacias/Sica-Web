import React from "react";
import { toast } from "react-toastify";
//Components Imports
import FormValidation from "./common/formValidation";
import Input from "./common/input";

//JS Services Imports
import validations from "../services/validations/validationsRegisterForm";

//CSS Module Imports
import styles from "../styles/form.module.css";

class Form extends FormValidation {
  state = {
    data: { email: "", password: "", confirmPassword: "" },
    errors: {}
  };

  doSubmit = () => {
    //Before submit the form, check if both passwords are equals
    const { password, confirmPassword } = this.state.data;
    const { errors } = this.state;

    const comparePasswords = validations.comparePasswords(
      password,
      confirmPassword
    );

    if (comparePasswords) {
      errors.confirmPassword = comparePasswords;
      toast.error("There is an error: Both passwords have to match");
    } else {
      toast.success("Calling the server...!");
    }
    //Update the errors object of the state...
    this.setState({ errors });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Type your Email"
          label="email"
          value={this.state.email}
          onChange={this.handleOnChange}
          error={this.state.errors.email}
        ></Input>

        <Input
          type="password"
          name="password"
          placeholder="Type your Password"
          label="password"
          value={this.state.password}
          onChange={this.handleOnChange}
          error={this.state.errors.password}
        ></Input>

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your Password"
          label="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleOnChange}
          error={this.state.errors.confirmPassword}
        ></Input>

        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default Form;
