var twodarray = require('twodarray');
var request = require('request');
var xml2js = require('xml2js');

function gsheet(id, cb){
  request(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values`, (e, r, b)=>{
      var parseString = xml2js.parseString;
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

