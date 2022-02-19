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
    generated_url.value=window.location.origin + window.location.pathname + "?" + text_area.value.replaceAll("\n","#ENTER#")
}
function getDataFromUrl(){
    return window.location.href.split("?")[1]
}




data=getDataFromUrl()
binary_data=ABC.toBinary(data)
data_replace_enter=data.replaceAll("#ENTER#","\n")
.replaceAll("%20"," ")
text_area.value=data_replace_enter