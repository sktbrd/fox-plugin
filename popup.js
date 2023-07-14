function converter(numero) {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=shapeshift-fox-token&vs_currencies=usd")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            var result_tofix = data['shapeshift-fox-token'].usd * numero;
            document.querySelector('#result').textContent = result_tofix.toFixed(4) + " USD";
        })
        .catch(error => {
            console.error(`There has been a problem with your fetch operation: ${error.message}`);
        });
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#btn').addEventListener('click', function(){
        let numero = document.querySelector('#numero').value;
        converter(numero);
    });
});
