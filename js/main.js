const llaves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
} 

let keys = Object.keys(llaves)
let values = Object.values(llaves)

function lowerCase(texto) {
    return texto.toLowerCase()
}

function encriptar(texto) {
    let dataEncriptada = ''
    let separarCaracteres = [...texto]
    
    for(let i = 0; i < separarCaracteres.length; i++) { 
        for(let j = 0; j < keys.length; j++) {
            if(keys[j] === separarCaracteres[i]) {
                separarCaracteres.splice(i, 1, values[j])
                dataEncriptada = separarCaracteres.join('')
            }
        }
    }

    return dataEncriptada
}

function desencriptar(texto) {
    let dataDesencriptada = ''

    for(let i = 0; i < values.length; i++) {
        if(texto.includes(values[i])) {
            let regex = new RegExp(values[i], "g");
            texto = texto.replace(regex, keys[i]);
        }
    }

    return dataDesencriptada = texto
}

let input = document.querySelector('.field-text textarea')
let output = document.querySelector('.field-answer #answer')
let copy = document.querySelector('#answer')

let encriptarBtn = document.querySelector('.encriptar')
encriptarBtn.addEventListener('click', () => {
    if(!input?.value) {
        alert('Ingresa una frase')
    } else {
        output.textContent = encriptar(lowerCase(input?.value))
    }
})

let desencriptarBtn = document.querySelector('.desencriptar')
desencriptarBtn.addEventListener('click', () => {
    if(!input?.value) {
        alert('Ingresa una frase encriptada')
    } else {
        output.textContent = desencriptar(input?.value)
    }
})

let copyBtn = document.querySelector('.copy')
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(copy.textContent)
        alert('Texto copiado al portapapeles')
    } catch (err) {
        alert('Error al copiar al portapapeles')
        console.error('Error al copiar al portapapeles:', err)
    }
})

function elementoNotificacion() {
    let div = document.createElement('div')
    div.append()
}