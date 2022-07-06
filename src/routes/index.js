import { Router } from "express";
const router = Router();
router.get("/", (req, res) => res.render("index", {title: 'Portafolio | Silva Matias'}));

router.get("/about", (req, res) => res.render("about", {title: 'about Me'}));

router.get("/contact", (req, res) => res.render("contact", {title: 'contact me '}));

export default router;
