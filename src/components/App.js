import FormContact from './FormContact'
import '../styles/App.css';
const title = 'KRYPTONITE'

function App() {
  return (
    <>
    <div className="App">
     <h2 style = {{textAlign : 'center', color : 'white'}}>{title}</h2>
     
     <FormContact/>
    </div>
    </>
  );
}

export default App;
