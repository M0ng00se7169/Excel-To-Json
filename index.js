'use strict';
var excelToJson = require('convert-excel-to-json');
var jsonfile = require('jsonfile');

var result = excelToJson({
    sourceFile: 'pytania_plik_luty_2017.xlsx', // The Excel file name
    columnToKey: {
        A: 'Nazwa pytania',
        B: 'Numer pytania',
        C: 'Pytanie',
        D: 'Odpowiedz A',
        E: 'Odpowiedz B',
        F: 'Odpowiedz C',
        G: 'Poprawna odp',
        H: 'Media',
        I: 'Zakres struktury',
        J: 'Liczba punktow',
        K: 'Kategorie',
        L: 'Nazwa bloku',
        M: 'Zrodlo pytania',
        N: 'O co chcemy zapytac',
        O: 'Jaki ma zwiazek z bezpieczenstwem',
        P: 'Status',
        Q: 'Podmiot',
        R: 'Nazwa media tlumaczenie migowe (PJM) tresc pyt',
        S: 'Nazwa media tlumaczenie migowe (PJM) tresc pyt',
        T: 'Nazwa media tlumaczenie migowe (PJM) tresc pyt',
        U: 'Nazwa media tlumaczenie migowe (PJM) tresc pyt'
    }
});

var file = 'output.json'; // Output File is here

jsonfile.writeFile(file, result, function(err) {
    console.log(err);
});

