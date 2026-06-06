import { Trash2 } from "lucide-react";

type Expense = {
  id: number;
  name: string;
  amount: number;
};

type ExpenseCardProps = {
  expense: Expense;
  deleteExpense: (id: number) => void;
};

const ExpenseCard = ({
  expense,
  deleteExpense,
}: ExpenseCardProps) => {
  return (
    <div
      className="
      group
      flex
      items-center
      justify-between
      p-5
      rounded-2xl
      bg-white/10
      backdrop-blur-md
      border
      border-white/20
      shadow-lg
      hover:shadow-cyan-500/20
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      {/* Left Section */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white">
          {expense.name}
        </h3>

        <p className="text-sm text-slate-400">
          Expense Entry
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span
          className="
          px-4
          py-2
          rounded-full
          bg-red-500/20
          text-red-400
          font-bold
          text-lg
          border
          border-red-500/30
          "
        >
          ₹{expense.amount}
        </span>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="
          p-3
          rounded-xl
          bg-red-500/20
          text-red-400
          border
          border-red-500/30
          hover:bg-red-500
          hover:text-white
          transition-all
          duration-300
          "
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;