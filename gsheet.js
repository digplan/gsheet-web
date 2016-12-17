var twodarray = (arr) => {
  var keys=arr.shift();
  return arr.map((i)=>{
    var o={};
    for(var j=0;j<keys.length;j++)
      o[keys[j]] = i[j];
    return o;
  });
}

var GoogleSpreadsheet = require('google-spreadsheet');
var gsheetweb = {};
gsheetweb.get = (id, cb) => {
  var doc = new GoogleSpreadsheet(id);
  doc.getInfo((err, info) => {
    if(err) throw err;
    var sheet = info.worksheets[0];
    sheet.getRows({}, (err, info) => {
      if(err) throw err;
      var objarr = twodarray(info);
      cb(objarr);
    });
  });
}

module.exports = gsheetweb;
