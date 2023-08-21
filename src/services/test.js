let jwt = require('jsonwebtoken');
const createToken =()=>{
    let payload = {
        name: 'Khanh',
        age: 22
    }
    let key = 'khanhham123'
    
    let token = jwt.sign(payload,key);
    console.log(token);
    return  token
}

module.exports= {
    createToken
}
