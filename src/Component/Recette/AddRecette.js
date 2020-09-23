import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import "./AddRecette.css"


class AddRecette extends Component {
constructor(props){
  super(props);
this.state={
    Recettes:JSON.parse(localStorage.getItem('recettes')),
}
  this.onSubmit = this.onSubmit.bind(this);
  
};



onSubmit(event){
  event.preventDefault();
  this.onAdd(this.nameInput.value,this.IngredientInput.value);
  this.nameInput.value = '';
  this.IngredientInput.value = '';
  this.props.history.push('/')

}
 
onAdd(name,ingredients){
    const Recs = this.state.Recettes;
    const length = Recs.length;
    Recs[length]={id:length,name:name,
                    Ingredients:ingredients};
   
      this.setState({ Recettes : Recs });
      localStorage.setItem('recettes',JSON.stringify(this.state.Recettes));
}


  render() {
    
    return (
      <div className="add">
             <form onSubmit = {this.onSubmit}>
               
                 
                        <h3>Ajouter une Recette</h3>
                        
                            <div className="form-group">
                                <label htmlFor="titre" > titre:<br/> </label>
                                <input size="lg"  type="text" required="required" className='form-control'
                                 placeholder="name" ref={nameInput=>this.nameInput = nameInput}/><br/><br/>
                            </div>  
                            <div className="form-group">
                                <label  htmlFor="ingredient"> Les Ingredients </label>
                                <textarea  rows="5" cols="33" className='form-control' name="ingredient"  required="required" placeholder="ingredients" ref={IngredientInput=>this.IngredientInput = IngredientInput }/><br/><br/>
                            </div>  
                        
               <button  type="submit" class="btn btn-info" >Ajouter</button>
               <hr/>
               
               
             </form>
       </div>
       
    );
  }
}

export default AddRecette;
