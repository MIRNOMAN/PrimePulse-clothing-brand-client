import new_collection from "../../assets/new_collections"
import Item from "../Items/Items"

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-[100px]">
        <h1 className="text-[#171717] text-4xl font-semibold">NEW COLLECTIONS</h1>
        <hr className="w-[200px] h-[6px] rounded-lg bg-[#252525]" />
        <div className="grid grid-cols-4 mt-12 gap-7">
           {new_collection.map((item,i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           })}
        </div>
    </div>
  )
}

export default NewCollections