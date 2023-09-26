
import swal from "sweetalert";


const ShowDetails = ({card}) => {
    // console.log(card);
    const { id, title, price, picture, category_bg_color, card_bg_color, category, text_button_bg_color,description } = card;

    const handleDonate= ()=>{
        // alert('you have donate')
        const addLocalStoreArray = [];
        const getDonatItem = JSON.parse(localStorage.getItem('donate'));

        if(!getDonatItem){
            addLocalStoreArray.push(card);
            localStorage.setItem('donate', JSON.stringify(addLocalStoreArray));
            swal({  
                title: "You have donate Successfully!",  
                text: "",  
                icon: "success",  
                button: "ok",  
              }); 
        }
        else{
            const isExists = getDonatItem.find((card)=>card.id===id);
             if(!isExists){
                addLocalStoreArray.push(...getDonatItem, card);
                localStorage.setItem('donate', JSON.stringify(addLocalStoreArray));
                swal({  
                    title: "You have donate Successfully!",  
                    text: "",  
                    icon: "success",  
                    button: "ok",  
                  }); 

             } else{
                swal({  
                    title: "You have already donated !",  
                    text: "",  
                    icon: "error",  
                    button: "ok",  
                  }); 
             }
        }


        
    }
    return (
        <div>
            <div className='flex justify-center items-center mt-10'>
                <div>
                <img src={picture} alt="" />
                <p className='text-2xl font-bold'>{title}</p>
                <p>{description}</p>
               
               <button onClick={handleDonate} className="btn bg-green-400 p-4">
                    Donate ${price}
                </button>
               
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;