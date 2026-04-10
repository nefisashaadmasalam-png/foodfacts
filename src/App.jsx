<<<<<<< HEAD
import { useReducer } from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import SavedPage from "./pages/SavedPage"
import Navbar from "./components/Navbar"

function savedReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find(item => item.code === action.product.code)) {
        return state
      }
      return [...state, action.product]

    case "REMOVE":
      return state.filter(item => item.code !== action.code)

    default:
      return state
  }
}

function App() {
  const [saved, dispatch] = useReducer(savedReducer, [])

  return (
    <div>
      <Navbar savedCount={saved.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route
          path="/product/:barcode"
          element={<DetailPage saved={saved} dispatch={dispatch} />}
        />

        <Route
          path="/saved"
          element={<SavedPage saved={saved} dispatch={dispatch} />}
        />
      </Routes>
    </div>
  )
}

export default App
=======
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
>>>>>>> 76d94256bceb33c18bd944938d43519ca0b6773b
