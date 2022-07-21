export class DestinoViaje {

    private selected: boolean;
    public servicios: string[];
    public id: any;
        

    constructor(public nombre:string, public u:string) { 
        this.servicios = ['Piscina', 'Desayuno'];
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s:boolean ) {
        this.selected = s;
    }
}