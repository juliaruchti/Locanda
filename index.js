import { createApp } from "./config.js";

const app = createApp({
  user: "cold_wildflower_553",
  host: "bbz.cloud",
  database: "cold_wildflower_553",
  password: "e43a7bc0df943746649cb95568bab042",
  port: 30211,
});

/* Startseite */
app.get("/", async function (req, res) {
  res.render("start", {});
});

/* Feed */
app.get("/feed", async function (req, res) {
  const users = await app.locals.pool.query("SELECT * FROM posts");
  res.render("feed", { posts: posts.rows });
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
  const users = await app.locals.pool.query("SELECT * FROM users");
  res.render("account", { users: users.rows });
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
