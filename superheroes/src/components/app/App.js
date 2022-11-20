import '../../style/App.css';
import Card from './Card/Card.jsx';
import superheroes from './superheroes.json';

function App() {
return ( 
    <div className = "App" >
        <h1 className = "title" > 10 крутейших супергероев </h1>  
        {
            superheroes.map((card) =>
                <Card name = {card.name} url = {card.pic} universe = {card.universe} alterEgo = {card.alterEgo} occupation = {card.occupation}friends = {card.friends} powers = {card.powers} details = {card.details}/>
            )
        } <button id = "prev" > Назад </button> 
        <button id = "next" > Вперед </button> 
    </div>
    );
}

export default App;