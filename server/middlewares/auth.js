import jws from 'jsonwebtoken'

const  auth  = (req, res , next) => {
    try{
        const token =req.header.authorization.split('')[1]

        let decodeData =jwt.verify(token, process.env.JWT_SECRET)
        req.userId =decodeData?.id

        next()
    }catch (error) {
        console.log(error)
    }

    }

export default auth;
