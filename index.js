

//clase mãe (abstração)
class persnonagem{
constructor(nome){
    this.nome=nome;

}

atacar(){
    console.log('${this.nome}esta atacando.');
 }
} 
// classe filha (herança)
class guerreiro extends persnonagem{
    atacar(){
    console.log(`${this.nome}ataca com espada!`);
 }
}

class mago extends persnonagem {
    atacar(){
        console.log(`${this.nome} lança um feitoço!`);
    }      
} 
class ninja extends persnonagem {
    atacar(){
        console.log(`${this.nome} lança uma shuriken!`);
    }      
} 


// aqui abaixo, você cria outra classe filha
// dica: pode ser arqueiro,ninja,etc.

// polimorfismo 
const persnonagens=[
    new guerreiro("arthur"),
    new mago ("merlin"),
    new ninja ("genji"),
];
// adicione o novo personagem criado aqui
persnonagens.forEach(p => p.atacar());
    


