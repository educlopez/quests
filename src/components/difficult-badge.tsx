import { Badge } from "./ui/8bit/badge";

type DifficultBadgeProps = {
	level?: "easy" | "medium" | "difficult";
};

export const DifficultBadge: React.FC<DifficultBadgeProps> = ({ level }) => {
	const levelColor = {
		easy: "border-green-500 bg-green-500",
		medium: "border-yellow-500 bg-yellow-500",
		difficult: "border-red-500 bg-red-500",
	};

	const levelText = {
		easy: "Easy",
		medium: "Medium",
		difficult: "Difficult",
	};

	const color = levelColor[level ?? "easy"];
	const text = levelText[level ?? "easy"];

	return <Badge className={color}>{text}</Badge>;
};
