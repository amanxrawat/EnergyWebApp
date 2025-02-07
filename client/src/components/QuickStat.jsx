// components/QuickStat.jsx


const QuickStat = ({ title, value, change, type = 'percentage' }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-semibold mt-2">{value}</p>
        {change && (
          <p className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
          </p>
        )}
      </div>
    );
  };
  
  // components/RecommendationsList.jsx
  const RecommendationsList = ({ recommendations }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium">{rec.title}</h3>
              <p className="text-sm text-gray-600">Potential Savings: {rec.savings}</p>
              <p className="text-sm text-gray-600">Priority: {rec.priority}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export { QuickStat, RecommendationsList };