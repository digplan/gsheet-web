var GoogleSpreadsheet = require('google-spreadsheet');
var gsheetweb = {};
gsheetweb.get = (id, cb) => {
  var doc = new GoogleSpreadsheet(id);
  doc.getInfo((err, info) => {
    if(err) throw err;
    var sheet = info.worksheets[0];
    sheet.getRows({}, (err, info) => {
      if(err) throw err;
      cb(info);
    });
  });
}

module.exports = gsheetweb;
