import LZString from "./lz-string.js";
window.createURL = createURL;

console.log(LZString.compress("Gello"));

var ABC = {
  toAscii: function (bin) {
    return bin.replace(/\s*[01]{8}\s*/g, function (bin) {
      return String.fromCharCode(parseInt(bin, 2));
    });
  },
  toBinary: function (str, spaceSeparatedOctets) {
    return str.replace(/[\s\S]/g, function (str) {
      str = ABC.zeroPad(str.charCodeAt().toString(2));
      return !1 == spaceSeparatedOctets ? str : str + " ";
    });
  },
  zeroPad: function (num) {
    return "00000000".slice(String(num).length) + num;
  },
};
export function createURL() {
  generated_url.value =
    window.location.origin +
    window.location.pathname +
    "?" +
    LZString.compressToEncodedURIComponent(text_area.value)
}
function getDataFromUrl() {
  return window.location.search.slice(1,window.location.search.length);
}

window.onload = () => {
  
  const text_area = document.getElementById("data");
  const generated_url = document.getElementById("url");
  window.generated_url = generated_url;
  window.text_area = text_area;
  const data = getDataFromUrl();
  //const binary_data = ABC.toBinary(data);
  //const decodeURIData = decodeURI(data);
  const decompress_data = LZString.decompressFromEncodedURIComponent(data);
  text_area.value = decompress_data
};
