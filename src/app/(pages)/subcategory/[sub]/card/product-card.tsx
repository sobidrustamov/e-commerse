"use client";
import Link from "next/link";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,remove } from "@/redux/product-reducer/cart-reducer";
import { addToLike, deleteItem } from "@/redux/product-reducer/like-reducer";

interface Props {
  data: {
    id: number;
    is_available: boolean;
    title: string;
    images: {
      image: string;
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: string;
    price_with_discount: null;
    quantity: number;
  };
  parent: string;
}

const ProductCard: React.FC<Props> = ({ data, parent }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.like);
  const { products:cart } = useSelector((state: RootState) => state.cart);
  const like = products.find((item) => item.id === data.id);
  const cartItem = cart.find((item) => item.id === data.id);

  const addItem = () => {
    dispatch(addToCart({ ...data, userCount: 0, userPrice: 0 }));
  };
  const removeItem = (id:number) => {
    dispatch(remove(id));
  };
  const addLiked = () => {
    dispatch(addToLike(data));
  };
  const removeLiked = (id:number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="relative lg:w-[300px] p-2 shadow-lg flex flex-col rounded-2xl overflow-hidden">
      <div className="h-[280px] flex items-center justify-center object-contain">
        <img
          src={data.images[0].image}
          alt="product"
          className="max-h-[100%]"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <p className="text-center text-xl">{data.title}</p>
        <p className="text-center font-bold">$ {data.price}</p>
      </div>
      <div className="p-2 flex gap-2 items-center justify-evenly">
        {!cartItem?<button
          onClick={addItem}
          className="w-full bg-regal-blue text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>:<button
          onClick={()=>removeItem(data.id)}
          className="w-full bg-cyan-100 px-4 py-2 rounded-md"
        >
          Remove at Cart
        </button>}
        {!like ? (
          <button onClick={addLiked} className="">
            <FcLikePlaceholder size={30} />
          </button>
        ) : (
          <button onClick={()=>removeLiked(data.id)} className="">
            <FcLike size={30} />
          </button>
        )}
        <Link href={`/subcategory/${parent}/${data.id}`} className="flex items-center">
          <IoEyeOutline size={30} color="#999" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
