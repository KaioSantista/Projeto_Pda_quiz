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

function resposta() {
  var respostaUsuario = prompt('Escolha a alternativa (A, B, C ou D):');
  const respostaCorreta = respostas[indice];
  
  if (respostaUsuario == respostaCorreta.toUpperCase()) {
      alert('Acertou!');
      indice++;
      loop();
  }else{
      alert('Errou')
      //location.reload()
      indice = 0
      loop();
  }
}

document.addEventListener("DOMContentLoaded",loop)

function dado() {
    document.getElementById('content').innerHTML = ' '

    const questionsDiv = document.createElement('div');
    questionsDiv.className = 'questions';

    const questH1 = document.createElement('h1');
    questH1.id = 'quest';
    questH1.textContent = pergunta[indice].Questao;

    questionsDiv.appendChild(questH1);

    const answerContentDiv = document.createElement('div');
    answerContentDiv.id = 'answerContent';

    const firstQuestDiv = document.createElement('div');
    firstQuestDiv.className = 'firstQuest';

    const answerH2_1 = document.createElement('h2');
    answerH2_1.className = 'answer';
    answerH2_1.textContent = pergunta[indice].Alternativas[0].Alternativa;

    const answerH2_2 = document.createElement('h2');
    answerH2_2.className = 'answer';
    answerH2_2.textContent = pergunta[indice].Alternativas[1].Alternativa;

    firstQuestDiv.appendChild(answerH2_1);
    firstQuestDiv.appendChild(answerH2_2);

    const secondQuestDiv = document.createElement('div');
    secondQuestDiv.className = 'secondQuest';

    const answerH2_3 = document.createElement('h2');
    answerH2_3.className = 'answer';
    answerH2_3.textContent = pergunta[indice].Alternativas[2].Alternativa;

    const answerH2_4 = document.createElement('h2');
    answerH2_4.className = 'answer';
    answerH2_4.textContent = pergunta[indice].Alternativas[3].Alternativa;

    secondQuestDiv.appendChild(answerH2_3);
    secondQuestDiv.appendChild(answerH2_4);

    answerContentDiv.appendChild(firstQuestDiv);
    answerContentDiv.appendChild(secondQuestDiv);

    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nextBtn';
    nextBtn.textContent = 'NEXT';
    nextBtn.onclick = resposta;

    btnDiv.appendChild(nextBtn);

    document.getElementById('content').appendChild(questionsDiv);
    document.getElementById('content').appendChild(answerContentDiv);
    document.getElementById('content').appendChild(btnDiv);
}

