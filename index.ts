interface Iitems {
    item: string[]
}

class List implements Iitems {
    item: string[]

    // private item = []
    constructor(item: string[]){
        this.item = item;
    }
}