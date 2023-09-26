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
            Donation page
            {
                noFound?(<p className="text-2xl font-semibold flex justify-center items-center mt-20">{noFound}</p>) : (
                    <div>
                        {donateItem.length>0 && (
                            <div className='flex justify-center items-center mt-10'>
                           {
                            isShow? donateItem.map(item=>(
                                <ShowDonate key={item.id}></ShowDonate>
                            ) 

                                )
                                
                            
                            : 
                                donateItem.slice(0,4).map(item=>(<ShowDonate key={item.id}></ShowDonate>))
                           }

{
                            donateItem.length>4 && <button onClick={()=>setIsShow(!isShow)}

                            >  {isShow? "See less" : "See more"}
                            </button>
                        }
                        </div>

                         
                       
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default Donation;