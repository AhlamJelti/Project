import React, { Component } from 'react';

import propTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';

import "./Recette.css"
import AddRecette from './AddRecette';



 class Recette extends Component {
 

    constructor(props){
        super(props);
        this.state = {
          isEdit:false,
          cardVisible: false,
        };
       this.onEdit = this.onEdit.bind(this);
       this.onEditSubmit = this.onEditSubmit.bind(this);
      }

      onEdit(){
        this.setState({isEdit:true});
      }
      
      onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.nameInput.value,this.IngredientsInput.value,this.props.id);
        this.setState({isEdit:false});
      }


    SuppRecette =() => {
        this.props.Supprimer();
    }
    
    /*ModifRecette =() => {
        this.props.Modifier();
    }*/

    Details=() => {
      this.setState({cardVisible : !this.state.cardVisible});
  }

   
    render() { 
        const { id, name, Ingredients } = this.props;
        return (
            <div>
            {
              this.state.isEdit
              ? (
                <div className="card">
                  <h1>Modifier La recette</h1> 
               <form onSubmit = {this.onEditSubmit}>
               
               <div className="form-group">
                      <label htmlFor="titre" > titre:<br/> </label>
                      <input  name="titre" type="text" placeholder="name" ref={nameInput=>this.nameInput = nameInput} defaultValue={name}/><br/><br/>
               </div>
               <div className="form-group">
                    <label  htmlFor="ingredient"> Les Ingredients : <br/>  </label>
                    <textarea rows="8" cols="55" name="ingredient" placeholder="ingredients" ref={IngredientsInput=>this.IngredientsInput = IngredientsInput} defaultValue={Ingredients}/><br/><br/>
               </div>
               
               <button  type="submit" class="btn btn-info" >Enregistrer</button>
               <hr/>
             </form>
              </div>
                )
              : (
        <div className="card">
             <div className="card-header" > 
             <h3>{this.props.name}</h3>
              <button type="button" class="btn btn-outline-secondary" onClick = { this.Details }>details { this.state.cardVisible ? <AiFillCaretUp /> : <AiFillCaretDown/> }</button>
             </div>
             {
             this.state.cardVisible
            ?

             <div className="card-body ">
                <h3>Les Ingredients</h3>
                 <p>{this.props.Ingredients}</p>
                 
             </div>
             : null
    } 
 
             <div className="card-footer" >  
                 <button  type="button" class="btn btn-info" onClick = { this.onEdit } >Modifier</button>                          
                 
                <button   type="button" class="btn btn-info" onClick = { this.SuppRecette }>Supprimer</button>
              </div> 
             
            
        </div>
        )}

        </div>
        
        
        )
    }
}
Recette.propTypes = {
    Supprimer : propTypes.func.isRequired ,
   onEditSubmit : propTypes.func.isRequired ,

    
}


export default Recette;
