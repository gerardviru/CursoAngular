export class DestinoViaje {
    [x: string]: any;
    private selected: boolean = false;
    public servicios: string[];
    constructor (public nombre:string , public u:string)
    {
        this.servicios = ['Piscina', 'Desayuno'];
    }
    isSelected():boolean {
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected=s;
    }
}