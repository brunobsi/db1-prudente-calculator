// ==UserScript==
// @name         DB1 prudente ponto calculator
// @namespace    https://github.com/brunobsi/db1-prudente-calculator
// @version      1.0
// @description  DB1 prudente ponto calculator 
// @author       Heidi Kussakawa / Bruno Neves
// @match        http://ponto.db1.com.br/ponto/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$.getScript( "http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" ).done(function() {
    $.getScript("https://github.com/brunobsi/db1-prudente-calculator/blob/master/db1-calculator.js");
});