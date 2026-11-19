export const totalIncome = tx => tx.filter(x=>x.type==='income').reduce((s,x)=>s+Number(x.amount),0);
export const totalExpense = tx => tx.filter(x=>x.type==='expense').reduce((s,x)=>s+Number(x.amount),0);
export const totalDebt = debts => debts.reduce((s,d)=>s+d.installments.filter(i=>!i.paid).reduce((a,i)=>a+Number(i.amount),0),0);
export const paidDebt = debts => debts.reduce((s,d)=>s+d.installments.filter(i=>i.paid).reduce((a,i)=>a+Number(i.amount),0),0);
export const totalSavings = savings => savings.reduce((s,x)=>s+Number(x.balance),0);
export const dueSoon = debts => debts.flatMap(d=>d.installments.filter(i=>!i.paid).map(i=>({...i,provider:d.provider}))).sort((a,b)=>a.due.localeCompare(b.due)).slice(0,5);
