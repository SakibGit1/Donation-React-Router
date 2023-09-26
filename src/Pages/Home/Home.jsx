import { useLoaderData } from "react-router-dom";
import AllCards from "../../component/allCards/AllCards";
import Banner from "../Banner/Banner";


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            
            <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-4  md:mx-20 mt-10">
            {
            data.map(item=><AllCards key={item.id} item={item}></AllCards>)
            }
            </div>
        </div>
    );
};

export default Home;