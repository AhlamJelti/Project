import React, { Component } from 'react'
import Recette from './Recette';
import './Recettes.css'
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from "react-router-dom";
import {BsPlusCircleFill} from 'react-icons/bs';
import {MdRestaurant} from 'react-icons/md';

import "./Recette.css"

const Recs = [
    {id:0,name:"PLAT : LASAGNES À LA BOLOGNAISE", Ingredients:"12 feuilles de pâte à lasagne sèche, 600 g de viande hachée de bœuf ,1 gousse d’ail épluchée, 1 oignon épluché, 1 peu de thym frais ,1 carotte épluchée,150 g de champignons de Paris équeutés et lavés, 25 cl de vin rouge,500 g à 600g de coulis de tomates ou concassée de tomates"},
    {id:1,name:"DESSERT : BISCUIT COULANT AU CHOCOLAT", Ingredients:"110 g de chocolat noir,110 g de beurre ,150 g de sucre, 60 g de farine,4 œufs entiers,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé "},
    {id:2,name:"ENTRÉE : CROQUE MONSIEUR CROUSTILLANT À LA POÊLE", Ingredients:"16 tranches de pain de mie frais,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé  ,100 g de crème fraîche, 1 œuf,muscade ou cumin en poudre, 100 g de beurre,100 g de jambon blanc en tranche fine ou jambon de dinde,1 botte de ciboulette"},
    {id:3,name:"PLAT : LASAGNES À LA BOLOGNAISE", Ingredients:"12 feuilles de pâte à lasagne sèche, 600 g de viande hachée de bœuf ,1 gousse d’ail épluchée, 1 oignon épluché, 1 peu de thym frais ,1 carotte épluchée,150 g de champignons de Paris équeutés et lavés, 25 cl de vin rouge,500 g à 600g de coulis de tomates ou concassée de tomates"},
    {id:4,name:"DESSERT : BISCUIT COULANT AU CHOCOLAT", Ingredients:"110 g de chocolat noir,110 g de beurre ,150 g de sucre, 60 g de farine,4 œufs entiers,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé "},
    {id:5,name:"ENTRÉE : CROQUE MONSIEUR CROUSTILLANT À LA POÊLE", Ingredients:"16 tranches de pain de mie frais,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé  ,100 g de crème fraîche, 1 œuf,muscade ou cumin en poudre, 100 g de beurre,100 g de jambon blanc en tranche fine ou jambon de dinde,1 botte de ciboulette"}
];
localStorage.setItem('recettes',JSON.stringify(Recs));
 class Recettes extends Component {
    constructor(props){
        super(props);
        
        this.state={
            Recettes:JSON.parse(localStorage.getItem('recettes')),
            
        }
        this.onEditSubmit = this.onEditSubmit.bind(this);
   };
   

   suppRecette = (id) => {
    const {Recettes}= this.state;
    delete Recettes[id];

     /*this.setState({ Recettes }) ;
     const filteredRecettes = Recettes.filter(R =>{
      return R.id!==id;
    });*/
    
    this.setState({Recettes});

     localStorage.setItem('recettes',JSON.stringify(this.state.Recettes));
     
   }
  

   onEditSubmit(name,Ingredients,id){
    
   let Rec = this.state.Recettes.map(R => {
      if(R.id === id){
        R.name = name;
        R.Ingredients = Ingredients;
      }
      return R;
    });
    
      this.setState({Recettes : Rec});

   
    }

    
onChangeInput=(e) =>{ 
   this.setState({[e.target.name]:e.target.value})
  
                  }
  
    render() {
        const value="";
        
        const handleClose = () => this.setState({show:false});
        return (
          <div className="All">
            <div className="Recettes">
                <h2> <MdRestaurant /> Recettes </h2>

            <div className="Rec">
               
               
                {this.state.Recettes.map((R)=>< Recette key={R.id} id={R.id} name={R.name} Ingredients={R.Ingredients}
                                               Supprimer={this.suppRecette.bind(this,R.id)}
                                                onEditSubmit={this.onEditSubmit}
                                                />)}
                
                
                <div className="card">
                    <Link  className="Link" to={`/Recette/add`}>
                    <BsPlusCircleFill className="plus" size="102px" color="#17a2b8" />
                    <h4>Ajouter une Recette </h4>
                  </Link>
                  
                </div> 
                </div>

               
             </div>
             </div>
        )

    }
}
            
export default Recettes;
