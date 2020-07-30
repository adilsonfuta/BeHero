import axios from 'axios';

const Api=axios.create({ 
     baseURL:'http://localhost:3333',
    })

export default Api;

/*

import React from 'react'
import PropTypes from 'prop-types'

function api(props) {
    return (
        <div>
            
        </div>
    )
}

api.propTypes = {

}

export default api

*/