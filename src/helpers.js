export const snapshotToArr = x =>
  x.docs.map(x => ({
    id: x.id,
    ...x.data()
  }));