import axios from 'axios'
import Model2 from './Model2'

class service {
    listCategories = () =>
    axios
    .get('https://fakestoreapi.com/products/categories')
    .then(({data})=> data.map(p => {
        return Model2.fromJson(p)
    }));
}

export default service;