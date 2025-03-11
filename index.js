// code here
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const freeDistance = 400;
    const maxRideDistance = 2500;
    const pricePerFoot = 0.02;
    const longDistancePrice = 25;
  
    const totalFeet = distanceTravelledInFeet(start, destination);
  
    if (totalFeet <= freeDistance) {
      return 0;
    } else if (totalFeet > maxRideDistance) {
      return "cannot travel that far";
    } else if (totalFeet <= 2000) {
      return (totalFeet - freeDistance) * pricePerFoot;
    } else {
      return longDistancePrice;
    }
  }
  