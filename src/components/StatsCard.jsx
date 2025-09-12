const StatsCard = ({ label, value }) => (
  <div className="bg-white shadow-md rounded-xl p-4 text-center">
    <h2 className="text-xl font-bold">{value}</h2>
    <p className="text-gray-500">{label}</p>
  </div>
);
export default StatsCard;
