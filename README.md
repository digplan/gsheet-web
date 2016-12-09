Pull Public Google Spreadsheet as a JSON file (array of objects).  Simple.
````
var gsheet = require('gsheet-web');
gsheet.get('1KPJr7wBEzicgrqukhEZBdGCqNQQB-ldrRrS0lxmq_qo', function(data){
  console.log(data);  // array of objects
});
````
