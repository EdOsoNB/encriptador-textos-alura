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
        elementoNotificacion('Ingresa una frase', '#c02c20')
    } else {
        output.textContent = encriptar(lowerCase(input?.value))
    }
})

let desencriptarBtn = document.querySelector('.desencriptar')
desencriptarBtn.addEventListener('click', () => {
    if(!input?.value) {
        elementoNotificacion('Ingresa una frase encriptada', '#c02c20')
    } else {
        output.textContent = desencriptar(input?.value)
    }
})

let copyBtn = document.querySelector('.copy')
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(copy.textContent)
        elementoNotificacion('Texto copiado al portapapeles', '#25857d')
    } catch (err) {
        elementoNotificacion('Error al copiar al portapapeles', '#c02c20')
        console.error('Error al copiar al portapapeles:', err)
    }
})

function elementoNotificacion(mensaje, bgNotification) {
    let body = document.querySelector('body')
    let div = document.createElement('div')
    div.style.background = bgNotification
    div.style.color = 'white'
    div.style.width = '300px'
    div.style.textAlign = 'center'
    div.style.padding = '20px'
    div.style.borderRadius = '5px'
    div.style.position = 'absolute'
    div.style.top = '75px'
    div.style.right = '150px'
    div.textContent = mensaje
    body.append(div)
    setTimeout(() => {
        div.remove()
    }, 1500);
    console.log(mensaje)
}