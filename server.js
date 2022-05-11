const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  comments: 644,
  watched: 600,
  wishWatched: 600,
});

app.use(
  jsonServer.rewriter({
    "/api/register": "/register",
    "/api/login": "/login",

    "/api/user*":
      "/600/users$1?_embed=wishWatch&_embed=watched&_embed=comments",
    "/api/comments/movie/:id": "/644/comments?movieId=:id",
    "/api/watched/user/:id": "/600/watched?userId=:id",
    "/api/wishWatch/user/:id": "/600/wishWatch?userId=:id",
  })
);

app.use("/api/who-watched/:id", auth, (req, res) => {
  const { db } = req.app;
  const id = req.params.id;

  const spectators = db
    .get("watched")
    .value()
    .filter(({ movieId }) => +movieId === +id)
    .map(({ userId }) => userId);

  const spectatorsInfo = db
    .get("users")
    .value()
    .filter(({ id }) => spectators.includes(id))
    .map(({ name, email, profilePhoto }) => ({
      name,
      email,
      profilePhoto,
    }));

  res.send(spectatorsInfo);
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
