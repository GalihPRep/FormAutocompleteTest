const countryUri = "https://insw-dev.ilcs.co.id/n/negara?ur_negara=";
let country = {};
let countryList = [];


function getCountryList() {
    const countryName = document.getElementById("countryInput").value;
    fetch(`${countryUri}${countryName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            countryList = data.data;
            _setCountryList(countryList);
        })
        .catch(error => console.error("Negara tidak ditemukan.", error));
}
function _setCountryList(dataList) {
    const existingList = document.getElementById("countryList");
    existingList.innerHTML = "";
    dataList.forEach(countryOption => {
        console.log(countryOption)
        const option = document.createElement("option");
        option.value = countryOption.ur_negara;
        option.addEventListener("click", () => { country = countryOption; });
        existingList.appendChild(option);
    })
}
document.getElementById("countryInput").addEventListener("input", getCountryList);