interface IList {
    // list: Array<any>
}

class List implements IList{
    constructor(protected list: Array<any>){}

    public clear(): Array<string>{
        this.list = []

        return this.list
    }

    public isEmpty(): boolean{
        return this.list.length ? false : true
    }

    public size(): number{
        return this.list.length
    }
}

class Pilha extends List{
    constructor(startList: Array<string>){
        super(startList)
    }

    public push(newElement: string): Array<string>{
        
        const newList = [...this.list, newElement];
        console.log("Adicionado novo elemento:", newElement)

        return this.list = newList
    }

    public pop(): Array<string>{
        const newList = this.list.slice(0, this.list.length - 1)
        const elementRemove = this.list[this.list.length-1]

        console.log("Removido o elemento:", elementRemove)

        return this.list = newList
    }

    public peek(): string{
        const topElement = this.list[this.list.length-1]

        return topElement
    }
}

//---------Pilha----------------------------------------------------------------
console.log("----Criando Pilha e adicionando novo elemento na pilha----")
const pilha = new Pilha(['joao', 'john', 'junior'])
console.log("Criada a pilha:", pilha)

pilha.push("lacerda")
console.log("Pilha atualizada:", pilha)
console.log("------------------------------------------------")

console.log("----Removendo o elemento do topo da pilha----")
pilha.pop()
console.log("Pilha atualizada:", pilha)
console.log("------------------------------------------------")

console.log("----Busca o elemento no topo da pilha----")
const topElement = pilha.peek()
console.log("Pilha atualizada:", topElement)
console.log("------------------------------------------------")

console.log("----Limpando a pilha----")
const pilhaIsEmpty = pilha.clear()
console.log("Pilha atualizada:", pilhaIsEmpty)
console.log("------------------------------------------------")

console.log("----Retorna verdadeiro se a pilha estiver vazia----")
const pilhaEmpty = pilha.isEmpty()
console.log(pilhaEmpty)
console.log("------------------------------------------------")

console.log("----Retorna o tamanho da pilha----")
const pilhasize = pilha.size()
console.log(pilhasize)
console.log("------------------------------------------------")


//---------Fila----------------------------------------------------------------

class Fila extends List{
    constructor(startFila?: Array<string>){
        super(startFila || [])
    }

    public push(newElement: string): Array<string>{
        const newFila = [...this.list, newElement]
        console.log("Adicionado novo elemento:", newElement)

        return this.list = newFila
    }

    public pop(): Array<string>{
        const newFila = this.list.slice(1, this.list.length)
        const elementRemove = this.list[0]
        console.log("Removido o elemento:", elementRemove)

        return this.list = newFila
    }

    public peek(): string{
        return this.list[0]
    }
}

console.log("----Criando Fila e adicionando novo elemento na pilha----")
const fila = new Fila(['joao', 'john', 'junior'])
console.log("Criada a fila:", fila)

fila.push("lacerda")
console.log("Fila atualizada:", fila)
console.log("------------------------------------------------")

console.log("----Removendo o elemento do início da fila----")
fila.pop()
console.log("Fila atualizada:", fila)
console.log("------------------------------------------------")

console.log("----Busca o elemento do início da fila----")
const startElement = fila.peek()
console.log("Fila atualizada:", startElement)
console.log("------------------------------------------------")

console.log("----Limpando a fila----")
const filaIsEmpty = fila.clear()
console.log("Pilha atualizada:", filaIsEmpty)
console.log("------------------------------------------------")

console.log("----Retorna verdadeiro se a fila estiver vazia----")
const filaEmpty = fila.isEmpty()
console.log(filaEmpty)
console.log("------------------------------------------------")

console.log("----Retorna o tamanho da fila----")
const filasize = fila.size()
console.log(filasize)
console.log("------------------------------------------------")
