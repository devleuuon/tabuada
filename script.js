function gerar () {
    var tabuada = window.document.getElementById('tabu')
    var select = window.document.getElementById('sele')
    if (tabuada.value.length === 0){
        window.alert('Digite um número!')
    } else {
    let n = Number(tabuada.value)
    let c = 1
    select.innerHTML ='' //serve pra limpar a caixa do select antes do próximo número.

    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} + ${c} = ${n*c}` // .text , texto dentro do select.
        select.appendChild(item) // Com esse comando ele fica visível dentro do select.
        c++
    }
}
}