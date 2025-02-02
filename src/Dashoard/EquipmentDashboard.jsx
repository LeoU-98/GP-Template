import Dashboard from "./Dashboard";

const equipmentSalesData = [
  { name: "Tractors", sales: 120 },
  { name: "Irrigation Kits", sales: 95 },
  { name: "Harvesters", sales: 80 },
  { name: "Soil Tillers", sales: 60 },
];

const agriTechTrends = [
  { year: "2020", adoption: 20 },
  { year: "2021", adoption: 35 },
  { year: "2022", adoption: 50 },
  { year: "2023", adoption: 70 },
  { year: "2024", adoption: 85 },
];

const storageInvestment = [
  { name: "Cold Storage", value: 5000 },
  { name: "Silos", value: 3500 },
  { name: "Processing Units", value: 2500 },
];

function EquipmentDashboard() {
  return (
    <Dashboard
      barTitle={"Equipment Sales"}
      lineTitle={"Agri-Tech Trends"}
      pieTitle={"Storage Investment"}
      barData={equipmentSalesData}
      lineData={agriTechTrends}
      pieData={storageInvestment}
    />
  );
}

export default EquipmentDashboard;
