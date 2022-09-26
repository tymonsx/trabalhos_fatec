function getTag(id) {
    return document.getElementById(id)
}

function eventHandlerClass(id) {
    switch (id) {
        case 1:
            getTag('classname').innerHTML = "Bárbaro"
            getTag('lifedice').innerHTML = "Dados de vida: 1d12 por nível de bárbaro"
            getTag('classdescription').innerHTML = "Descrição: Esses bárbaros, diferentes da forma que conseguem, são definidos por sua fúria: desenfreada, inextinguível e irracional fúria. Mais que uma mera emoção, sua raiva é a ferocidade de um predador acuado, o assalto implacável de uma tempestade, a turbulência agitada do mar. Para alguns, suas fúrias emerge da comunhão com ferozes espíritos animais. Outras provem de um reservatório turvo de raiva de um mundo cheio de dor. Para cada bárbaro, a fúria é um poder que preenche não apenas o frenesi de batalha, mas também reflexos, resiliência e proezas de força incríveis."
            getTag('classImage').src = "./assets/img/Classes/barbaro.png"
            break;

        case 2:
            getTag('classname').innerHTML = "Bardo"
            getTag('lifedice').innerHTML = "Dados de vida: 1d8 por nível de bardo"
            getTag('classdescription').innerHTML = "Descrição: Não importa se um escolar, escaldo ou malandro, o bardo tece sua magia através de palavras e música para inspirar aliados, desmoralizar oponentes, manipular mentes, criar ilusões e, até mesmo, curar ferimentos."
            getTag('classImage').src = "./assets/img/Classes/bardo.png"
            break;

        case 3:
            getTag('classname').innerHTML = "Bruxo"
            getTag('lifedice').innerHTML = "Dados de vida: 1d8 por nível de bruxo"
            getTag('classdescription').innerHTML = "Descrição: Os bruxos são desbravadores do conhecimento que existe escondido no tecido do multiverso. Através de pactos feitos com seres misteriosos detentores de poder sobrenatural, os bruxos desbloqueiam efeitos mágicos tão sutis quanto espetaculares. Extraindo o conhecimento antigo de seres como nobres fadas, demônios, diabos, bruxas e entidades alienígenas do Reino Distante, os bruxos remontam segredos arcanos para aprimorar seus próprios poderes."
            getTag('classImage').src = "./assets/img/Classes/bruxo.png"
            break;

        case 4:
            getTag('classname').innerHTML = "Clérigo"
            getTag('lifedice').innerHTML = "Dados de vida: 1d8 por nível de clérigo"
            getTag('classdescription').innerHTML = "Descrição: Clérigos são intermediadores entre o mundo mortal e o distante plano dos deuses. Tão variados quanto os deuses que servem, clérigos se esforçam para ser a própria mão de seus deuses. Não é apenas um sacerdote comum, mas alguém investido de poder divino."
            getTag('classImage').src = "./assets/img/Classes/clerigo.png"
            break;

        case 5:
            getTag('classname').innerHTML = "Druida"
            getTag('lifedice').innerHTML = "Dados de vida: 1d8 por nível de druida"
            getTag('classdescription').innerHTML = "Descrição: Quer seja convocando as forças elementais da natureza, ou emulando as criaturas do mundo animal, os druidas são encarnações da resistência, astúcia e fúria da natureza. Eles não se consideram donos da natureza. Ao invés disso, eles se veem como extensões da vontade indomável da natureza."
            getTag('classImage').src = "./assets/img/Classes/druida.png"
            break;

        case 6:
            getTag('classname').innerHTML = "Feiticeiro"
            getTag('lifedice').innerHTML = "Dados de vida: 1d6 por nível de feiticeiro"
            getTag('classdescription').innerHTML = "Descrição: Os feiticeiros carregam um patrimônio mágico conferido a eles por uma linhagem exótica, alguma influência de outro mundo ou exposição a forças cósmicas desconhecidas. Não é possível estudar feitiçaria como se aprende um idioma, assim como não se aprende a viver uma vida lendária. Ninguém escolhe a feitiçaria: os poderes escolhem o feiticeiro."
            getTag('classImage').src = "./assets/img/Classes/feiticeiro.png"
            break;

        case 7:
            getTag('classname').innerHTML = "Guerreiro"
            getTag('lifedice').innerHTML = "Dados de vida: 1d10 por nível de guerreiro"
            getTag('classdescription').innerHTML = "Descrição: Todos guerreiros são heróis, talvez a mais diversificada classe de personagens nos mundos de DUNGEONS & DRAGONS. Cavaleiros em missões, lordes conquistadores, campeões reais, infantaria de elite, mercenários rígidos e bandidos reis, como guerreiros, eles compartilham de uma maestria com armas e armaduras sem precedentes, bem como um vasto conhecimento e habilidades em combate. E eles estão bem familiarizados com a morte, seja simplesmente conhecendo-a ou desafiando-a cara a cara."
            getTag('classImage').src = "./assets/img/Classes/guerreiro.png"
            break;

        case 8:
            getTag('classname').innerHTML = "Ladino"
            getTag('lifedice').innerHTML = "Dados de vida: 1d8 por nível de ladino"
            getTag('classdescription').innerHTML = "Descrição: Ladinos contam com sua perícia, furtividade e as vulnerabilidades de seus inimigos para obter vantagem em qualquer situação. Eles possuem uma habilidade especial para encontrar a solução para praticamente qualquer problema, demonstrando desenvoltura e versatilidade, a chave de qualquer grupo aventureiro de sucesso."
            getTag('classImage').src = "./assets/img/Classes/ladino.png"
            break;

        case 9:
            getTag('classname').innerHTML = "Mago"
            getTag('lifedice').innerHTML = "Dados de vida: 1d6 por nível de mago"
            getTag('classdescription').innerHTML = "Descrição: Os magos são usuários de magia soberanos, unidos e definidos como uma classe pelas magias que conjuram. Usufruindo de uma trama sutil de magia que permeia o cosmos, os magos conjuram magias explosivas de fogo, arcos de relâmpagos, enganos sutis e controle de mentes de força bruta. Sua magia invoca monstros de outros planos de existência, vislumbra o futuro ou transforma inimigos mortos em zumbis. Suas magias mais poderosas podem transformar uma substância em outra, evocar meteoros que caem do céu ou abrir portais para outros mundos."
            getTag('classImage').src = "./assets/img/Classes/mago.png"
            break;

        case 10:
            getTag('classname').innerHTML = "Monge"
            getTag('lifedice').innerHTML = "Dados de vida: 1d8 por nível de monge"
            getTag('classdescription').innerHTML = "Descrição: Qualquer que seja suas disciplinas, os monges partilha de sua habilidade de aproveitar magicamente da energia que flui em seus corpos. Se canalizada como um exibição impressionante de maestria do combate, ou como um foco mais sutil de habilidade defensiva e velocidade, essa energia infunde tudo que um monge faz."
            getTag('classImage').src = "./assets/img/Classes/monge.png"
            break;

        case 11:
            getTag('classname').innerHTML = "Paladino"
            getTag('lifedice').innerHTML = "Dados de vida: 1d10 por nível de paladino"
            getTag('classdescription').innerHTML = "Descrição: Seja lá quais forem suas origens e suas missões, paladinos são unidos pelos seus juramentos de se imporem contra as forças do mal. Quer seja jurado ante o altar de um deus com um sacerdote como testemunha, quer seja em um clareira sagrada diante dos espíritos da natureza e seres feéricos, ou em um momento de desespero e aflição com os mortos como únicas testemunhas, o juramento de um paladino é um laço poderoso. Ele é uma fonte de poder que transforma um guerreiro devotado em um campeão abençoado."
            getTag('classImage').src = "./assets/img/Classes/paladino.png"
            break;
        case 12:
            getTag('classname').innerHTML = "Patrulheiro"
            getTag('lifedice').innerHTML = "Dados de vida: 1d10 por nível de patrulheiro"
            getTag('classdescription').innerHTML = "Descrição: Longe do alvoroço das cidades e vilas, passando das divisas que abrigam a fazendas mais longínquas dos horrores do ermo, entre as árvores densas de florestas sem trilhas e através das vastas planícies vazias, os patrulheiros mantem sua vigília interminável."
            getTag('classImage').src = "./assets/img/Classes/patrulheiro.png"
            break;
    }

}

