import db from "../src/db";
import { collectionRef, docRef, emptyDocRef, setDoc } from "../src/index";

describe("Testing Collections", () => {
  it("should ", done => {
    const bikeRef = collectionRef(db, "bike");
    const newDoc = docRef(bikeRef, "Pulsar 260");
    setDoc(
      newDoc,
      {
        name: "Pulsar 260"
      },
      true
    ).fork(x => done(), x => done());
  });
});
