// components/RecommendationsList.jsx
import PropTypes from 'prop-types';

const RecommendationsList = ({ recommendations }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
      <div className="space-y-4">
        {recommendations?.map((rec, index) => (
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

RecommendationsList.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.required,
      savings: PropTypes.string.required,
      priority: PropTypes.string.required
    })
  )
};

RecommendationsList.defaultProps = {
  recommendations: []
};

export default RecommendationsList;
