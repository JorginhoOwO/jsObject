
    class Animal {
        constructor(nome) {
        this.nome = nome;
        }
        fazerBarulho() {
        console.log("Barulho de animal");
        }
    }
    
    class Cachorro extends Animal {
        fazerBarulho() {
        console.log("Au au!");
        }
    }
    
    class Gato extends Animal {
        fazerBarulho() {
        console.log("Miau!");
        }
    }
    
    const animalGenerico = new Animal("Tigre");
    const cachorro = new Cachorro("cleiton");
    const gato = new Gato("Mimi");
    
    animalGenerico.fazerBarulho();
    cachorro.fazerBarulho();
    gato.fazerBarulho();