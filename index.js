document.getElementById("apiButton").addEventListener("click", function() {
    const apiURL = "https://raw.githubusercontent.com/codigoperfeito/consumo-api/refs/heads/main/data.json";
    const constainer = document.getElementById("container");
    function request(url){
        return new Promise ((resolve, reject) =>{
            const xhr = new XMLHttpRequest();
            xhr.open("GET",url,true);
            xhr.onreadystatechange = () =>{
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.status);
                    }
                }
            }
            xhr.send();
        })
    }
    async function resolvido (){
        const resposta = await request(apiURL)
        try {
            resposta.forEach(e => {
                constainer.innerHTML += `
                <ul>
                <li> ${e.id}</li>
                <li> ${e.name}</li>
                <li> ${e.email}</li>
                <li> ${e.age}</li>
                </ul>
                `;
            });
        } catch (e) {
            constainer.innerText = "Erro ${e} as vezes api do github fica indisponivel, e normal tente novamente apos 5s."
        }
    }
    resolvido();
});