// Função para carregar o conteúdo do bar.html
function loadBar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../Navegacao/bar.html', true);  // Caminho relativo ao arquivo bar.html
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('barContainer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Chama a função ao carregar a página
window.onload = loadBar;
