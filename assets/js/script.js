const elements = {
    inputInsertText: document.getElementById('inputInsertText'),
    buttonEncrypt: document.getElementsByClassName('buttonEncrypt'),
    buttonDecrypt: document.getElementsByClassName('buttonDecrypt'),
    paragraph: document.createElement("p"),
    containers: {
        containerTop: document.getElementById('containerTop'),
        containerBottom: document.getElementById('containerBottom')
    }
} 

const appVariables = {
    resultDecoded: '',
}

function onEncrypt() {
    const encryptedText = String(toEncrypt(elements.inputInsertText.value))
    appVariables.resultDecoded = encryptedText

    const encryptedParagraph = elements.paragraph
    encryptedParagraph.textContent = encryptedText
 
    elements.containers.containerBottom.appendChild(encryptedParagraph)
}

function onDecrypt() {
    const encryptedText = String(toDecrypt(elements.inputInsertText.value))
    appVariables.resultDecoded = encryptedText

    const decryptedParagraph = elements.paragraph
    decryptedParagraph.textContent = encryptedText
 
    elements.containers.containerBottom.appendChild(decryptedParagraph)
}

function toEncrypt(textEncrypted) {
    let codersForEncrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textEncrypted = textEncrypted.toLowerCase()

    for (let i = 0; i < codersForEncrypt.length; i++) {
        if (textEncrypted.includes(codersForEncrypt[i][0])) {
            textEncrypted = textEncrypted.replaceAll(codersForEncrypt[i][0], codersForEncrypt[i][1])
        }
    }
    return textEncrypted
}   

function toDecrypt(textDecrypted) {
    let codersForDecrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textDecrypted = textDecrypted.toLowerCase()

    for (let i = 0; i < codersForDecrypt.length; i++) {
        if (textDecrypted.includes(codersForDecrypt[i][1])) {
            textDecrypted = textDecrypted.replaceAll(codersForDecrypt[i][1], codersForDecrypt[i][0])
        }
    }
    return textDecrypted
}