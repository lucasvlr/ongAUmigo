console.log("Dashboard ONG carregado");

// contador
let rescued = document.getElementById("rescuedCount");

setInterval(() => {
    let current = parseInt(rescued.innerText);
    if (current < 140) rescued.innerText = current + 1;
}, 5000);