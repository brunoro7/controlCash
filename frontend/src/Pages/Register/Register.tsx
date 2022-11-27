import BoxFooter from '../../Components/general/BoxFooter/BoxFooter';
import BoxMainRegister from '../../Components/register/BoxMainRegister/BoxMainRegister';
import './style/Register.css';

function Register() {
  return (
    <div className="body-Register">

      <header className="box-bodyHeaderRegister">
        <h1>Control Cash</h1>
      </header>

      <main className="box-mainRegister">
        <section>
          <BoxMainRegister />
        </section>
      </main>

      <footer className="box-bodyFooterRegister">
        <BoxFooter />
      </footer>
    </div>
  );
}

export default Register;
