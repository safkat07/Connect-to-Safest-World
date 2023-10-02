import { useContext } from "react";
import CardsData from "../../Components/DisplayCardsData/CardsData";
import Banner from "../Banner/Banner";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="">
            <Banner></Banner>
            {
                user && <CardsData></CardsData>
            }
            
        </div>
    );
};

export default Home;