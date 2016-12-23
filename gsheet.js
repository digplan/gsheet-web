var twodarray = (arr) => {
  var keys=arr.shift();
  return arr.map((i)=>{
    var o={};
    for(var j=0;j<keys.length;j++)
      o[keys[j]] = i[j];
    return o;
  });
};

function gsheet(id, cb){
  require('request')(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values`, (e,r,b)=>{
      var parseString = require('xml2js').parseString;
      parseString(b, function (err, result) {
         if(err) throw err;
         var ret = [];
         var keys = Object.keys(result.feed.entry[0])
           .filter((name)=>{ return !!name.match(/gsx/) })
           .map((k)=>{ return k.replace(/gsx./,'')});
         ret.push(keys);
         result.feed.entry.forEach((row)=>{
           var arow = [];
           keys.forEach((k)=>{
             arow.push(row['gsx:'+k][0]);
           });
           ret.push(arow);
         });
         var twod = twodarray(ret);
         cb(twod);
      });
  });
}

module.exports = gsheet;
