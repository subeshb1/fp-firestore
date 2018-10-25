import db from "../db";
import {
  docRef,
  collectionRef,
  setDoc,
  addDoc,
  getDoc,
  getCollectionDoc,
  snapshotToArr
} from "../src";
const bikes = collectionRef(db, "bike-get");

const bikeList = {
  Honda: [
    "Activa",
    "CB Shine",
    "CB Unicorn",
    "Aviator",
    "Shine",
    "Unicorn",
    "Dio",
    "Dream Yuga",
    "CB Twister",
    "Activa I",
    "X-blqde",
    "Others"
  ],
  Bajaj: [
    "Dominar 400",
    "Pulsar Rs200",
    "Pulsar Ns200",
    "Pulsar Ns160",
    "Pulsar 220f",
    "Pulsar 180",
    "Pulsar 150",
    "Avenger",
    "V",
    "Discover",
    "Platina",
    "Ct100"
  ],
  "Hero Motocorp": [
    "Xtreme 200r",
    "Karizma Zmr",
    "Xtreme Sports",
    "Achiever 150",
    "New Glamour",
    "Glqmour Programmed FI",
    "Super Splindor",
    "Glamour",
    "Duet",
    "Maestro Edge",
    "Passion X Pro",
    "New Super Splindor",
    "Passion Pro 110",
    "Splindor Ismart+",
    "Splendor Pro",
    "Splindor Plus",
    "Hf Deluxe Eco",
    "Hf Deluxe",
    "Hf Dawn"
  ],
  TVS: [
    "Apache Rr310",
    "Apache Rtr 160",
    "Apache Rtr 200",
    "Apache Rtr 180 Abs",
    "Tvs Victor",
    "Star City+",
    "Tvs Sport",
    "Tvs Ntorq",
    "Tvs Jupiter",
    "Tvs Wego",
    "Zest 110",
    "Scooty Pep+"
  ],
  Yamaha: [
    "Yzf R1",
    "Mt -09",
    "Yzf R15 V3 Moto Gp Edition",
    "Yzf R3",
    "Yzf R15 Ver 3.0",
    "Fazer -25",
    "Fz25",
    "Yzf R15s",
    "Fazer-fi",
    "Fzs-fi",
    "Fz-fi",
    "Sz-rr Ver 2.0",
    "Saluto 125",
    "Saluto Rx",
    "Rayzr Street Rally",
    "Fascino",
    "Rayzr",
    "Alpha",
    "Ray-z",
    "Scooter Boutique"
  ],
  "Royal Enfield": [
    "Bullet 500",
    "Bullet 350",
    "Bullet Es",
    "Classic Desert Storm",
    "Classic Chrome",
    "Classic Battle Green",
    "Classic 500",
    "Classic 350",
    "Classic Squadron Blue",
    "Explore Redditch Colors",
    "Explore Gunmetalgrey",
    "Explore Stealthblack",
    "Classic Pegasus Edition",
    "Classic 350 Signals",
    "Thunderbird 500",
    "Thunderbird 350",
    "Thunderbird X",
    "Contiental Gt",
    "Himalayan"
  ],
  Suzuki: [
    "Intruder",
    "Gixxer",
    "Gixxer Sp",
    "Gixxer Sf",
    "Gixxer Sp Sf",
    "Hayate Ep",
    "Bureman",
    "Access125",
    "Lets",
    "Gsx-s",
    "Rm-z 250",
    "Rm-z 450"
  ],
  Mahindra: [
    "Mahindra Mojo",
    "Mahindra Centuro",
    "Duro Dz",
    "Redeo Uzo",
    "Gusto"
  ],
  KTM: [
    "Ktm 200 Duke",
    "Ktm Rc200",
    "Ktm 390 Duke",
    "Ktm 250 Duke",
    "Ktm Rc390"
  ],
  Other: []
};

const companies = [
  "Honda",
  "Bajaj",
  "Hero Motocorp",
  "TVS",
  "Yamaha",
  "Royal Enfield",
  "Suzuki",
  "Mahindra",
  "KTM",
  "Other"
];

beforeAll(done => {
  const promises = [];
  for (let company of companies) {
    const companyDoc = docRef(bikes, company);
    const companyBikeCollection = collectionRef(companyDoc, "bikes");

    promises.push(
      setDoc(companyDoc, {
        name: company
      })
        .fork(x => x, x => x)
        .then(() => {
          promises.push(
            ...bikeList[company].map(x =>
              setDoc(docRef(companyBikeCollection, x), {
                name: x,
                cc: 100
              }).fork(x => x, y => y)
            )
          );
        })
    );
  }

  Promise.all(promises).then(x => done());
});

describe("Testing Get", () => {
  it("fetches data from db", done => {
    const bajajCollection = collectionRef(docRef(bikes, "Bajaj"), "bikes");

    getCollectionDoc(bajajCollection).fork(
      x => {
        throw "Error";
      },
      x => expect(snapshotToArr(x).length).toBe(13),
      done()
    );
  });
});
