<<<<<<< HEAD
import { useNavigate } from "react-router-dom"

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{product.product_name || "No Name"}</h3>
      <p>{product.brands || "No Brand"}</p>

      <button onClick={() => navigate(`/product/${product.code}`)}>
        View Details
      </button>
    </div>
  )
}

export default FoodCard
=======
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
>>>>>>> 76d94256bceb33c18bd944938d43519ca0b6773b
