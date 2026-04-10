import {
  Check,
  CircleDollarSign,
  Clock,
  Users,
  ClipboardList,
  X,
  ListTodo,
  Loader2,
  type LucideIcon,
} from "lucide-react";

interface activitiesType {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon; // تغيير النوع من string إلى LucideIcon لضمان التوافق
  status: "pending" | "completed" | "cancelled" | "in-progress";
  statusIcon: LucideIcon;
}

const activities: activitiesType[] = [
  {
    id: 1,
    title: "Payroll management",
    subtitle: "Due on 2nd july",
    icon: CircleDollarSign,
    status: "pending",
    statusIcon: Clock,
  },
  {
    id: 2,
    title: "Employee Tracking",
    subtitle: "2 days ago",
    icon: Users,
    status: "completed",
    statusIcon: Check,
  },
  {
    id: 3,
    title: "Social media post",
    subtitle: "Cancelled by user",
    icon: ClipboardList,
    status: "cancelled",
    statusIcon: X,
  },
  {
    id: 4,
    title: "Lead list",
    subtitle: "70% prepared",
    icon: ListTodo,
    status: "in-progress",
    statusIcon: Loader2,
  },
  {
    id: 5,
    title: "Payment reminder",
    subtitle: "sent to selected clients",
    icon: Clock,
    status: "completed",
    statusIcon: Check,
  },
];

export default activities;
