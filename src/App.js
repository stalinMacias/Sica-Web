import React, { Component } from 'react';
import {ToastContainer} from "react-toastify";
import RegisterForm from "./components/registerForm";


class App extends Component {
  state = {  }
  render() { 
    return ( 
      
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <RegisterForm></RegisterForm>
      </React.Fragment>
     );
  }
}
 
export default App;
