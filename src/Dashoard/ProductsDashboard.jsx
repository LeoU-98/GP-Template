import Dashboard from "./Dashboard";

const productDemandData = [
  { name: "Wheat", sales: 4000 },
  { name: "Corn", sales: 3000 },
  { name: "Rice", sales: 2000 },
  { name: "Soybeans", sales: 1500 },
  { name: "Potato", sales: 2000 },
  { name: "Tomato", sales: 1500 },
];

const marketPriceTrends = [
  { month: "Jan", price: 10 },
  { month: "Feb", price: 12 },
  { month: "Mar", price: 15 },
  { month: "Apr", price: 13 },
  { month: "May", price: 18 },
];

const revenueData = [
  { name: "Produce", value: 5000 },
  { name: "Equipment", value: 3000 },
  { name: "Supplies", value: 2000 },
];

function ProductsDashboard() {
  return (
    <Dashboard
      barTitle={"Product Demand"}
      lineTitle={"Market Price Trends"}
      pieTitle={"Revenue Breakdown"}
      barData={productDemandData}
      lineData={marketPriceTrends}
      pieData={revenueData}
    />
  );
}

export default ProductsDashboard;
