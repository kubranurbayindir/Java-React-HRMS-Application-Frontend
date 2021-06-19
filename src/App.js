import './App.css';
import Homepage from './layouts/Homepage.jsx'
import Navi from "./layouts/Navi.jsx";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Homepage />
      </Container>

    </div>
  );
}

export default App;
