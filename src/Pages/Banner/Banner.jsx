
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center items-center">
                        <input  type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs mr-2" />
                        <button className="btn btn-primary ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;