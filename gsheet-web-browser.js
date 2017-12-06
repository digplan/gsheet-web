window.gsheet = async id=>{
  var f = await fetch(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/basic?alt=json`)
  var j = await f.json()
  return j.feed.entry
}
