import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegTrashAlt } from "react-icons/fa";
import { remove, toggleAnmount } from "@/redux/product-reducer/cart-reducer";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const CartTable = () => {
  const { products, totalCount, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const addPro = (id: number) => {
    dispatch(toggleAnmount({ type: "add", id }));
  };
  const removePro = (id: number) => {
    dispatch(toggleAnmount({ type: "remove", id }));
  };

  return (
    <div>
      {products.length ? (
        <div className="flex justify-between gap-5">
          <Table className="w-[90%]">
            <TableHeader>
              <TableRow>
                <TableHead className="border text-center"></TableHead>
                <TableHead className="border text-center"></TableHead>
                <TableHead className="border text-center">Product</TableHead>
                <TableHead className="border text-center">Price</TableHead>
                <TableHead className="border text-center">Quantity</TableHead>
                <TableHead className="border text-center">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="border text-center">
                    <button onClick={() => removeItem(item.id)}>
                      <FaRegTrashAlt />
                    </button>
                  </TableCell>
                  <TableCell className="border text-center w-[130px]">
                    <img src={item.images[0].image} alt="product img" />
                  </TableCell>
                  <TableCell className="border text-center">
                    {item.title}
                  </TableCell>
                  <TableCell className="border text-center">
                    $ {item.price}
                  </TableCell>
                  <TableCell className="border text-center">
                    <button
                      onClick={() => removePro(item.id)}
                      disabled={item.userCount < 2}
                      className="py-2 px-5 rounded-xl bg-slate-100"
                    >
                      -
                    </button>
                    <span className="text-lg p-3">{item?.userCount}</span>
                    <button
                      onClick={() => addPro(item.id)}
                      disabled={item.userCount >= item.quantity}
                      className="py-2 px-5 rounded-xl bg-slate-100"
                    >
                      +
                    </button>
                  </TableCell>
                  <TableCell className="border text-center">
                    $ {item?.userPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="w-1/4 bg-slate-100 p-4 h-[200px]">
            <h2 className="text-3xl text-center font-medium">Cart Totals</h2>
            <p className="py-2">Total Count: {totalCount}</p>
            <p className="py-2">Total Price: $ {totalPrice}</p>
            <button className="w-full bg-cyan-400 text-white py-2  rounded-lg">
              Proceed To Checkout
            </button>
          </div>
        </div>
      ) : (
        "..."
      )}
    </div>
  );
};

export default CartTable;
