function getName(){
    console.log(this.nick)
}
getName.call(cin)


const notificacion = {
    text:'hola',
    color: 'red',
    mostrar(){
        console.log(this); //en este caso this se refiere al propio objeto
    }
    cambiarTexto(text){
        this.text = text; //el text que va junto con el text se refiere al 'text' de este mismo objeto el text sin el this se refiere al parámetro de la función
    }
};

notificacion.mostrar();


const object = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
  console.log(object.getMessage()); //en este caso se imprime 'hello world' ya que this se refiere al dueño de la función en ste caso (objeto)



  function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const cat = new Pet('Fluffy');
  console.log(cat.getName()); // What is logged?
  const { getName } = cat;
  console.log(getName())

  function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?
const { getName } = cat;
console.log(getName())




