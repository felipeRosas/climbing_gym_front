import  React  from "react";
import clienteAxios from '../config/axios'
import {Link} from 'react-router-dom';

class Clases extends React.Component{
    constructor(props){
        super();
        this.state={
            usuarios:[]
        };
    }

    componentDidMount(){
        const consultarApi = () => {
            clienteAxios.get('http://localhost:3030/api/usuarios')
            .then(res => {
            this.setState({usuarios:res.data.data});
            console.log("test",this.state.usuarios);
            const us=this.state.usuarios;
            })
            .catch(error => {
              console.log(error);
            });
        };
    
        consultarApi();
      }

    render(){
        let item = this.state.usuarios.map( (us, i) => 
            <p key={i}>{us.nombre}</p>
         );
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 md-5 d-flex justify-content-center">
                        <Link to={'/incripcion'} className="btn btn-success py-2 px-5 font-weigth-bold">Inscribir alumno</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 py-5">
                        <h1>Clientes</h1>
                        {item}
                    </div>
                </div>
            </div>
        );
    }
}

export default Clases;