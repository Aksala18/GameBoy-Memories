const output = document.getElementById('output');
    const inputLine = document.getElementById('input-line');
    const input = document.getElementById('input');

    let currentChapter = 1;
    let currentLineIndex = 0;
    const linesPerPage = 2;

    const chapters = {
     1: {
        text: [
        "Dia 1: Jantar de curso e beijo inesperado",
        "",
        "Quinta-feira, jantar de curso.",
        "Um amigo queria apresentar-te a uma amiga minha.",
        "Mas foi comigo que te deste melhor.",
        "",
        "No fim da noite, roubaste-me um beijo.",
        "Nem sequer te pedi o Instagram...",
        "Estava tão surpreendido que só consegui pensar: “O que é que aconteceu aqui?”",
        ],
        inputNeeded: true,
        nextChapter: 2
    },

      2: {
        text: [
          "Dia 3: Mensagem enviada",
          "",
          "Estava na viagem de regresso a casa com os meus pais.",
          "Era sábado à noite",
          "Devia mandar-te mensagem? E se não responderes?",
          "",
          "O medo e a esperança brigavam na minha cabeça.",
          "Finalmente, enviei.",
          "Coração a mil.",
          "",
        ],
        inputNeeded: true,
        nextChapter: 3
      },
      3: {
        text: [
          "Dia 4: Primeiro encontro na biblioteca",
          "",
          "Lá estávamos nós, rodeados de livros e cadernos.",
          "Mas a atenção não era para o estudo, era para ti.",
          "",
          "O meu nervosismo era tanto que mal me lembro do que falámos.",
          "Só sei que queria que aquele momento durasse para sempre.",
        ],
        inputNeeded: true,
        nextChapter: 4
      },
      4: {
        text: [
          "Dia 10: Primeiro ataque de ansiedade",
          "",
          "Foi a primeira vez que te vi assim, presa num ataque de ansiedade.",
          "Estavas paralisada nos bancos lá fora, só querias fugir para casa.",
          "",
          "Eu não sabia bem o que fazer, mas segurei-te firme e levei-te para casa.",
          "Queria que soubesses que não estás sozinha.",
          "",
        ],
        inputNeeded: true,
        nextChapter: 5
      },
      5: {
        text: [
          "Dia 15: 'Estamos a apaixonar-nos'",
          "",
          "Deitado no teu peito, senti-te dizer aquelas palavras.",
          "“Sabes que nos estamos a apaixonar.”",
          "Quis fugir a sete pés",
          "",
          "Mas fiquei.",
          "Porque mesmo com medo, queria sentir tudo contigo.",
        ],
        inputNeeded: true,
        nextChapter: 6
      },
      6: {
        text: [
          "Dia 27: Diretas na biblioteca",
          "",
          "Estudar até tarde, mas com tantas pausas para ti.",
          "Beijinhos roubados entre as páginas dos livros.",
          "",
          "Carinhos discretos, sorrisos cúmplices.",
          "Aqueles momentos pequenos, mas perfeitos.",
          "",
        ],
        inputNeeded: true,
        nextChapter: 7
      },
      7: {
        text: [
          "Dia 41: Primeiro encontro oficial",
          "",
          "O nosso primeiro encontro “oficial”.",
          "Pizza, luzes fluorescentes, o meu coração a bater tão rápido que quase dava para ouvir.",
          "",
          "Estava tão nervoso que nem sei de que falámos.",
          "Só sei que quis ficar ali contigo para sempre.",
          "",
        ],
        inputNeeded: true,
        nextChapter: 8
      },
      8: {
        text: [
          
          "Dia 44:  Concerto + conhecer a mãe",
          "",
          "Fomos ao concerto de uns amigos.",
          "Ficaste radiante, e eu também adorei.",
          "",
          "Na manhã seguinte, acordei nervoso - vou conhecer a mãe dela.",
          "O coração disparava, não consegui dormir direito.",
          "",
        ],
        inputNeeded: true,
        nextChapter: 9
      },
    9: {
        text: [
            "Dia 50: Pedido de namoro",
            "",
            "Já não conseguia esperar mais.",
            "Queria poder chamar-te de minha namorada.",
            "",
            "Planeei tudo à última da hora, bouquet na mão —",
            "um girassol rodeado de azul, como o céu de Van Gogh.",
            "",
            "Veio-me o período. Cólicas fortes.",
            "Os meus planos foram por água abaixo.",
            "",
            "Mas pedi-te na mesma.",
            "Montámos juntos os girassóis de LEGO no teu quarto.",
            "Gostei tanto.",            
        ],
        inputNeeded: true,
        nextChapter: 10
      },
      10: {
        text: [
            "Dia 76: Ano Novo",
            "",
            "Fomos ao Porto, celebrar com a tua prima.",
            "",
            "Tenho medo de fogo de artifício.",
            "Mas nunca vi um espetáculo tão bonito.",
            "",
            "Só o teu sorriso o superava.",           
        ],
        inputNeeded: true,
        nextChapter: 11
      },
      11: {
        text: [
            "Dia 108: Ataque de pânico + disforia",
            "",
            "Depois de um dos nossos momentos juntos, algo não estava bem.",
            "Medo, dor, disforia, sangue, um ataque de pânico que não conseguia controlar.",
            "",
            "Foi a primeira vez que viste o quão mal eu podia estar.",
            "E foste tu que me abraçaste a noite toda,",
            "até eu parar de tremer.",
        ],
        inputNeeded: true,
        nextChapter: 12
      },
      12: {
        text: [
            "Dia 192: Discussão sobre apelidos dos filhos",
            "",
            "Falámos dos nossos futuros filhos.",
            "Tu queres que tenham o último nome Beirão.",
            "Eu só quero que tenham o mesmo último nome que eu.",
            "",
            "Não me importo de adicionar um último nome.",
            "Foi uma discussão, mas também um sonho partilhado.",
        ],
        inputNeeded: true,
        nextChapter: 13
      },
      13: {
        text: [
            "Dia 206: Ida ao Porto às 4h da manhã",
            "",
            "Quando disseste que querias ir ao Porto às 4h da manhã,",
            "com os comboios em greve,",
            "pensei que fosse loucura.",
            "",
            "Mas juntos conseguimos.",
            "Aquele dia mostrou-me",
            "que contigo nada é impossível.",
            "",
            "",
            "",
            "A história continua...",
        ],
        inputNeeded: false
      }
    };

    let booted = false;

    // Função para animação loading do booting
    function bootAnimation(callback) {
        let baseText = "> Booting MEMORY.EXE";
        let dots = "";
        let count = 0;
        output.innerText = baseText;
        const interval = setInterval(() => {
          dots += ".";
          if (dots.length > 3) dots = "";
          output.innerText = baseText + dots + "\n> Isaac e Lara: O Início";
          count++;
          if (count >= 10) { // 5 segundos
            clearInterval(interval);
            setTimeout(callback, 500);
          }
        }, 500);
      }
      

    // Mostra o próximo bloco de linhas do capítulo
    function showNextBlock() {
        const chapter = chapters[currentChapter];
        if (!chapter) return;
    
        if (currentLineIndex >= chapter.text.length) return;
    
        let nextLines = [];
        while (nextLines.length < linesPerPage && currentLineIndex < chapter.text.length) {
          const line = chapter.text[currentLineIndex];
          currentLineIndex++;
          nextLines.push(line);
        }
    
        output.innerText = nextLines.join("\n");
    }    
      
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = input.value.trim().toLowerCase();
          input.value = '';
      
          const chapter = chapters[currentChapter];
          if (!chapter) return;
      
          // Se ainda há linhas para mostrar, mostra próximo bloco e limpa o output
          if (currentLineIndex < chapter.text.length) {
            showNextBlock();
            return;
          }
      
          // Se já terminou o capítulo e o comando é 'continuar'
          if (val === 'continuar' && chapter.nextChapter) {
            startChapter(chapter.nextChapter);
            return;
          }
      
          // Se terminou o capítulo mas ainda não avançou
          if (currentLineIndex >= chapter.text.length) {
            output.innerText = "Escreve 'continuar' para avançar para o próximo capítulo.";
            return;
          }
      
          // Comando inválido
          output.innerText = `> Comando inválido: ${val}`;
          input.focus();
        }
      });
         
             

      function startChapter(num) {
        currentChapter = num;
        currentLineIndex = 0;
        input.value = '';
        
        if (num === 1 && !booted) {
          inputLine.classList.add('hidden'); // esconder input durante boot
          bootAnimation(() => {
            booted = true;
            showNextBlock();
            inputLine.classList.remove('hidden');
            input.focus();
          });
        } else {
          showNextBlock();
          inputLine.classList.remove('hidden');
          input.focus();
        }
      }

    // Começa o jogo
    startChapter(currentChapter);
