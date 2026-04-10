import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        )

        const data = await res.json()

        if (data.status === 1) {
          setProduct(data.product)
        } else {
          setProduct(null)
        }
      } catch (err) {
        console.log(err)
        alert("Error fetching product")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [barcode])

  if (loading) return <p>Loading...</p>

  if (!product) return <p>No product found</p>

  const isSaved = saved.some((p) => p.code === barcode)

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: "REMOVE", code: barcode })
    } else {
      dispatch({ type: "ADD", product })
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{product.product_name || "No Name"}</h2>
      <p>{product.brands || "No Brand"}</p>

      <button onClick={handleSave}>
        {isSaved ? "Remove" : "Save"}
      </button>
    </div>
  )
}

export default DetailPage