import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//componentes
import Clases from './components/Clases';
import Login from './components/Login';
import Contacto from './components/Contacto';
import Inscripcion from './components/Inscripcion';
import BarraNavegacion from './components/BarraNavegacion';
class App extends React.Component{
  constructor(props){
    super();
    
  }

    render(){
      return (
        <div className="container">
          <BarraNavegacion gymname="concep"></BarraNavegacion>
         <Router>
           <Switch>
             <Route exact path="/clases" component={ () => <Clases titulo="estas son las clases"/> } />
           </Switch>
           
           <Switch>
             <Route exact path="/login" component={Login} />
           </Switch>

           <Switch>
             <Route exact path="/contacto" component={Contacto} />
           </Switch>
           <Switch>
             <Route exact path="/inscripcion" component={Inscripcion} />
           </Switch>
         </Router>
         
        </div>
      );
    }

  
    
  

}

export default App;




