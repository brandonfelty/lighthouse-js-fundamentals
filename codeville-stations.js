const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
// stations need to be a school or community centre
// stations need a capacity of at least 45

function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const venue = station[2];
    
    //console.log(capacity);
    //console.log(venue);
    if (capacity >= 45 && (venue === 'school' || venue === 'community centre')) {
    goodStations.push(station[0]);
    }  
    //  return station[0];
    //} else {
    //  return "No stations meet capacity and venue requirements";
    //}
    //console.log(station);
  }
  return goodStations;
}
chooseStations(stations);
console.log(chooseStations(stations));