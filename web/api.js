import axios from 'axios'

export default {
    getData: () =>
        axios({
            'method': 'GET',
            'url': 'http://localhost:3050/members',
            'headers': {
                'content-type': 'application/json',

            }
        })
}
