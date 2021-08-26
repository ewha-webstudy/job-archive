import "../../style/login.css";

const LoginTemplate = ({ form, children }) => {
  return (
    <div className="container">
      <div className="login-template">
        <section className="form-wrapper">{form}</section>
        <section className="login-wrapper">{children}</section>
      </div>
    </div>
  );
};

export default LoginTemplate;
