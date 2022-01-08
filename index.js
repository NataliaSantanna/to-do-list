var toDolist = []
var inputToDo = document.getElementById('inputToDo')
var pegarDiv = document.getElementById('Mostrar')



function botaoInserir(){
    toDolist.push(inputToDo.value)
    console.log(toDolist)

    //pegarDiv.innerHTML+="<li> Estou aqui</li>"
    for(x in toDolist){
        console.log(x)
        pegarDiv.innerHTML+="<li>"+ toDolist[x] + "</li>"
    }

    toDolist = []

}

