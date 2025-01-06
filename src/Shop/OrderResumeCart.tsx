interface OrderResume {
  imagePath: string;
  name: string;
  reference: string;
  quantite: number;
  price: number;
}
function OrderResumeCart(props: OrderResume) {
  return (
    <div className="bg-[#FBFBFB] h-20 w-full mt-4 flex items-center justify-between p-3">
      <img className="w-24" src={props.imagePath} alt="" />

      <div className="flex flex-col">
        <p>{props?.name}</p>
        <p>{props.reference}</p>
      </div>

      <p>(× {props.quantite})</p>
      <p className="font-bold text-[#46A358]">${props.price}</p>
    </div>
  );
}

export default OrderResumeCart;
