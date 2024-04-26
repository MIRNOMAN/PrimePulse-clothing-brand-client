import men_banner from "../../Images/banner_mens.png";

import dropdown_icon from '../../Images/dropdown_icon.png'
import Item from "../../Components/Items/Items"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Men = () => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="block  w-[77%]" src={men_banner} alt="" />
      <div className="flex m-[0px 170px] justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-12 </span> out of 36 products
        </p>
        <div className="px-3 py-5  shopcategory-sort ">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="mx-10 my-[110px] grid grid-cols-4 gap-5 ">
        {all_products.map((item, i) => {
          if (item.category === 'men') {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center mx-auto my-[70px] w-[180px] h-[59px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore more
      </div>
    </div>
  )
}

export default Men