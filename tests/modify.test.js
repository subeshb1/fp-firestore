import db from "../db";

import {
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  collectionRef,
  emptyDocRef,
  docRef
} from "../src";

describe("Tests Add", () => {
  it("Adds a bike to bikes collection", done => {
    const bikes = collectionRef(db, "bikes-add");
    const data = {
      name: "Apache",
      company: "CB",
      cc: 200
    };
    addDoc(bikes, data).fork(x => x, x => done());
  });
});

describe("Tests Set", () => {
  it("Adds a bike to bikes collection", done => {
    const bikes = collectionRef(db, "bikes-set");
    const p100 = docRef(bikes, "Pulssasr 100");
    const data = {
      name: "Pulsar ",
      company: "100",
      cc: 100
    };

    setDoc(p100, data).fork(x => x, x => done());
  });
});

describe("Tests Update", () => {
  it("Adds a bike to bikes collection", done => {
    const bikes = collectionRef(db, "bikes-update");
    const p100 = docRef(bikes, "Pulssasr 100");
    const data = {
      name: "Pulsar 5505 ",
      company: "100",
      cc: 100
    };

    setDoc(p100, data)
      .fork(x => x, x => x)
      .then(() => {
        updateDoc(p100, {
          name: "Pulsar"
        }).fork(x => x, x => done());
      });
  });
});

describe("Tests Delete", () => {
  it("Adds a bike to bikes collection", done => {
    const bikes = collectionRef(db, "bikes-delete");
    const p100 = docRef(bikes, "Pulssasr 100");
    const data = {
      name: "Pulsar 5505 ",
      company: "100",
      cc: 100
    };

    setDoc(p100, data)
      .fork(x => x, x => x)
      .then(() => {
        deleteDoc(p100).fork(x => x, x => done());
      });
  });
});
