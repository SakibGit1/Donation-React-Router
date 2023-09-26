import { NavLink } from "react-router-dom";


const AllCards = ({ item }) => {
    // console.log(item);
    const { id, title, price, picture, category_bg_color, card_bg_color, category, text_button_bg_color,description } = item;
    return (
        <div>

           <NavLink to={`/details/${id}`}>
           <div style={{backgroundColor:card_bg_color}} className="card card-compact   shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className=" font-bold p-2 rounded" style={{backgroundColor: category_bg_color}}> <span style={{color:text_button_bg_color}}>{category}</span> </p>
                    <h2 style={{color:text_button_bg_color}} className="card-title">{title}</h2>
                    <p >{description}</p>
                    
                </div>
            </div>
           </NavLink>

        </div>
    );
};

export default AllCards;