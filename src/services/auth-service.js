import axios from 'axios';
import authHeader from './auth-header';

class AuthService {

    login(email, password) {
        return axios
          .post('/auth/login', { email, password })
          .then((response) => {
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }


    logout() {
        return axios
            .post('/auth/logout', { headers: authHeader() })
            .then((response) => {
                localStorage.removeItem('user')
                console.log(response)
            });
    }

    register(email, password) {
        return axios.post('/auth/register', {
            email,
            password,
        });
    }
}

export default new AuthService();