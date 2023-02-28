function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora <12) {
        window.alert('BOM DIA!')
       img.src = 'manha.png'
       document.body.style.background = '#fee8c9'
    } else if (hora >= 12 && hora <18) {
        window.alert('BOA TARDE!')
        img.src = 'tarde.png'
        document.body.style.background = '#fe8707'
} else  {
    window.alert('BOA NOITE!')
    img.src = 'noite.png'
    document.body.style.background = '#010c2f'
}
}