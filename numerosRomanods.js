// Calculadora de Números romanos de 1 - 3000

function convertToRoman(num) {


    let romanosMilhar = {
        3: "MMM",
        2: "MM",
        1: "M"
    }


    let romanosCentena = {
        9: "CM",
        8: "DCCC",
        7: "DCC",
        6: "DC",
        5: "D",
        4: "CD",
        3: "CCC",
        2: "CC",
        1: "C",
    }


    let romanosDezenas = {
        9: "XC",
        8: "LXXX",
        7: "LXX",
        6: "LX",
        5: "L",
        4: "XL",
        3: "XXX",
        2: "XX",
        1: "X",
    }

    let romanosUnidade = {
        9: "IX",
        8: "VIII",
        7: "VII",
        6: "VI",
        5: "V",
        4: "IV",
        3: "III",
        2: "II",
        1: "I"
    }

    let gobalQuery = []



    function separaMilhar(num) {
        let x = String(num)
        let ar = []
        for (let i = 0; i < x.length; i++) {
            ar.push(x[i])
        }
        return ar
    }

    function coletaLetras(array) {
        if (array.length === 1) {
            gobalQuery.push(romanosUnidade[array[0]])
        }

        else if (array.length === 2) { //Dezena
            gobalQuery.push(romanosDezenas[array[0]])
            gobalQuery.push(romanosUnidade[array[1]])
        }
        else if (array.length === 3) { //Centena
            gobalQuery.push(romanosCentena[array[0]])
            gobalQuery.push(romanosDezenas[array[1]])
            gobalQuery.push(romanosUnidade[array[2]])
        }
        else if (array.length === 4) { //Milhar
            gobalQuery.push(romanosMilhar[array[0]])
            gobalQuery.push(romanosCentena[array[1]])
            gobalQuery.push(romanosDezenas[array[2]])
            gobalQuery.push(romanosUnidade[array[3]])
        }


    }

    let numR = separaMilhar(num)
    coletaLetras(numR)

    return String(gobalQuery).replaceAll(",", "")
}



