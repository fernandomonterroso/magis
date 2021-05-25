export class Producto {
    constructor(
    public _id: string,
    public codigo: string,
    public nombre: string,
    public precio: number,
    public stock: number,
    public stockOrigin: number,
    public descripcion: string,
    public imagen: string,
    public fehaIng: string,
    public categoria: string,
    public estado: string, //1 ACTIVO 2 BAJA
    ){}
}
