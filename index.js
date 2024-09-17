import { createApp } from "./config.js";

const app = createApp({
  user: "autumn_star_7622",
  host: "168.119.168.41",
  database: "demo",
  password: "uaioysdfjoysfdf",
  port: 18324,
});

/* Startseite */
app.get("/", async function (req, res) {
  res.render("start", {});
});

/* Feed */
app.get("/feed", async function (req, res) {
  res.render("feed", {});
});

/* Blog */
app.get("/blog", async function (req, res) {
  res.render("blog", {});
});

/* Favourites */
app.get("/favourites", async function (req, res) {
  res.render("favourites", {});
});

/* Account */
app.get("/account", async function (req, res) {
  res.render("account", {});
});

/* Impressum */
app.get("/impressum", async function (req, res) {
  res.render("impressum", {});
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", (req, res) => {
  res.render("404", {});
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
