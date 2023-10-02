import { Link } from "react-router-dom";

const ShowCard = ({ card }) => {
  const {
    title,
    id,
    card_bg_color,
    text_color,
    picture,
    category_bg_color,
    category,
  } = card;
  const categoryStyle = {
    
    backgroundColor: category_bg_color,
    
    
  };
  return (
    <div className="flex justify-center">
      <Link to={`/card/${id}`}>
      
      <div className="card w-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={picture}
            alt="cards"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="card-actions justify-center">
            <button 
            
            style={categoryStyle}

            className="btn  btn-ghost">{category}</button>
          </div>
        </div>
      </div>
      

      </Link>
    </div>
  );
};

export default ShowCard;
