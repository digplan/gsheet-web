var twodarray = require('twodarray');
var request = require('request');
var xml2js = require('xml2js');

module.exports = (id, cb)=>{
  var resf = (res, rej)=>{
    request(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values`, (e, r, b)=>{
        if(e) throw Error(e);
        var parseString = xml2js.parseString;
        parseString(b, function (err, result) {
           if(err) throw Error('Make sure this sheet has been Published (File--Publish to the web)');
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
           res(twod);
        });
    });
  };
  if(cb) return resf(cb, cb);
  return new Promise(resf);
};