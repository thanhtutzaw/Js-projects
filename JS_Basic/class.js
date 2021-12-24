class person{
    constructor(){
        document.write('from constructor...<br>');
    }
    greet(){
        document.write('from method...<br>')
    }
    static sayHeyGoogle(){
        document.write('from static method...<br>')
    }
}
let p = new person();
p.greet();
person.sayHeyGoogle();