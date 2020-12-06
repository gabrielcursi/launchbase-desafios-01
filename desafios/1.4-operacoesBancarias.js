const user = {
	name: 'Gabriel',
	transactions: [],
	balance: 0
}

function createTransaction (transaction) {
	user.transactions.push(transaction)
	if(transaction.type === 'credit'){
		user.balance = user.balance + transaction.value
	} else {
		user.balance = user.balance - transaction.value
	}
}

function getHigherTransactionByType (typeTransaction) {
	let higherTransaction
	let higherValue = 0

	for(let transaction of user.transactions){
		if(transaction.type == typeTransaction && transaction.value > higherValue){
			higherValue = transaction.value
			higherTransaction = transaction
		}
	}
		return higherTransaction
}

function getAverageTransactionValue() {
	let sum = 0
	for (const transaction of user.transactions) {
		sum += transaction.value
	}
	return sum / user.transactions.length
}

function getTransactionsCount() {
	let count = {
		credit: 0,
		debit: 0
	}
	for (const transaction of user.transactions) {
		if(transaction.type === 'credit'){
			count.credit++
		} else{
			count.debit++
		}
	}
	return count
}

createTransaction({ type: 'credit', value: 80})
createTransaction({ type: 'debit', value: 30})
createTransaction({ type: 'credit', value: 180})
createTransaction({ type: 'debit', value: 600})
createTransaction({ type: 'credit', value: 400})
createTransaction({ type: 'debit', value: 100})
createTransaction({ type: 'credit', value: 150})

console.log('Balance: ',user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())
