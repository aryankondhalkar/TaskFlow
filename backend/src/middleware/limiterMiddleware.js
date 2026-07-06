import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  limit: 100,
  message: {
    success: false,
    message: "Too many requests, try again later",
  },
});

export default limiter;
