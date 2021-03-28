import {createAuthProvider} from 'react-token-auth';


export const [useAuth, authFetch, login, logout] =
    createAuthProvider({
        accessTokenKey: 'auth_token',
        onUpdateToken: (token) => fetch('/auth/logout', {
            method: 'POST',
            body: token.auth_token
        })
        .then(r => r.json())
    });

