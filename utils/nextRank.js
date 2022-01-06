

function nextRank(points, ranks) {
  if (points < 101) {
    let requiredPoints = ranks[1].required_points;
    return requiredPoints;
  }
  else if (points < 201 && points >= 101) {
    let requiredPoints = ranks[2].required_points;
    return requiredPoints;
  }
};

export default nextRank;
