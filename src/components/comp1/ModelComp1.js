class MoldelComp1 {
    //en el constructor puedo cambiar de nombre a los parametros que me vienen
    constructor(
        identifier,
        title,
        price,
        category,
        description,
        image
    )
    // en this. aca son las variables que voy a usar en el store, puedo ponerle
    //diferente nombre que las del constructor
    {
        this.code = identifier
        this.title = title
        this.price = price
        this.category = category
        this.description= description
        this.image = image
    }
//estas son los parametros reales que vienen de la api siempre tienen que ser iguales a los que trae la api
static fromJson({id,title,price,category,description,image}){
    return new MoldelComp1(
        id,
        title,
        price,
        category,
        description,
        image
    )
}
}
export default MoldelComp1