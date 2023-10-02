import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import {Helmet} from "react-helmet";


const CardDetails = () => {
    const cards = useLoaderData()
    const {id} = useParams()
    const card = cards.find( card => card.id == id)

    const { title, description, price, text_button_bg_color, picture } = card;

    const buttonColor = {
        backgroundColor: text_button_bg_color,
    }

   

    const handleDonateButton = () => {
        const donateArray = []
        const donateItems =  JSON.parse(localStorage.getItem('donateCards'))
        

        if(!donateItems){
            donateArray.push(card)
            localStorage.setItem('donateCards', JSON.stringify(donateArray))
            
            swal("Thank You", "DONATION DONE!", "success");
        }
        else{
            const isExist = donateItems.find(card  => card.id == id)
            console.log(isExist);
            if(!isExist){
                donateArray.push(...donateItems, card)
                localStorage.setItem('donateCards', JSON.stringify(donateArray))
                swal("Thank You", "DONATION DONE!", "success");
               
            }

            else{
                swal("TRY AGAIN", "Already Donated!", "error");
            }

           
        }
       
      

    }


    return (
        <div className="my-10">
        <Helmet>
            <title>Donation Detials: {id} </title>
        </Helmet>
        <div>
            <div className="">
                <img className="mx-auto relative min-h-min min-w-full" src={picture} alt="" />
            </div>
            <div className="absolute">
                <div className="relative -mt-20 ml-5 md:ml-10 md:-mt-32">
                    <button onClick={handleDonateButton} className="btn text-white text-xl md:text-3xl font-semibold p-4 rounded-xl" style={buttonColor}>Donate${price}</button>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-left text-5xl font-bold">{title}</h2>
                <p className="mt-5 text-xl text-left">{description}</p>
            </div>
        </div>
        
       
    </div>
    );
};

export default CardDetails;