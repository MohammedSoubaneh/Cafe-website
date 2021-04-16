import axios from 'axios';
import authHeader from './auth-header';


class UserService {
    getAdmin(){
        return axios.get('/auth/status', { headers: authHeader() });
    }

    logOut(){
        return axios.post('/auth/logout', { headers: authHeader() })
    }
}

export default new UserService();