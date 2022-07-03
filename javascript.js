pedra = false
papel = false
tesoura = false

pedraOpo = false
papelOpo = false
tesouraOpo = false






function select1() {
    if (pedra == true || tesoura == true) {
        window.alert("Você não pode selecionar mais de uma opção")
    } else {
        if (papel == false) {
            var adicionar = document.getElementById("img1")
            adicionar.classList.add("selecionado")
            papel = true
        } else {
            var remover = document.getElementById("img1")
            remover.classList.remove("selecionado")
            papel = false
        }
    }
}

function select2() {
    if (papel == true || tesoura == true) {
        window.alert("Você não pode selecionar mais de uma opção")
    } else {
        if (pedra == false) {
            var adicionar = document.getElementById("img2")
            adicionar.classList.add("selecionado")
            pedra = true
        } else {
            var remover = document.getElementById("img2")
            remover.classList.remove("selecionado")
            pedra = false
        }
    }
}
function select3() {
    if (papel == true || pedra == true) {
        window.alert("Você não pode selecionar mais de uma opção")
    } else {
        if (tesoura == false) {
            var adicionar = document.getElementById("img3")
            adicionar.classList.add("selecionado")
            tesoura = true
        } else {
            var remover = document.getElementById("img3")
            remover.classList.remove("selecionado")
            tesoura = false
        }
    }
}

function start() {
    document.getElementById("startbot").style.display = "none"

    var sorteio = Math.floor(Math.random() * 3)
    if (sorteio == 0) {
        papelOpo = true
    } else if (sorteio == 1) {
        pedraOpo = true
    } else {
        tesouraOpo = true
    }


    // CONFIGURANDO SELEÇÃO DO OPONENTE
    if (papelOpo == true) {
        var selecionadoOpo1 = document.getElementById("img1-opo")
        selecionadoOpo1.classList.add('selecionado-opo')
    } else if (pedraOpo == true) {
        var selecionadoOpo2 = document.getElementById("img2-opo")
        selecionadoOpo2.classList.add('selecionado-opo')
    } else {
        var selecionadoOpo3 = document.getElementById("img3-opo")
        selecionadoOpo3.classList.add('selecionado-opo')
    }


    // CONFIGURANDO EMPATES
    if (papelOpo == true && papel == true) {
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "EMPATE!"

    } else if (pedraOpo == true && pedra == true) {
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "EMPATE!"


    } else if (tesouraOpo == true && tesoura == true) {
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "EMPATE!"
    }



    //CONFIGURANDO O OPONENTE GANHANDO
    if(papelOpo == true && pedra == true){
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "VOCÊ PERDEU!"
    } else if(pedraOpo == true && tesoura == true){
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "VOCÊ PERDEU!"
    } else if(tesouraOpo == true && papel == true){
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "VOCÊ PERDEU!"
    }

    //CONFIGURANDO O JOGADOR GANHANDO

    if(papel == true && pedraOpo == true){
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "VOCÊ GANHOU!"
    } else if(pedra == true && tesouraOpo == true){
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "VOCÊ GANHOU!"
    } else if(tesoura == true && papelOpo == true){
        document.getElementById("result").style.display = "block"
        document.getElementById("txt1").innerHTML = "VOCÊ GANHOU!"
    }


}




//RECOMEÇAR O JOGO

function recomecar() {
    pedra = false
    papel = false
    tesoura = false

    pedraOpo = false
    papelOpo = false
    tesouraOpo = false
    document.getElementById("result").style.display = "none"
    document.getElementById("startbot").style.display ="block"

    var remover = document.getElementById("img1")
    remover.classList.remove("selecionado")
    var remover = document.getElementById("img2")
    remover.classList.remove("selecionado")
    var remover = document.getElementById("img3")
    remover.classList.remove("selecionado")

    var remover = document.getElementById("img1-opo")
    remover.classList.remove("selecionado-opo")
    var remover = document.getElementById("img2-opo")
    remover.classList.remove("selecionado-opo")
    var remover = document.getElementById("img3-opo")
    remover.classList.remove("selecionado-opo")
}
