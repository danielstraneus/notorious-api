import express from "express";
const router = express.Router();

import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase.js";
const colRef = collection(db, "bars");

//GET ALL
router.get("/", async (req, res) => {
  let lyrics = [];

  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach((docSnapshot) => {
    lyrics.push({ ...docSnapshot.data(), id: docSnapshot.id });
  });

  res.send(lyrics);
});

//GET RANDOM
router.get("/random", async (req, res) => {
  let lyrics = [];

  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach((docSnapshot) => {
    lyrics.push({ ...docSnapshot.data(), id: docSnapshot.id });
  });

  res.send(lyrics[Math.floor(Math.random() * lyrics.length)]);
  // res.sendStatus(200);
});

//POST

// router.post("/", async (req, res) => {
//   let newObject = req.body;
//   const addHamster = await addDoc(colRef, newObject);
//   const hamsterId = { id: addHamster.id };
//   res.status(200).send(hamsterId);
// });

//GET ID

// router.get("/:id", async (req, res) => {
//   let hamsterId = req.params.id;
//   const docRef = doc(colRef, hamsterId);
//   const snapshot = await getDoc(docRef);
//   const data = snapshot.data();
//   if (snapshot.exists()) {
//     res.status(200).send(data);
//     return;
//   } else res.sendStatus(404);
// });

//DELETE

// router.delete("/:id", async (req, res) => {
//   let idToRemove = req.params.id;
//   const docRef = doc(colRef, idToRemove);

//   if (idToRemove !== "id-does-not-exist") {
//     await deleteDoc(docRef);
//     res.sendStatus(200);
//     return;
//   }
//   res.sendStatus(404);
// });

//PUT

// router.put("/:id", async (req, res) => {
//   let oldDocId = req.params.id;
//   const oldDocRef = doc(colRef, oldDocId);
//   let newData = req.body;

//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     console.log("Object missing");
//     res.sendStatus(400);
//     return;
//   }

//   if (oldDocId !== "id-does-not-exist") {
//     await updateDoc(oldDocRef, newData);
//     res.sendStatus(200);
//     return;
//   }
//   res.sendStatus(404);
// });

export default router;
