import exclusive_img from "../../Images/exclusive_image.png"

const Offers = () => {
  return (
    <div className="w-[75%] mt-24 h-[70vh] flex m-auto offers">
        <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-[#171717] text-5xl font-semibold">Exclusive</h1>
            <h1 className="text-[#171717] text-4xl font-semibold">Offers For You</h1>
           <p className="text-[#171717] text-lg mt-3 font-semibold"> ONLY ON BEST SELLERS PRODUCTS</p>
           <button className="w-[280px] h-[50px] rounded-[35px] bg-[#ff4141] border-none text-white text-base font-medium mt-7 cursor-pointer">Check Now</button>
        </div>
        <div className="flex flex-1 items-center justify-center pt-8">
            <img className="h-[350px]" src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers