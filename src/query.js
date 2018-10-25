import { curry } from "fp-small";
// Query
export const query = curry((filter, comparison, value, collectionRef) =>
  collectionRef.where(filter, comparison, value)
);

export const orderBy = curry((filter, order, collectionRef) =>
  collectionRef.orderBy(filter, order)
);
export const limit = curry((val, collRef) => collRef.limit(val));
// Ill handle the day  I get the problem
export const startAt = curry((val, collRef) => collRef.startAt(...val));
export const startAfter = curry((val, collRef) => collRef.startAfter(...val));
export const endAt = curry((val, collRef) => collRef.endAt(...val));
export const endBefore = curry((val, collRef) => collRef.endBefore(...val));
