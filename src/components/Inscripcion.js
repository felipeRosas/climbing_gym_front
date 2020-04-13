import  React  from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './styles/Inscripciones.css';
import ClienteAxis from '../config/axios';
class Inscripcion extends React.Component{
    constructor(props){
        super();
        this.state={
            datosInscripcion
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        var datosInscripcion = {
            nombre : '',
            apellidoP: '',
            apellidoM: '',
            rut : '',
            email :'',
            telefono :'',
            password:'',
            fechaN : null
        };
      }
    
      handleChange(event,inputname) {
        this.setState({datosInscripcion: event.target.value});
        console.log(this.state.datosInscripcion, inputname);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        ClienteAxis.post('http://localhost:3030/api/usuarios/inscripciones', this.state.value)
        .then(res => {
            console.log(res);
        })
        .catch();
      }

    render(){
        return(
            <div className="container py-5">
               
                <div className="row justify-content-center">
                    <div className="col-md-6 py-5 formContainer">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Nombre</Label>
                                <Input type="text" name="nombre" id="nombre" placeholder="Nombre" value={this.state.datosInscripcion} onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>apellido Paterno</Label>
                                <Input type="text" name="apellidoPaterno" id="apellidoPaterno" placeholder="apellido Paterno"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>apellido Materno</Label>
                                <Input type="text" name="apellidoMaterno" id="apellidoMaterno" placeholder="apellido Materno"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Rut</Label>
                                <Input type="text" name="rut" id="rut" placeholder="ej: 19321987-1"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono</Label>
                                <Input type="text" name="telefono" id="telefono" placeholder="ej: 934048278"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>email</Label>
                                <Input type="email" name="email" id="email" ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Fecha de Nacimiento</Label>
                                <Input type="date" name="fechaN" id="fechaN" ></Input>
                            </FormGroup>
                            <FormGroup>
                               
                                <Input type="submit" value="Submit" > Registrar</Input>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inscripcion;


