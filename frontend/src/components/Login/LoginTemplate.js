import "../../style/login.css";

const LoginTemplate = ({ form, children }) => {
  return (
    <main className="login-template">
      <section className="form-wrapper">{form}</section>
      <section className="login-wrapper">{children}</section>
    </main>
  );
};

export default LoginTemplate;
