interface Iperson {
    name: string
    surname: string
    yersOld: number
    phone: string
}

class List implements Iperson{
    name: string;
    surname: string;
    yersOld: number;
    phone: string;
    private listPerson: Iperson[] = [];

    constructor(name: string, surname: string, yersOld: number, phone: string){
        this.name = name;
        this.surname = surname;
        this.yersOld = yersOld;
        this.phone = phone;
    }

}

let employee = new List(["joao"], ["lacerda"], [26], ["4564565465"]);

// console.log(employee.item)