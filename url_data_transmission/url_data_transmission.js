console.log("Gello")
text_area=document.getElementById("data")
generated_url=document.getElementById("url")
var ABC = {
    toAscii: function(bin) {
      return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
        return String.fromCharCode(parseInt(bin, 2))
      })
    },
    toBinary: function(str, spaceSeparatedOctets) {
      return str.replace(/[\s\S]/g, function(str) {
        str = ABC.zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
      })
    },
    zeroPad: function(num) {
      return "00000000".slice(String(num).length) + num
    }
  };
function createURL(){
    generated_url.value=window.location.origin + window.location.pathname + "?" + encodeURI(text_area.value)
}
function getDataFromUrl(){
    return window.location.href.split("?")[1]
}




data=getDataFromUrl()
binary_data=ABC.toBinary(data)
decodeURIData=decodeURI(data)
text_area.value=decodeURIData