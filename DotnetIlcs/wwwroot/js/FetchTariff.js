//import { good } from "./FetchGood";

const tariffUri = "https://insw-dev.ilcs.co.id/n/tarif?hs_code=";
let tariffPercentage = 0;

function getTariffPercentage() {
    console.log(`good: ${good.hs_code}`)
    const goodCode = good.hs_code;
    fetch(`${tariffUri}${goodCode}`)
        .then(response => response.json())
        .then(data => {
            tariffPercentage = data;
            console.log(tariffPercentage)
            _setTariffPercentage(tariffPercentage);
        })
        .catch(error => console.error("Barang tidak ditemukan.", error));
}
function _setTariffPercentage(data) {
    const price = parseInt(document.getElementById("priceInput").value);
    console.log(price)

    document.getElementById("tariffPercentageOutput").innerText = data.bm;
    document.getElementById("tariffOutput").innerText = data.bm / 100 * price;
}
document.getElementById("priceInput").addEventListener("input", getTariffPercentage);