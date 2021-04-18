import axios from 'axios';
import authHeader from './auth-header';


class UserService {
    getAdmin(){
        return axios.get('/auth/status', { headers: authHeader() });
    }

    logOut(){
        return axios.post('/auth/logout', { headers: authHeader() })
    }

    productList(){
        return axios.get('/products')
    }
    addProductList(productName, productPrice, productDesc, productWeight){
        return axios.post('/post_products', {"name":productName,"price":productPrice,"description":productDesc,"weight":productWeight} )

    }
}

export default new UserService();