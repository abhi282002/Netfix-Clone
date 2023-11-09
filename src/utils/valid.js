export const Validate = (fullName, email, password) => {
  if (fullName.length === 0) return "Please Enter Your Name";
  let isEmailValid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  let isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Please Enter a Valid Email ID";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
