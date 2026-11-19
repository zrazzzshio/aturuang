const KEY='aturuang_data_v1';
const initialData = () => ({
  profile:{name:'Pengguna AturUang',allowanceDaily:20000,currency:'IDR'},
  transactions:[],
  budgets:[{id:'b1',name:'Makan & Minum',limit:300000,period:'monthly',spent:0},{id:'b2',name:'Transportasi',limit:100000,period:'monthly',spent:0},{id:'b3',name:'Hiburan',limit:75000,period:'monthly',spent:0}],
  debts:[
    {id:'d1',provider:'Shopee PayLater',total:266261,installments:[{id:'s1',amount:165728,due:'2026-12-01',paid:false},{id:'s2',amount:61549,due:'2027-01-01',paid:false},{id:'s3',amount:38984,due:'2027-02-01',paid:false}]},
    {id:'d2',provider:'DANA Cicil',total:86767,installments:[{id:'d21',amount:51061,due:'2026-11-27',paid:false},{id:'d22',amount:12071,due:'2026-12-27',paid:false},{id:'d23',amount:12073,due:'2027-01-27',paid:false},{id:'d24',amount:3854,due:'2027-02-27',paid:false}]}
  ],
  savings:[{id:'sv1',name:'Tabungan awal',target:1000000,balance:125000}],
  createdAt:new Date().toISOString()
});
export function loadData(){try{const raw=localStorage.getItem(KEY);return raw?{...initialData(),...JSON.parse(raw)}:initialData()}catch{return initialData()}}
export function saveData(data){localStorage.setItem(KEY,JSON.stringify(data))}
export function resetData(){const data=initialData();saveData(data);return data}
export function exportData(data){return JSON.stringify(data,null,2)}
export function importData(json){const parsed=JSON.parse(json);if(!parsed||!Array.isArray(parsed.transactions)||!Array.isArray(parsed.debts))throw new Error('Format backup AturUang tidak valid.');saveData(parsed);return {...initialData(),...parsed}}
