

const NewsLetter = () => {
  return (
    <div className="newsLatter w-[80%] mt-24 h-[70vh] flex m-auto ">
         <h1 className="text-[#454545] text-4xl font-semibold">Get Exclusive Offeers On Your Email</h1>
         <p className="text-[#454545] text-lg ">Subscribe to our newletter and stay updated</p>
         <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-2 border-[#959292]">
            <input className="w-[500px]  ml-7 border-none text-[#616161] text-base" type="email" placeholder="Your email id" />
            <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-base cursor-pointer">Subscribe</button>
         </div>
    </div>
  )
}

export default NewsLetter