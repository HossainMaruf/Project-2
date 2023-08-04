class Validation {
  static ValidEmail(email) {
    const isValid = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return isValid;
  }
  static ValidateRegistration(data) {
    const errors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
    // username validation 
    const name_len = data.username.trim().length;
    if(name_len < 3 || name_len > 15) {
      errors.username = "Username must be 3 to 15 characters";  
    }
    // email validation
    if(!this.ValidEmail(data.email)) {
      errors.email = "Email is not valid";
    }
    // password validation
    const pass_len = data.password.trim().length;
    if(pass_len < 3 || pass_len > 15) {
      errors.password = "Password must be 3 to 15 characters";
    }
    // confirmPassword Validation
    if(data.password != data.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }
    return errors;
  } 

  // Error Count Function
  static ErrorCount(error) {
    let count = 0;
    for(let property in error) {
      if(error[property].length != 0) count++;
    }
    return count;
  }
}

module.exports = Validation;