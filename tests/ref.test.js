import db from "../db";
import { collectionRef, docRef, emptyDocRef } from "../src/ref";
import { setDoc } from "../src/modify";

describe("Testing Ref", () => {
  it("tests reference ", done => {
    // CollectionRef named "bike" -  db/bikes
    // Equivalent to const bikesRef = db.collection('bikes');
    const bikesRef = collectionRef(db, "bikes");

    // DocRef Named "Pulsar 260" of collection bikesRef(CollectionRef) - db/bikes/Pulsar 260
    // Equivalent to const p260 = bikesRef.doc('bike');
    const p260 = docRef(bikesRef, "Pulsar 260");

    // Empty Doc
    // Equivalent to const empty = bikesRef.doc();
    const empty = emptyDocRef(bikesRef);

    setDoc(
      p260,
      {
        name: "Pulsar 260"
      },
      true
    ).fork(x => done(), x => done());

    setDoc(
      empty,
      {
        name: "Pulsar 180"
      },
      true
    ).fork(x => done(), x => done());
  });
});
