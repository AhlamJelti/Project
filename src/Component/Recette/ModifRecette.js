
import React, { Component } from 'react';

class ModifRecette extends Component {
    state = {
        title: '',
        ingredients: ''
        
    }
    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    submit = (id, e) => {
        e.preventDefault();
        const { title, ingredients} = this.state
        
        const recipe = {id: id, name:title, ingredients: ingredients}
        localStorage.setItem("Data",JSON.stringify(recipe))

        this.props.history.push('/');

    }
    render() {
        const {  title, ingredients} = this.state;
           const id = this.props.match.params.id;
           const value=""
            return (
                
                 <form onSubmit={this.submit.bind(this,id)} style={{margin: "0 210px 0 210px"}}>
                    <div className="card" style={{width: "100%"}}>
                 <div className="card-body">
                  <h4 className="card-title">Edite Recipe</h4>
                  <div className="card-text">
                   <div className="form-group">
                  <label htmlFor="">title recipe</label>
                  <input type="text" className='form-control'
                      name='title'
                      defaultValue={value}
                      onChange={this.changeInput}
                  />
                     </div>
                    <div className="form-group">
                     <label htmlFor="">ingredients</label>
                                            <textarea className='form-control'
                                            name='ingredients' 
                                            defaultValue={value}
                                            onChange={this.changeInput}
                                            cols="30" rows="10"
                                            ></textarea>
                                        </div>
                                        <button className="btn btn-danger btn-block">Edit recipe</button>
                                    </div>
                                </div>
                                  
                            </div>
                           </form> 
                    )
                
         
                }
            
       

        
    
}

export default ModifRecette ;