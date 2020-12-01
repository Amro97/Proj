const mongoose = require('mongoose')
//const db = require('./expenses')
//console.log(db)
const Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/expensesDB")

const expenseSchema = new Schema({
    name: String,
    amount: Number,
    date: Date,
    group: String
})

const Expense = mongoose.model("expense", expenseSchema)

// for(let e of db){
//     const per = new Expense({
//         name: e.item,
//         amount: e.amount,
//         date: e.date,
//         group: e.group
//     })
//     per.save()
// }

module.exports = Expense