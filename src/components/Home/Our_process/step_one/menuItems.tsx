import { Cpu, Gauge, Repeat, Shield, Toolbox } from "lucide-react";

export const menuItems = [
  {
    icon: <Shield size={13} />,
    label: "System check",
  },
  {
    icon: <Cpu size={13} />,
    label: "Process check",
  },
  {
    icon: <Gauge size={13} />,
    label: "Speed check",
  },
  {
    icon: <Toolbox size={13} />,
    label: "Manual work",
  },
  {
    icon: <Repeat size={13} />,
    label: "Repetitive task",
  },
];
