// Edit coordinates here or drag markers on /transit-map/editor/
const STOPS_DATA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Lynnwood City Center", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.29459, 47.815719] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Mountlake Terrace", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.314793, 47.785156] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Shoreline North/185th", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.322378, 47.763965] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Shoreline South/148th", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.325232, 47.736134] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Northgate", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.327914, 47.702282] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Roosevelt", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.31461, 47.676044] }
    },
    {
      "type": "Feature",
      "properties": { "name": "U District", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.313972, 47.659928] }
    },
    {
      "type": "Feature",
      "properties": { "name": "University of Washington", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.303914, 47.649735] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Capitol Hill", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.320533, 47.619732] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Westlake", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.336653, 47.611613] }
    },
    {
      "type": "Feature",
      "properties": { "name": "University Street", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.336733, 47.607689] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Pioneer Square", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.331648, 47.601765] }
    },
    {
      "type": "Feature",
      "properties": { "name": "International District/Chinatown", "lines": ["1", "2"] },
      "geometry": { "type": "Point", "coordinates": [-122.3279, 47.5982] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Stadium", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.327174, 47.591202] }
    },
    {
      "type": "Feature",
      "properties": { "name": "SODO", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.3272, 47.5789] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Beacon Hill", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.3113, 47.5703] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Mount Baker", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.2981, 47.5751] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Columbia City", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.2906, 47.5598] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Othello", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.282, 47.538] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Rainier Beach", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.2793, 47.5214] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Tukwila International Blvd", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.2887, 47.4643] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Sea-Tac/Airport", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.2975, 47.444] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Angle Lake", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.2976, 47.4214] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kent/Des Moines", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.295953, 47.374247] }
    },
    {
      "type": "Feature",
      "properties": { "name": "S 272nd", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.287031, 47.336424] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Federal Way Transit Center", "lines": ["1"] },
      "geometry": { "type": "Point", "coordinates": [-122.296234, 47.317948] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Judkins Park", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.302562, 47.590283] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Mercer Island", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.233661, 47.588387] }
    },
    {
      "type": "Feature",
      "properties": { "name": "South Bellevue", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.190371, 47.586469] }
    },
    {
      "type": "Feature",
      "properties": { "name": "East Main", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.191122, 47.608102] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bellevue Downtown", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.191916, 47.615262] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Spring District/120th", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.183976, 47.618343] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bel-Red/130th", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.178633, 47.623868] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Overlake Village", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.165823, 47.624475] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Overlake/NE 70th", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.138979, 47.636268] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Redmond Technology", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.133229, 47.64482] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Marymoor Village", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.109497, 47.667324] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Downtown Redmond", "lines": ["2"] },
      "geometry": { "type": "Point", "coordinates": [-122.118487, 47.671601] }
    }
  ]
};
