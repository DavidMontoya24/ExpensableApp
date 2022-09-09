import { parseISO } from "date-fns";
import { colors } from "../../styles";
import { BsFillCartFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { AiFillCar, AiFillBank, AiFillGift } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { RiBook2Fill } from "react-icons/ri";

const ICONS = {
  cart: BsFillCartFill,
  bill: FaMoneyBill,
  car: AiFillCar,
  education: FaGraduationCap,
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

export const dataColors = [
  {id: 1, value: "red", color:"#EF4444"},
  {id: 2, value: "orange", color: "#F97316"},
  {id: 3, value: "yellow", color: "#F59E0B"},
  {id: 4, value: "green", color: "#10B981"},
  {id: 5, value: "teal", color: "#14B8A6"},
  {id: 6, value: "cyan", color: "#06B6D4"},
  {id: 7, value: "light-blue", color: "#0EA5E9"},
  {id: 8, value: "blue", color: "#3B82F6"},
];

export const dataIcons = [
  {id: 1, value: "bank", icon: AiFillBank},
  {id: 2, value: "cart", icon: BsFillCartFill},
  {id: 3, value: "health", icon: GiHealthNormal},
  {id: 4, value: "game", icon: IoGameController},
  {id: 5, value: "utilities", icon: RiBook2Fill},
  {id: 6, value: "education", icon: FaGraduationCap},
  {id: 7, value: "car", icon: AiFillCar},
  {id: 8, value: "gift", icon: AiFillGift},
];