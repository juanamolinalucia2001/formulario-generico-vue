class Model2 {
    constructor(
      categories
        
    )
    {
        this.categories=categories
    }
  

static fromJson(categories){
    return new Model2(
     categories
        
    )
}
}
export default Model2