import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const freshLyrics = require("../data.json");
const colRef = collection(db, "bars");

async function deleteAndReplace() {
  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach(async (snapshot) => {
    const docRef = doc(colRef, snapshot.id);
    await deleteDoc(docRef);
  });
  freshLyrics.forEach(async (data) => {
    await addDoc(colRef, data);
  });
}
deleteAndReplace();
