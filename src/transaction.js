import { curry, Task } from "fp-small";


export const transaction = (firestore, transactionTask) =>
  new Task((rej, res) =>
    firestore
      .runTransaction(transaction => {
        return new Promise((res, rej) => {
          transactionTask(transaction).fork(rej, res);
        });
      })
      .then(res)
      .catch(rej)
  );

export const transactionGet = curry(
  (docRef, transaction) =>
    new Task((rej, res) =>
      transaction
        .get(docRef)
        .then(doc => {
          if (!doc.exists) {
            throw new TypeError(`Document does not exist! ${doc.id}`);
          }
          res(doc);
        })
        .catch(rej)
    )
);
