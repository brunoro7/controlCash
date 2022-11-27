import BoxFooter from '../../Components/general/BoxFooter/BoxFooter';
import BoxListTransfer from '../../Components/home/BoxListTransfer/BoxListTransfer';
import BoxMainHome from '../../Components/home/BoxMainHome/BoxMainHome';

import './style/Home.css';

function Home() {
  return (
    <div className="body-Home">

      <header className="box-bodyHeaderHome">
        <h1>Control Cash</h1>
      </header>

      <main className="box-mainHome">
        <BoxMainHome />
        <BoxListTransfer />
      </main>

      <footer className="box-bodyFooterHome">
        <BoxFooter />
      </footer>
    </div>
  );
}

export default Home;
