import { createApp, upload } from "./config.js";

const app = createApp({
  user: "cold_wildflower_553",
  host: "bbz.cloud",
  database: "cold_wildflower_553",
  password: "e43a7bc0df943746649cb95568bab042",
  port: 30211,
});

/* Start */
app.get("/", async function (req, res) {
  res.render("start");
});

/* Impressum */
app.get("/impressum", async function (req, res) {
  res.render("impressum");
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
