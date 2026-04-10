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