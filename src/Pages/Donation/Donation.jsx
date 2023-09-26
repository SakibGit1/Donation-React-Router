import { useEffect, useState } from "react";
import ShowDonate from "../../component/ShowDonate/ShowDonate";


const Donation = () => {
    const [donateItem, setDonateItem]= useState([]);
    const [noFound, setNOFound]= useState(false);
    const [isShow, setIsShow]= useState(false);
    // console.log(donateItem);

    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem('donate'));

        if(donateItems){
            setDonateItem(donateItems);

        }
        else{
            setNOFound('No Data Found')
        }
    },[])


    return (
        <div>
            
            {
                noFound?(<p className="text-2xl font-semibold flex justify-center items-center mt-20">{noFound}</p>) : (
                    <div >
                        {donateItem.length>0 && (
                            <div className='flex gap-5 justify-center items-center mt-10'>
                           {
                            isShow? donateItem.map(item=>(
                                <ShowDonate key={item.id} item={item}></ShowDonate>
                            ) 

                                )
                                
                            
                            : 
                                donateItem.slice(0,2).map(item=>(<ShowDonate item={item} key={item.id}></ShowDonate>))
                           }
                            <div>
                            {
                            donateItem.length>2 && <button onClick={()=>setIsShow(!isShow)}
                                className="p-2 bg-green-400 rounded text-xl"
                            >  {isShow? "See less" : "See more"}
                            </button>
                        }
                            </div>

                        </div>
                        

                         
                       
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default Donation;