function FoodCard({ product }) {
  return (
    <div>
      <h3>{product.product_name || "No Name"}</h3>
      <p>{product.brands || "Unknown"}</p>

      <img
        src={product.image_url || "https://via.placeholder.com/100"}
        width="100"
      />

      <p>Energy: {product.nutriments?.energy || "N/A"}</p>
      <p>Fat: {product.nutriments?.fat || "N/A"}</p>
      <p>Sugar: {product.nutriments?.sugars || "N/A"}</p>
    </div>
  );
}

export default FoodCard;