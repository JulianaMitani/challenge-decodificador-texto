document.querySelector('.botao-criptografar').addEventListener('click', function() {
    let digite_texto = document.querySelector('.Digite__seu__texto').value.toLowerCase();
    let criptografar = digite_texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.querySelector('.resposta-do-texto').value = criptografar;
    if ('click'){
        document.querySelector('.destaque-nenhuma-mensagem').innerText = " " 
        document.querySelector('.lupa').remove();
    };
});

document.querySelector('.botao-descriptografar').addEventListener('click', function() {
    let digite_texto = document.querySelector('.Digite__seu__texto').value.toLowerCase();
    let descriptgrafar = digite_texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.querySelector('.resposta-do-texto').value = descriptgrafar; 
});

const botaoCopiar = document.querySelector('.botao-copiar');

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(document.querySelector('.resposta-do-texto').value)
});