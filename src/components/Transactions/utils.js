import { element } from "prop-types";
import apiFetch from "../../services/api-fetch";

async function getAllTxnsByMonth(month, type) {
  let txnsByCtgry = [];
  const allCtgrys = await apiFetch("categories").then((data) => {
    return data.filter((category) => category.transaction_type === type);
  });
  for (const elem of allCtgrys) {
    txnsByCtgry.push({ category: elem.name, transactions: elem.transactions });
  }
  for (const elem of txnsByCtgry) {
    elem.transactions = elem.transactions.filter(
      (txn) => new Date(txn.date).getMonth() === month
    );
  }
  return txnsByCtgry;
}

const wantedMonth = new Date("2022-09-23").getMonth();

export async function makeTxnsSplitted() {
  const txnsbyMonth = await getAllTxnsByMonth(wantedMonth, "expense");
  let txnsSplitted = [];
  for (const elem of txnsbyMonth) {
    elem.transactions.forEach((element) => {
      let { amount, date, notes } = element;
      txnsSplitted.push({ category: elem.category, amount, date, notes });
    });
  }
  return txnsSplitted;
}

// {
//   'fruits': [
//     { name: 'apples', category: 'fruits' },
//     { name: 'oranges', category: 'fruits' },
//   ],
//   'vegetables': [
//     { name: 'potatoes', category: 'vegetables' }
//   ]
// }

// export function getAllTxnsByMonth(month, type){
//     let txnsByCtgry = [] ;
//     apiFetch("categories").then((data) => {
//         let allCtgrys = data.filter((category) => (category.transaction_type === type));
//         for (const elem of allCtgrys) {
//             txnsByCtgry.push({category: elem.name, transactions: elem.transactions })
//         }
//         for( const elem of txnsByCtgry){
//             elem.transactions = elem.transactions.filter(txn =>  new Date(txn.date).getMonth() === month )
//         }
//         return txnsByCtgry;
//     });
//     return txnsByCtgry;
// }
