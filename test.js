try {
  var gsheet = require('.');
} catch(e) {
  var gsheet = require('gsheet-web');
}

gsheet('1KPJr7wBEzicgrqukhEZBdGCqNQQB-ldrRrS0lxmq_qo', (data)=>{
  console.log(data);  // array of objects
});
