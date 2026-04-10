import { useState } from "react"
import axios from "axios"
import FoodCard from "../components/FoodCard"

function HomePage() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    try {
      setLoading(true)

      const res = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1`
      )

      setData(res.data.products)
    } catch (err) {
      console.log(err)
      alert("Error fetching data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Search Food</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search food..."
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {!loading && data.length === 0 && <p>No results</p>}

      {data.map((item) => (
        <FoodCard key={item.code} product={item} />
      ))}
    </div>
  )
}

export default HomePage