function eventHandlerRace(id) {
    switch (id) {
        case 1:
            getTag('racename').innerHTML = "Anão"
            getTag('attributes').innerHTML = "Atributos: Constituição +2"
            getTag('racedescription').innerHTML = "Descrição: Reinos ricos de antiga grandeza, salões esculpidos nas raízes das montanhas, o eco de picaretas e martelos nas minas profundas e nas forjas ardentes, um compromisso com o clã e a tradição, e um ódio impetuoso contra goblins e orcs – essas linhas comuns unem todos os anões. "
            getTag('raceImage').src = "./assets/img/Races/anão.png"
            break;

        case 2:
            getTag('racename').innerHTML = "Elfo"
            getTag('attributes').innerHTML = "Atributos: Destreza +2"
            getTag('racedescription').innerHTML = "Descrição: Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele. Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa. Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo."
            getTag('raceImage').src = "./assets/img/Races/elfo.png"
            break;

        case 3:
            getTag('racename').innerHTML = "Halfling"
            getTag('attributes').innerHTML = "Atributos: Destreza +2"
            getTag('racedescription').innerHTML = "Descrição: Os confortos de um lar são os objetivos da maioria dos halflings: um lugar para viver em paz e sossego, longe de monstros saqueadores e embates de exércitos, com um fogo aceso e uma refeição generosa, e também uma bebida fina e boa conversa."
            getTag('raceImage').src = "./assets/img/Races/halfling.png"
            break;

        case 4:
            getTag('racename').innerHTML = "Humano"
            getTag('attributes').innerHTML = "Atributos: Todos os atributos +1"
            getTag('racedescription').innerHTML = "Descrição: Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, chegando mais tarde no cenário mundial e com uma vida curta, se comparados aos anões, elfos e dragões. Talvez seja por causa de suas vidas mais curtas que eles se esforcem para alcançar o máximo que podem nos anos que têm. Ou talvez eles sintam que têm algo a provar às raças mais antigas, e é por esta razão que eles constroem seus poderosos impérios através da conquista e do comércio. O que quer que os motive, os humanos são os inovadores, os realizadores e os pioneiros dos mundos."
            getTag('raceImage').src = "./assets/img/Races/humano.png"
            break;

        case 5:
            getTag('racename').innerHTML = "Draconato"
            getTag('attributes').innerHTML = "Atributos: Força +2, Carisma +1"
            getTag('racedescription').innerHTML = "Descrição: Descendentes de dragões, como seus nomes demonstram, os draconatos andam orgulhosamente pelo mundo que os saúda com um temor incompreensível. Moldados por deuses dracônicos ou pelos próprios dragões, draconatos originalmente nasceram de ovos de dragão como uma raça única, combinando os melhores atributos de dragões e humanos."
            getTag('raceImage').src = "./assets/img/Races/draconato.png"
            break;

        case 6:
            getTag('racename').innerHTML = "Gnomo"
            getTag('attributes').innerHTML = "Atributos: Inteligência +2"
            getTag('racedescription').innerHTML = "Descrição: Um zumbido constante de atividades permeia a vizinhança onde os gnomos formam suas comunidades privadas. Barulhos estrondosos pontuam o zumbido: um tilintar de engrenagens moendo aqui, uma pequena explosão ali, um grito de surpresa ou comemoração e, principalmente, muitas gargalhadas."
            getTag('raceImage').src = "./assets/img/Races/gnomo.png"
            break;

        case 7:
            getTag('racename').innerHTML = "Meio-Elfo"
            getTag('attributes').innerHTML = "Atributos: Carisma +2, <br>2 atributos +1"
            getTag('racedescription').innerHTML = "Descrição: Vagando entre dois mundos mas, na verdade, não pertencendo a nenhum dos dois, meio-elfos combinam o que alguns dizem ser as melhores qualidades dos seus parentes elfos e humanos: a curiosidade, inventividade e ambição humanas temperadas pelos sensos refinados, amor a natureza e gostos artísticos dos elfos."
            getTag('raceImage').src = "./assets/img/Races/meioelfo.png"
            break;

        case 8:
            getTag('racename').innerHTML = "Meio-Orc"
            getTag('attributes').innerHTML = "Atributos: Força +2, Constituição +1"
            getTag('racedescription').innerHTML = "Descrição: Quer estejam unidos sob a liderança de um poderoso bruxo ou estejam lutando por um impasse após anos de conflito, tribos orcs e humanas as vezes formam alianças, unindo forças em uma vasta horda para o pavor das terras civilizadas próximas."
            getTag('raceImage').src = "./assets/img/Races/meioorc.png"
            break;
        case 9:
            getTag('racename').innerHTML = "Tiefling"
            getTag('attributes').innerHTML = "Atributos: Inteligência +1, Carisma +2"
            getTag('racedescription').innerHTML = "Descrição: Ser recebido com olhares e cochichos, sofrer violência e insultos nas ruas, ver a desconfiança e medo em cada olhar: esse é o fardo do tiefling. E para completar tudo, os tieflings sabem que isso é graças ao pacto feito gerações atrás que infundiu a essência de Asmodeus – senhor supremo dos Nove Infernos – em sua linhagem."
            getTag('raceImage').src = "./assets/img/Races/tiefling.png"
            break;
    }
}

function rickrolled(url) {
    alert("Função ainda não desenvolvida, obrigado por acessar o site.")
    window.open(url).focus();
}