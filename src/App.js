import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarUser from './components/NavbarUser';

function App() {
  return (
    <div className="App">

      <NavbarUser />
      <div className='container text-center'>

      
        <Products />
      </div>
    </div>
  );
}

export default App;
