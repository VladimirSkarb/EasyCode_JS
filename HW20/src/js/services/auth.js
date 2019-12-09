import axios from 'axios';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

const URL = 'https://mlp-demo.herokuapp.com/api/public';

export function login(email, password) {
    axios.post(`${URL}/auth/login`,
        JSON.stringify({email, password}),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            M.toast({html: 'Success!', classes: 'toast-true'});
        })
        .catch((error) => {
            M.toast({html: `${error}`, classes: 'toast-false'});
        })
}
