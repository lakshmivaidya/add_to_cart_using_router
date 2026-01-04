import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} className="h-40 mx-auto" />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="text-sm">{product.description.slice(0, 60)}...</p>
      <p className="font-semibold mt-2">${product.price}</p>

      {isInCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-500 text-white px-4 py-2 mt-2"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 mt-2"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;