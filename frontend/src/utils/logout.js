const logout = (navigate) => {

  // Remove login data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Redirect visitor home
  navigate("/");

};

export default logout;