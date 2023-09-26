import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "../../component/detailsShow/ShowDetails";


const Details = () => {
    const [card, setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData();
    const idParse = parseInt(id);
    // console.log(id);
    // console.log(card);
    useEffect(()=>{
        const find = cards.find(card =>card.id===idParse);
        setCard(find);
    },[idParse, cards])

    return (
        <div>
            
            <div>

               <ShowDetails card={card}></ShowDetails>
            </div>
        </div>
    );
};

export default Details;