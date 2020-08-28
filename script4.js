
const req = new XMLHttpRequest();
req.open("GET", "https://worldtimeapi.org/api/ip ")
req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const objeto2 = JSON.parse(this.responseText)
        var local = objeto2.timezone
        addsec(objeto2.datetime)
        var ip = objeto2.client_ip
        var fz = objeto2.utc_offset

        document.getElementById("hip").innerHTML += `<table id="tabela"><tr><td>${local}</td></tr>
                        <tr><td id="colunahip"></td></tr>
                        <tr> <td>${fz}</td></tr>
                        <tr><td>IP:${ip}</td></tr>
                        </table>`



    }

}
req.send()


function addsec(objeto) {

    var ano = parseInt(objeto.substring(0, 4))
    var mes = objeto.substring(5, 7)
    var dia = objeto.substring(8, 10)

    var h = objeto.substring(11, 13)
    var m = objeto.substring(14, 16)
    var s = objeto.substring(17, 19)

    var Cdata = new Date(ano, (mes - 1), dia, h, m, s)
    setInterval(function () {
        var auxi = Cdata.getSeconds()
        Cdata.setSeconds(auxi + 1)
        document.getElementById('colunahip').innerHTML = Cdata.getDate() + "/" + (Cdata.getMonth() + 1) + "/" + Cdata.getFullYear() + "<br>" + Cdata.getHours() + ":" + Cdata.getMinutes() + ":" + Cdata.getSeconds() + "s"





    }, 1000)

}