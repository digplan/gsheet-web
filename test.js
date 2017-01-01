try {
  var gsheet = require('.');
} catch(e) {
  var gsheet = require('gsheet-web');
}

gsheet('1KPJr7wBEzicgrqukhEZBdGCqNQQB-ldrRrS0lxmq_qo', (data)=>{
  console.log('Try callback ', data.length);  // array of objects
});

gsheet('1KPJr7wBEzicgrqukhEZBdGCqNQQB-ldrRrS0lxmq_qo').then((data)=>{
  console.log('Try promise ', data.length);
});