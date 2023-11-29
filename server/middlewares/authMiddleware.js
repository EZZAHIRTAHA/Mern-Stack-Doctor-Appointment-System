const jwt = require('jsonwebtoken');




const authMiddleware = (req, res, next) => {
    try {
      // Get the token from the header
      const token = req.headers.authorization.split(' ')[1];
  
      // Check if the token is valid
      jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
        if(err){
          res.status(401).json({ 
            message: 'Not Authorized',
            success: false 
        });
        }
        else {
            req.body.userId = decoded.id;
            next();
        }
      });
       
    } catch (error) {
      res.status(401).json({ 
        message: 'Not Authorized',
        success: false 
    });
    }
  }
  

// const authMiddleware = (req, res, next) => {
//   try {
//     // Get the token from the header
//     const token = req.headers.authorization.split(' ')[1];

//     // Check if the token is valid
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // If the token is valid, extract the user payload from the token
//     req.user = decoded;

//     // Proceed to the next middleware
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Not Authorized' });
//   }
// }

module.exports = authMiddleware;