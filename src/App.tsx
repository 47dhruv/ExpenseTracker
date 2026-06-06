import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseCard from "./component/ExpenseCard";

type Expense = {
  id: number;
  name: string;
  amount: number;
};

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (newExpense: Expense): void => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id: number): void => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Expense Tracker
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Track your daily spending effortlessly
          </p>
        </div>

        {/* Stats Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              <div>
                <p className="text-slate-400 text-sm">
                  Total Expenses
                </p>

                <h2 className="text-4xl font-bold text-red-400">
                  ₹{total.toLocaleString()}
                </h2>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Total Entries
                </p>

                <h2 className="text-4xl font-bold text-cyan-400">
                  {expenses.length}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Form */}
        <div className="max-w-4xl mx-auto mb-8">
          <ExpenseForm addExpense={addExpense} />
        </div>

        {/* Expense List */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
            
            <h2 className="text-2xl font-bold mb-6">
              Recent Expenses
            </h2>

            {expenses.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl text-slate-400">
                  No expenses added yet
                </h3>

                <p className="text-slate-500 mt-2">
                  Add your first expense above 🚀
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {expenses.map((expense) => (
                  <ExpenseCard
                    key={expense.id}
                    expense={expense}
                    deleteExpense={deleteExpense}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;