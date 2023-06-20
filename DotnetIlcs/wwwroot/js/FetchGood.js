const goodUri = "https://insw-dev.ilcs.co.id/n/barang?hs_code=";
let good = null;

function getGood() {
    const goodCode = document.getElementById("goodInput").value;
    fetch(`${goodUri}${goodCode}`)
        .then(response => response.json())
        .then(data => {
            good = data.data[0];
            _setGood(good);
        })
        .catch(error => console.error("Barang tidak ditemukan.", error));
}
function _setGood(data) {
    document.getElementById("goodOutput").innerText = data.uraian_id;
}
document.getElementById("goodInput").addEventListener("input", getGood);

//export { good };