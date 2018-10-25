import { Task } from "fp-small";

// getDoc :: docRef -> Task docRef
export const getDoc = (docRef, option = {}) =>
  new Task((rej, res) =>
    docRef
      .get(option)
      .then(doc => {
        if (!doc.exists) {
          throw new TypeError(`Document does not exist! ${doc.id}`);
        }
        res(doc);
      })
      .catch(rej)
  );
// getCollectionRef :: collRef -> Task [docRef]
export const getCollectionDoc = (collRef, option = {}) =>
  new Task((rej, res) =>
    collRef
      .get(option)
      .then(querySnapshot => {
        res(querySnapshot);
      })
      .catch(rej)
  );
