import { getAuth } from "@clerk/express";

const auth = (req, res, next) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: `Unauthorized access: ${error.message}`,
    });
  }
};

export default auth;
