import React, { Component } from 'react'
import Recette from './Recette';
import './Recettes.css'
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 class Recettes extends Component {
    constructor(props){
        super(props);
        
        this.state={
            Recettes:[
                {id:1,name:"PLAT : LASAGNES À LA BOLOGNAISE", Ingredients:"12 feuilles de pâte à lasagne sèche, 600 g de viande hachée de bœuf ,1 gousse d’ail épluchée, 1 oignon épluché, 1 peu de thym frais ,1 carotte épluchée,150 g de champignons de Paris équeutés et lavés, 25 cl de vin rouge,500 g à 600g de coulis de tomates ou concassée de tomates"},
                {id:2,name:"DESSERT : BISCUIT COULANT AU CHOCOLAT", Ingredients:"110 g de chocolat noir,110 g de beurre ,150 g de sucre, 60 g de farine,4 œufs entiers,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé "},
                {id:3,name:"ENTRÉE : CROQUE MONSIEUR CROUSTILLANT À LA POÊLE", Ingredients:"16 tranches de pain de mie frais,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé  ,100 g de crème fraîche, 1 œuf,muscade ou cumin en poudre, 100 g de beurre,100 g de jambon blanc en tranche fine ou jambon de dinde,1 botte de ciboulette"},
                {id:4,name:"PLAT : LASAGNES À LA BOLOGNAISE", Ingredients:"12 feuilles de pâte à lasagne sèche, 600 g de viande hachée de bœuf ,1 gousse d’ail épluchée, 1 oignon épluché, 1 peu de thym frais ,1 carotte épluchée,150 g de champignons de Paris équeutés et lavés, 25 cl de vin rouge,500 g à 600g de coulis de tomates ou concassée de tomates"},
                {id:5,name:"DESSERT : BISCUIT COULANT AU CHOCOLAT", Ingredients:"110 g de chocolat noir,110 g de beurre ,150 g de sucre, 60 g de farine,4 œufs entiers,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé "},
                {id:6,name:"ENTRÉE : CROQUE MONSIEUR CROUSTILLANT À LA POÊLE", Ingredients:"16 tranches de pain de mie frais,200 g d’emmental râpé ou parmesan râpé ou gruyère râpé  ,100 g de crème fraîche, 1 œuf,muscade ou cumin en poudre, 100 g de beurre,100 g de jambon blanc en tranche fine ou jambon de dinde,1 botte de ciboulette"}
            ],
            titre :"",
            ingredient:"",
           // show:false
           
        }
     
   };


  /* Modifier= (id) =>{
       const S=this.state.show;
       
       this.setState({S:true});
       console.log('modifier')

   }*/
   suppRecette = (id) => {
    const {Recettes}= this.state;
    delete Recettes[id-1];
     this.setState({ Recettes }) ;
   }
  
   ajoutRecette=(e)=>{
    e.preventDefault();
    const {Recettes}= this.state;
    const length = Recettes.length;
    Recettes[length]={id:length+1,name:this.state.titre,
                    Ingredients:this.state.ingredient};
     this.setState({ Recettes });
     
     
   }

onChangeInput=(e) =>{ 
   this.setState({[e.target.name]:e.target.value})
  
                  }
  
    render() {
        const value="";
        
        const handleClose = () => this.setState({show:false});
        return (
            <div className="Recettes">
                <h2>Vos Recettes</h2>
            <div className="Rec">
               
               
                {this.state.Recettes.map((R)=>< Recette key={R.id} id={R.id} name={R.name} Ingredients={R.Ingredients}
                                               Supprimer={this.suppRecette.bind(this,R.id)}
                                            /*Modifier={this.suppRecette.bind(this,R.id) }*/
                                                />)}
                
                <form onSubmit={this.ajoutRecette}>
                    <div className="card">
                        <div className="card-title"><h3>Ajouter une Recette</h3></div>
                        <div className="card-text">
                            <div className="form-group">
                             <label htmlFor="titre" > titre:<br/> </label>
                             <input type="text" name="titre"   required="required"
                            defaultValue={value} className='form-control'
                             onChange={this.onChangeInput}
                             />
                            </div>   
                       
                        
                            <div className="form-group">
                            <label  htmlFor="ingredient">
                            Les Ingredients </label>
                            <textarea className='form-control' name="ingredient"
                            defaultValue={value} required="required"
                             onChange={this.onChangeInput}
                            />
                            </div>
                        </div>
                        <div className="card-footer">
                             <button type="submit">Ajouter</button>
                         
                        </div>
                    </div>  
                </form>
           
                </div> 

               { /*<Modal show={this.state.show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                     </Modal.Header>
                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                     Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                     Save Changes
                      </Button>
                      </Modal.Footer>
        </Modal>  */ }
             
             </div>
        )

    }
}
            
export default Recettes;
