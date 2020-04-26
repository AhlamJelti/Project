import React, { Component } from 'react';

import propTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';



import "./Recette.css"



 class Recette extends Component {
 

    SuppRecette =() => {
        this.props.Supprimer();
    }
    /*ModifRecette =() => {
        this.props.Modifier();
    }*/

   
    render() { 
      
        return (
         
        <div className="card">
             <div className="card-header" > 
             <h3>{this.props.name}</h3>
            
             </div>
             
             
             <div className="card-body "  >
                <h3>Les Ingredients</h3>
                 <p>{this.props.Ingredients}</p>
                 
             </div>
            
             
             
             <div className="card-footer" >  
                 <button onClick = { this.ModifRecette } >Modifier</button>                          
                 
                <button  onClick = { this.SuppRecette }>Supprimer</button>
                </div>  
            
        </div>
        
        
        )
    }
}
Recette.propTypes = {
    Supprimer : propTypes.func.isRequired ,
   // Modifier : propTypes.func.isRequired ,

    
}


export default Recette;
