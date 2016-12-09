function gsheetweb(){
  var GoogleSpreadsheet = require('google-spreadsheet');
  return {
    
    get: (id, cb) => {
        var doc = new GoogleSpreadsheet(id);
        doc.getInfo(function(err, info) {
            if(err) throw err;
            sheet = info.worksheets[0];
            sheet.getRows({}, function getRows(err, info){
                if(err) throw err;
                cb(info);
            });
        });
    }
    
  };
}

module.exports = gsheetweb;