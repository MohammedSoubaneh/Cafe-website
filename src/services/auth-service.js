import axios from 'axios';

class AuthService {

    login(email, password) {
        return axios
          .post('/auth/login', { email, password })
          .then((response) => {
            if (response.data.auth_token) {
                localStorage.setItem('user', JSON.stringify(response.data.auth_token));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(email, password) {
        return axios.post('/auth/register', {
            email,
            password,
        });
    }
}

export default new AuthService();