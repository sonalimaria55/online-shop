// const roleRedirect = (role, navigate) => {
//   switch (role) {
//     case "super_admin":
//       navigate("/super-admin");
//       break;

//     case "management_support":
//       navigate("/management");
//       break;

//     case "customer":
//       navigate("/boutique");
//       break;

//     default:
//       navigate("/");
//   }
// };

// export default roleRedirect;


const roleRedirect = (role, navigate) => {
  console.log("Redirecting role:", role);

  switch (role) {
    case "super_admin":
      console.log("Going to /super-admin");
      navigate("/super-admin");
      break;

    case "management_support":
      console.log("Going to /management");
      navigate("/management");
      break;

    case "customer":
      console.log("Going to /boutique");
      navigate("/boutique");
      break;

    default:
      console.log("Going to /");
      navigate("/");
  }
};

export default roleRedirect;
