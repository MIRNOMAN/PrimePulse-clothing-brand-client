import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from '../Images/dropdown_icon.png'
import Item  from "../../src/Components/Items/Items"


export const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
  return (
    <div className="shop-category">
     <div className="shop-category-index-short">
      <p>
        <span>Showing 1-12 </span> out of 36 products
      </p>
      <div className="shopcategory-short">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
     </div>
     <div className="shopcategory-products">
      {all_products.map((item,i) => {
        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        }else{
          return null;
        }
      })}
     </div>
    </div>
  )
}
