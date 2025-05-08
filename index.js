document.getElementById("apiButton").addEventListener("click", function() {
    const apiURL = "https://raw.githubusercontent.com/codigoperfeito/consumo-api/refs/heads/main/data.json";
    const xhr = new XMLHttpRequest();
    const constainer = document.getElementById("container");
    xhr.open("GET", apiURL, true);
    xhr.onreadystatechange = ()=>{
        if (xhr.status >= 200 && xhr.status < 300 && xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            data.forEach(e => {
                constainer.innerHTML += `
                <ul>
                <li> ${e.id}</li>
                <li> ${e.name}</li>
                <li> ${e.email}</li>
                <li> ${e.age}</li>
                </ul>
                `;
            });;
        }else if (xhr.status >= 400) {
            constainer.innerHTML = "Error: " + xhr.status;
        }
    }
    xhr.send();
});