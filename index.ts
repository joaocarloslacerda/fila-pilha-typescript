interface IList {
    // list: Array<any>
}

class List implements IList{
    constructor(protected list: Array<any>){}
}

class Pilha extends List{
    constructor(startList: Array<string>){
        super([startList])
    }
}

class Fila extends List{
    constructor(startFila: Array<string>){
        super([startFila])
    }
}
