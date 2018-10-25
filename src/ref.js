import { curry } from "fp-small";

/**
 * collectionRef :: Ref -> String -> Ref
 * @param {collectionRef} parent - A collection than contains the queried collection
 * @param {string} collName - Collection name
 * @returns {collectionRef}
 */
export const collectionRef = curry((parent, collName) =>
  parent.collection(collName)
);

/**
 * docRef :: collectionRef  -> String -> docRef
 * @param {collectionRef} parent - A collection containing the doc
 * @param {string} doc - Id of the doc
 * @returns {docRef}
 */
export const docRef = curry((parent, doc) => parent.doc(doc));

/**
 * emptyDoc :: collectionRef -> emptyDocRef
 * @param {collectionRef} parent - A collection containing the doc
 * @returns {docRef} - doc with auto generated ID
 */
export const emptyDocRef = parent => parent.doc();
