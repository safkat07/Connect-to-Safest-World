import { useState } from "react";
import ShowCard from "../ShowCard/ShowCard";


const CardsData = () => {

    const[cards, setCards] = useState([])

    fetch('new.json')
    .then(res => res.json())
    .then(data => setCards(data))
    console.log(cards);

    return (
        <div>
            <h2 className="text-6xl my-10 text-center font-bold text-rose-700">I Do Business Here</h2>
        <div className="grid  grid-cols-1 md:grid-cols-4 justify-center items-center mx-auto max-w[1400px] gap-5 my-12">
            {
                // eslint-disable-next-line react/jsx-key
                cards.map(card => <ShowCard card={card}></ShowCard>)
            }
            </div>
        </div>
    );
};

export default CardsData;