import { ChevronDown, Filter, RotateCcw } from "lucide-react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/8bit/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/8bit/dropdown-menu";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/8bit/select";

export const Filters: React.FC = () => {
	const [difficulty, setDifficulty] = useQueryState("difficulty");
	const [duration, setDuration] = useQueryState("duration");
	const [tech, setTech] = useQueryState("tech", parseAsArrayOf(parseAsString));
	const [sort, setSort] = useQueryState("sort");

	const hasFilters =
		difficulty || duration || (tech && tech.length > 0) || sort;

	const resetFilters = () => {
		setDifficulty(null);
		setDuration(null);
		setTech(null);
		setSort(null);
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2 text-muted-foreground">
				<Filter className="size-4" />
				<span className="text-sm font-medium">Filter Quests</span>
			</div>

			<div className="flex flex-wrap items-center gap-4">
				<DifficultySelect value={difficulty} onChange={setDifficulty} />
				<DurationSelect value={duration} onChange={setDuration} />
				<TechMultiSelect value={tech ?? []} onChange={setTech} />
				<SortSelect value={sort} onChange={setSort} />

				{hasFilters && (
					<Button variant="ghost" size="sm" onClick={resetFilters}>
						<RotateCcw className="size-3" />
						Reset
					</Button>
				)}
			</div>
		</div>
	);
};

type SelectProps = {
	value: string | null;
	onChange: (value: string | null) => void;
};

const DifficultySelect: React.FC<SelectProps> = ({ value, onChange }) => {
	return (
		<Select value={value ?? ""} onValueChange={(v) => onChange(v || null)}>
			<SelectTrigger className="min-w-50">
				<SelectValue placeholder="Difficulty" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="easy">Easy</SelectItem>
				<SelectItem value="medium">Medium</SelectItem>
				<SelectItem value="hard">Hard</SelectItem>
			</SelectContent>
		</Select>
	);
};

const DurationSelect: React.FC<SelectProps> = ({ value, onChange }) => {
	return (
		<Select value={value ?? ""} onValueChange={(v) => onChange(v || null)}>
			<SelectTrigger className="min-w-50">
				<SelectValue placeholder="Duration" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="weekend">Weekend</SelectItem>
				<SelectItem value="1week">~1 Week</SelectItem>
				<SelectItem value="2weeks">~2 Weeks</SelectItem>
				<SelectItem value="month">1+ Month</SelectItem>
			</SelectContent>
		</Select>
	);
};

const TECH_OPTIONS = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "node", label: "Node.js" },
	{ value: "python", label: "Python" },
	{ value: "rust", label: "Rust" },
	{ value: "go", label: "Go" },
];

type MultiSelectProps = {
	value: string[];
	onChange: (value: string[] | null) => void;
};

const TechMultiSelect: React.FC<MultiSelectProps> = ({ value, onChange }) => {
	const toggleOption = (optionValue: string) => {
		const newValue = value.includes(optionValue)
			? value.filter((v) => v !== optionValue)
			: [...value, optionValue];
		onChange(newValue.length > 0 ? newValue : null);
	};

	const displayValue =
		value.length === 0
			? "Tech Stack"
			: value.length === 1
				? TECH_OPTIONS.find((o) => o.value === value[0])?.label
				: `${value.length} selected`;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="min-w-50">
				<button
					type="button"
					className={cn(
						"relative border-y-6 border-foreground dark:border-ring w-40 retro",
					)}
				>
					<div className="flex h-9 w-full items-center justify-between bg-transparent px-3 py-2 text-sm">
						<span className={value.length === 0 ? "text-muted-foreground" : ""}>
							{displayValue}
						</span>
						<ChevronDown className="size-4 opacity-50" />
					</div>
					<div
						className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
						aria-hidden="true"
					/>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40">
				{TECH_OPTIONS.map((option) => (
					<DropdownMenuCheckboxItem
						key={option.value}
						checked={value.includes(option.value)}
						onCheckedChange={() => toggleOption(option.value)}
					>
						{option.label}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const SortSelect: React.FC<SelectProps> = ({ value, onChange }) => {
	return (
		<Select value={value ?? ""} onValueChange={(v) => onChange(v || null)}>
			<SelectTrigger className="w-40">
				<SelectValue placeholder="Sort by" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="newest">Newest</SelectItem>
				<SelectItem value="easiest">Easiest First</SelectItem>
				<SelectItem value="hardest">Hardest First</SelectItem>
			</SelectContent>
		</Select>
	);
};
