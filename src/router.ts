import express from "express";
import multer from "multer";
const router = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

/** Member **/
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);

const upload = multer({ dest: "uploads/" });

router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);

/** Product **/

/** Order **/

// SIGNUP ROUTE — Multer middleware qo‘shiladi shu yerda:
router.post(
  "/admin/signup",
  upload.single("memberImage"),
  restaurantController.processSignup
);

// LOGIN ROUTE
router.post("/admin/login", restaurantController.processLogin);

export default router;
