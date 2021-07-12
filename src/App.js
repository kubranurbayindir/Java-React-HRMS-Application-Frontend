import './App.css';
import Dashboard from './layouts/Dashboard.jsx'
import Homepage from "./layouts/Homepage";
import Navi from "./layouts/Navi.jsx";

import Footer from "./layouts/Footer.jsx";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Homepage />
        <Dashboard />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
