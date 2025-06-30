// ==UserScript==
// @name         Olx
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove todas as cidades que não são BH
// @author       Marcello Cavazza
// @match        https://www.olx.com.br/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/b/b3/Logo_olx.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.createElement('button');

    button.textContent = 'Remover cidades';
    button.style.zIndex = '99999999';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.left = '20px';
    button.style.background = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '10px 20px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    document.body.appendChild(button);

    button.addEventListener('click', function () {
    console.clear();
    const lojasGrid = document.getElementsByClassName('AdListing_gridLayout__DTjHC');
    console.log(lojasGrid[0]);

    lojasGrid[0].childNodes.forEach((loja) => {
        console.log(loja);
        var lojaLocalizacao = loja.textContent.trim();
        if (lojaLocalizacao.toLowerCase().replaceAll(" ", "").indexOf("belohorizonte") == -1)
        {
          loja.style.display = 'none'
        }
    });
});
})();