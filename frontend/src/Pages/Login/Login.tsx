import BoxFooter from '../../Components/general/BoxFooter/BoxFooter';
import BoxMainLogin from '../../Components/login/BoxMainLogin/BoxMainLogin';
import './style/Login.css';

function Login() {
  return (
    <div className="body-Login">

      <header className="box-bodyHeaderLogin">
          <h1>Control Cash</h1>
      </header>

      <main className="box-mainLogin">
        <section>
          <BoxMainLogin />
        </section>
      </main>

      <footer className="box-bodyFooterLogin">
        <BoxFooter />
      </footer>
    </div>
  );
}

export default Login;
