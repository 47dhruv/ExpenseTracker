import React, { useState } from "react";
import { PlusCircle, Wallet } from "lucide-react";

type Expense = {
  id: number;
  name: string;
  amount: number;
};

type ExpenseFormProps = {
  addExpense: (newExpense: Expense) => void;
};

const ExpenseForm = ({ addExpense }: ExpenseFormProps) => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name.trim() || amount <= 0) {
      return;
    }

    addExpense({
      id: Date.now(),
      name,
      amount,
    });

    setName("");
    setAmount(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white/10
        backdrop-blur-lg
        border
        border-white/20
        rounded-3xl
        p-6
        shadow-2xl
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <Wallet className="text-cyan-400" size={28} />
        <h2 className="text-2xl font-bold text-white">
          Add New Expense
        </h2>
      </div>

      <div className="space-y-5">
        {/* Expense Name */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Expense Name
          </label>

          <input
            type="text"
            placeholder="e.g. Gym Membership"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-slate-800/60
              border
              border-slate-700
              text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
              focus:border-cyan-500
              transition-all
            "
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Amount (₹)
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount || ""}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-slate-800/60
              border
              border-slate-700
              text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              focus:border-purple-500
              transition-all
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            py-3
            rounded-xl
            font-semibold
            bg-linear-to-r
            from-cyan-500
            to-purple-600
            hover:scale-[1.02]
            hover:shadow-lg
            hover:shadow-cyan-500/30
            transition-all
            duration-300
          "
        >
          <PlusCircle size={20} />
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;