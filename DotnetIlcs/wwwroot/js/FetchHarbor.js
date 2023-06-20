const harborUri = "https://insw-dev.ilcs.co.id/n/pelabuhan?";
let harbor = null;
let harborList = [];

function getHarborList() {
    const countryCode = country.kd_negara;
    const harborName = document.getElementById("harborInput").value;
    fetch(`${harborUri}kd_negara=${countryCode}&ur_pelabuhan=${harborName}`)
        .then(response => response.json())
        .then(data => {
            harbor = data.data;
            _setHarborList(harborList);
        })
        .catch(error => console.error("Pelabuhan tidak ditemukan.", error));
}
function _setHarborList(dataList) {
    const existingList = document.getElementById("harborList");
    existingList.innerHTML = "";
    dataList.forEach(harborOption => {
        const option = document.createElement("option");
        option.value = harborOption.ur_pelabuhan;
        option.addEventListener("click", () => { harbor = harborOption; });
        existingList.appendChild(option);
    })
}
document.getElementById("harborInput").addEventListener("input", getHarborOList);