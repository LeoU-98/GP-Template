import Dashboard from "./Dashboard";

const irrigationData = [
  { method: "Drip Irrigation", usage: 30 },
  { method: "Sprinklers", usage: 50 },
  { method: "Flood Irrigation", usage: 90 },
];

const livestockTrends = [
  { year: "2020", demand: 1000 },
  { year: "2021", demand: 1500 },
  { year: "2022", demand: 2300 },
  { year: "2023", demand: 3100 },
  { year: "2024", demand: 4000 },
];

const packagingMaterials = [
  { name: "Plastic Crates", value: 40 },
  { name: "Jute Bags", value: 35 },
  { name: "Cardboard Boxes", value: 25 },
];

function SuppliesDashboard() {
  return (
    <Dashboard
      barTitle={"Water Usage by Irrigation Method"}
      lineTitle={"Livestocks Demand"}
      pieTitle={"Packaging Materials Usage"}
      barData={irrigationData}
      lineData={livestockTrends}
      pieData={packagingMaterials}
    />
  );
}

export default SuppliesDashboard;
