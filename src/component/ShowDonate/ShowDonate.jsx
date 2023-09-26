

const ShowDonate = ({item}) => {
    const { id, title, price, picture } = item;

    return (
        <div>
            {/* <h1>donate items here</h1> */}
            <div className='shadow-xl border  '>
                <div>
                <img src={picture} alt="" />
                <p className='text-2xl font-bold'>{title}</p>
                
               
               <button className="btn bg-green-400 p-4">
                    Donate ${price}
                </button>
               
                </div>
            </div>

        </div>
    );
};

export default ShowDonate;