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

    public push(newElement: string): Array<string>{
        
        const newList = [...this.list, newElement];

        return this.list = newList
    }
}

class Fila extends List{
    constructor(startFila: Array<string>){
        super([startFila])
    }
}
