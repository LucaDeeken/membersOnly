import { prisma } from "../lib/prisma.js";
import { body, validationResult, matchedData } from "express-validator";

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

export async function getIndex(req, res) {
  res.render("layout", {});
}

export async function loginUser(req, res, next) {
  try {
    const user = await prisma.user.create({
      data: {
        userName: req.body.userName,
        password: req.body.password, // später mit bcrypt!
        firstName: req.body.firstName || null,
        lastName: req.body.lastName || null,
        membership: false,
      },
    });
    console.log("success");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
];

export function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("layout", {
      title: "Create user",
      errors: errors.array(),
    });
  }

  next(); // 👉 wichtig!
}
