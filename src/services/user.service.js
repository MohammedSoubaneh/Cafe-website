import axios from 'axios';
import authHeader from './auth-header';


class UserService {
    getAdmin(){
        return axios.get('/auth/status', { headers: authHeader() });
    }
}

export default new UserService();