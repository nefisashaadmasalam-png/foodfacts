import FoodCard from "./FoodCard";

function FoodList({ products }) {
  return (
    <div>
      {products.map((item, index) => (
        <FoodCard key={index} product={item} />
      ))}
    </div>
  );
}

export default FoodList;