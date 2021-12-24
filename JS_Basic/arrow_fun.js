function Person(nickname,address) {
    this.nickname = nickname;
    this.address = address;
    this.getinfo = function () {
        return () => {
            document.write(this.constructor.name+'<br>');
            document.write(`Hi I am ${this.nickname} and I live in ${this.address} .`);
        }
    }
}


    let p = new Person('Ko Than','Bago');
    let printinfo = p.getinfo();
    printinfo();
