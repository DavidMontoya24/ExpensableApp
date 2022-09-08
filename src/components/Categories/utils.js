import { parseISO } from "date-fns";
import { colors } from "../../styles";
import { BsFillCartFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { RiBookFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";

const ICONS = {
  cart: BsFillCartFill,
  bill: FaMoneyBill,
  car: AiFillCar,
  education: RiBookFill,
  game: IoGameController,
};

const COLORS = {
  blue: "#3B82F6",
  "light-blue": "#0EA5E9",
  cyan: "#06B6D4",
  teal: "#14B8A6",
  green: "#10B981",
  yellow: "#F59E0B",
  orange: "#F97316",
  red: "#EF4444"
};

export const getMonthlyData = (categories, date, type) =>
  categories
    .filter((cat) => cat["transaction_type"] === type)
    .map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        Icon: ICONS[cat.icon] || BsFillCartFill,
        color: COLORS[cat.color] || colors.pink[600],
        amount: cat.transactions.reduce((acc, cur) => {
          const trxDate = parseISO(cur.date);
          const trxYear = trxDate.getFullYear();
          const trxMonth = trxDate.getMonth();
          if (trxYear === date.year && trxMonth === date.month) {
            return acc + cur.amount;
          }
          return acc;
        }, 0),
      };
    });
