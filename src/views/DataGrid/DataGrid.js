import React, {
  Component
} from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from 'reactstrap';
import Example from './TableImple';

class DataGrid extends Component {

   state = {
      hasErrors: false,
      moves: {}
   };

  componentDidMount(){
     fetch("https://pokeapi.co/api/v2/type/3/")
      .then(res => res.json())
      .then(res => this.setState({
        moves: res.moves
       }))
      .catch(() => this.setState({
      hasErrors: true
      }));


  }  


  render() {
  
    return ( <div className = "animated fadeIn" >
       <h1> Prueba de react</h1>
        <div className="row">     
        <div className="col-md-12 col-xs-12">
               < Example rows = {
                 this.state.moves
               }
        />          
        </div>
       </div>
      </div>

    );
  }
}

export default DataGrid;
