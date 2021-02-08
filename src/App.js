import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Main from './Main'
import Panorama from './Panorama'

function App() {



  return (

    <>

    <Router basename="/mypanorama">

      <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/panorama" component={Panorama}/>
      </Switch>

    </Router>




    </>


  );
}

export default App;
