let pergunta = [
    {

        n:1,
        Questao:"2+2=",
        Alternativas:[
            
              {Alternativa:"A:4"},
              {Alternativa:"B:6"},
              {Alternativa:"C:2"},
              {Alternativa:"D:8"}
            

        ]},
        {
         n:2,
         Questao:"5*3=",
         Alternativas:
            [
              {Alternativa:"A:10"},
              {Alternativa:"B:15"},
              {Alternativa:"C:8"},
              {Alternativa:"D:9"}
            

            ]
        
},{
    n:3,
         Questao:"100/10=",
         Alternativas:
            [
              {Alternativa:"A:50"},
              {Alternativa:"B:1"},
              {Alternativa:"C:10"},
              {Alternativa:"D:80"}
            

            ]
},{
    n:4,
         Questao:"5/5=",
         Alternativas:
            [
              {Alternativa:"A:10"},
              {Alternativa:"B:2"},
              {Alternativa:"C:1"},
              {Alternativa:"D:4"}
            

            ]
}]
let respostas = ["A","B","C","D"]

var indice = 0


function loop (){
    for (;indice < pergunta.length;) {
        dado();  
        console.log(index);
    }
    
    if(indice == pergunta.length){
        alert("Ganhouuuu, sabe muitoooo!!!")
    }
}
document.addEventListener("DOMContentLoaded",loop)

