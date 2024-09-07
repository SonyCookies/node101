const express = require("express");
const router = express.Router();

//Dummy user data muna, because database is still not required pa.
const users = [
  { id: 1, name: "H4CKWIZ | ARISTON", age: 23 },
  { id: 2, name: "H4CKWIZ | SONNY", age: 20 },
  { id: 3, name: "H4CKWIZ | MATTHEW", age: 19 },
  { id: 4, name: "H4CKWIZ | IAN", age: 20 },
];

router.get("/", (req, res) => {
  res.render("users", { title: "Users", users });
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.render("user-profile", { title: `Profile: ${user.name}`, user });
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = router;
