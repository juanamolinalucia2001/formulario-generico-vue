import axios from 'axios'
import ModelComp1 from './ModelComp1'

class compService {
    listProducts = () =>
    axios
    .get('https://fakestoreapi.com/products')
    .then(({data})=> data.map(p => {
        return ModelComp1.fromJson(p)
    }));
}

export default compService;