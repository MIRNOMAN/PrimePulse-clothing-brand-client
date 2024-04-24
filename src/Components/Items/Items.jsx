

const Items = (props) => {
  return (
    <div className="w-[250px] item">
        <img src={props.image} alt="" />
        <p className="mx-[6px]">{props.name}</p>
        <div className="flex gap-5">
            <div className="text-[#374151] text-[18px] font-semibold">
                ${props.new_price}
            </div>
            <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items