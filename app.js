const electronify = require('electronify-server');
electronify({
  url: 'http://sweltering-distance.surge.sh',
  noServer: true,
  debug: true
});