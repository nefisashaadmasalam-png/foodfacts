import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
          query
        )}&search_simple=1&action=process&json=1`
      );

      const data = await res.json();

      console.log(data); // debug

      setResults(data.products || []);
    } catch (err) {
      console.log("Error:", err);
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Food Facts App</h1>
      <h2>My Food App</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && <p>No results found</p>}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  );
}

export default App;