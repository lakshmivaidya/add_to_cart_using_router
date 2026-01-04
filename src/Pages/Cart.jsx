import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-4">
          <div>
            <h2>{item.title}</h2>
            <p>${item.price} x {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-300">-</button>
            <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-300">+</button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-6">
          <p>Total: ${total.toFixed(2)}</p>
          <p>Discount (10%): -${discount.toFixed(2)}</p>
          <p className="font-bold">
            Final Price: ${finalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;