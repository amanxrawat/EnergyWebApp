
  import jwt from "jsonwebtoken";

  export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId; // Attach user ID to request object
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
  