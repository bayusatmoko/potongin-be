const admin = require("../config/firebase-config")

class LoginController {
    async login(req, res) {
        try {
            const token = req.headers.authorization.split(" ")[1]

            const decodeValue = await admin.auth().verifyIdToken(token, true)
            
            if(decodeValue){
                return res.json({
                    status: false,
                    message: "Successfully logged in",
                    status_code: 200,
                    data: decodeValue
                })
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

module.exports = new LoginController()