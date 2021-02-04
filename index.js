import express from "express";
import mongoose from "mongoose";
import path from "path";
import pusher from "pusher";
import bodyParser from "body-parser";
import multer from "multer";
import gridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import mongoPosts from "./postModel.js";

Grid.mongo = mongoose.mongo;

const app = express();
const port = process.env.port || 4000;

app.use(bodyParser.json());
app.use(cors());

const mongoURI =
  "mongodb+srv://admin:eMxYuAKJSHLucJcZ@cluster0.ilzt0.mongodb.net/fbClone-db?retryWrites=true&w=majority";

const connection = mongoose.createConnection(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;

connection.once("open", () => {
  console.log("DB connected");
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("images");
});

const storage = new gridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `ìmage-${Date.now()}${path.extname(file.originalname)}`;

      const fileInfo = {
        filename,
        bucketName: "images",
      };

      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/upload/image", upload.single("file"), (req, res) => {
  res.status(201).send(req.file);
});

app.post("/upload/post", (req, res) => {
  const dbPost = req.body;
  mongoPosts.create(dbPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/retrieve/posts", (req, res) => {
  mongoPosts.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      data.sort((a, b) => {
        return a.date - b.date;
      });
      res.status(201).send(data);
    }
  });
});

app.get("/retrieve/images/single", (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!file || file.length === 0) {
        res.status(401).json({ err: "File not found" });
      } else {
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
      }
    }
  });
});

app.listen(port, () => console.log());
