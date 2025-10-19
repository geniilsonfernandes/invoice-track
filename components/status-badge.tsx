import clsx from "clsx";
import { BadgeX, Check, Circle, CircleDashed, Play } from "lucide-react";
import { JSX } from "react";
import { Badge } from "./ui/badge";

type StatusType = "draft" | "in-progress" | "in-review" | "completed" | "cancelled";

interface StatusBadgeProps {
  status: StatusType;
  withLabel?: boolean;
}

const statusStyles: Record<StatusType, string> = {
  draft: "text-gray-500 bg-gray-100 border-gray-300",
  "in-progress": "text-orange-600 bg-orange-100 border-orange-300",
  "in-review": "text-blue-600 bg-blue-100 border-blue-300",
  completed: "text-green-600 bg-green-100 border-green-300",
    cancelled: "text-red-600 bg-red-100 border-red-300",
};

const icons: Record<StatusType, JSX.Element> = {
  draft: <CircleDashed className="size-4" />,
  "in-progress": <Play className="size-4 fill-orange-500 text-white" />,
  "in-review": <Circle className="size-4 fill-blue-500 text-white" />,
  completed: <Check className="size-4 text-white bg-green-500 rounded-full" />,
  cancelled: <BadgeX  className="size-4 text-red-500" />,
};

const labels: Record<StatusType, string> = {
  draft: "Draft",
  "in-progress": "In-progress",
  "in-review": "In-review",
  completed: "Completed",
  cancelled: "Cancelled",
};

  

export function StatusBadge({ status, withLabel = true }: StatusBadgeProps) {
  return (
    <Badge
      className={clsx(
        "inline-flex w-fit items-center gap-1.5 rounded-md border px-1 py-0.5 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {icons[status]}
      {withLabel && <span>{labels[status]}</span>}
    </Badge>
  );
}
