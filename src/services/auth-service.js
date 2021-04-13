import axios from 'axios';

class AuthService {

    async login(email, password) {
        const response = await axios.post('/auth/login', {
            email: email,
            password: password
        });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
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