import express from "express";
import multer from "multer";
const router = express.Router();
import restaurantController from "./controllers/restaurant.controller";
// import memberController from "./controllers/member.controller";

// router.post("/login", memberController.login);
// router.post("/signup", memberController.signup);

// export default router;

const upload = multer({ dest: "uploads/" });

// SIGNUP ROUTE — Multer middleware qo‘shiladi shu yerda:
router.post(
  "/admin/signup",
  upload.single("memberImage"),
  restaurantController.processSignup
);

// LOGIN ROUTE
router.post("/admin/login", restaurantController.processLogin);

export default router;
