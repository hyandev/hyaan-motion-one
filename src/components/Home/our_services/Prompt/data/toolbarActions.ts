import {
  ChartLine,
  Image as ImageIcon,
  FileText,
  type LucideIcon,
} from "lucide-react";

interface ToolbarAction {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const toolbarActions: ToolbarAction[] = [
  {
    id: "btn_analyze_01",
    label: "Analyze",
    icon: ChartLine,
  },
  {
    id: "btn_generate_02",
    label: "Generate Image",
    icon: ImageIcon, // تم تغيير الاسم لتجنب التعارض مع HTML Image tag
  },
  {
    id: "btn_research_03",
    label: "research",
    icon: FileText,
  },
];
