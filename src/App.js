import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          Task Manager
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
