import footer_logo from "../../Images/logo (2).png"
import instagram_icon from "../../Images/instagram_icon.png"
import pintexter_icon from "../../Images/pintester_icon.png"
import whatsApp_icon from "../../Images/whatsapp_icon.png"


const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
       <div className="flex items-center justify-center gap-5">
        <img className="h-28" src={footer_logo} alt="" />
        <p className="text-[#383838] mt-5 text-4xl font-bold">SHOPPER</p>
       </div>
       <ul className="flex list-none gap-12 text-[#252525] text-lg">
         <li className="cursor-pointer">Company</li>
         <li className="cursor-pointer">Product</li>
         <li className="cursor-pointer"> Office</li>
         <li className="cursor-pointer">About</li>
         <li className="cursor-pointer">Contact</li>
       </ul>
       <div className="flex gap-12">
        <div className="p-3 pb-[6px] bg-[#fbfbfb] footer-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-3 pb-[6px] bg-[#fbfbfb] footer-container">
          <img src={pintexter_icon} alt="" />
        </div>
        <div className="p-3 pb-[6px] bg-[#fbfbfb] footer-container">
          <img src={whatsApp_icon} alt="" />
        </div>
       </div>
       <div className="flex flex-col items-center gap-7 w-[100%] mb-[30px] text-[#1a1a1a] text-lg">
        <hr className="w-[80%] border-none rounded-lg h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2024 - All Right Reserves.</p>
       </div>
    </div>
  )
}

export default Footer