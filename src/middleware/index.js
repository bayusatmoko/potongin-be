const admin = require("../config/firebase-config")

class Middleware {
    async decodeToken(req,res,next) {
        try {
            const token = req.headers.authorization.split(" ")[1]

            const decodeValue = await admin.auth().verifyIdToken(token)
            
            if(decodeValue){
                return next();
            }

            return res.json({
                status: false,
                status_code: 401,
                message: "Unauthorized"
            })
        } catch(e) {
            return res.json({
                status: false,
                status_code: 500,
                message: `Internal server error: ${e.message}`
            })
        }
    }
}

module.exports = new Middleware()