document.cookie = "usuari=John";
document.cookie = "preferencia=color=blau";

document.cookie = "usuari=NouValor; expires=Thu, 01 Jan 2099 00:00:00 UTC";
document.cookie = "usuari=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

var totesLesCookies = document.cookie;
var cookiesSeparades = totesLesCookies.split('; ');
for (var i = 0; i < cookiesSeparades.length; i++) {
    var cookie = cookiesSeparades[i];
    var [nom, valor] = cookie.split('=');
    console.log(nom + ": " + valor);
}