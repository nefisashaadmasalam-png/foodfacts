function FoodCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px",
        borderRadius: "12px",
        backgroundColor: "#1e1e1e",
        color: "white",
        width: "250px",
        textAlign: "center"
      }}
    >
      <h3>{product.product_name || "No Name"}</h3>
      <p>{product.brands || "Unknown"}</p>

      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt="food"
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />

      <p>Energy: {product.nutriments?.energy || "N/A"}</p>
      <p>Fat: {product.nutriments?.fat || "N/A"}</p>
      <p>Sugar: {product.nutriments?.sugars || "N/A"}</p>
    </div>
  );
}

export default FoodCard;