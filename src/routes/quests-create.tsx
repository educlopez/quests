import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "@/components/ui/8bit/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/8bit/select";
import { Textarea } from "@/components/ui/8bit/textarea";
import { createQuest } from "@/utils/quests.functions";

const QuestSchema = z.object({
	title: z.string().min(1, "Title is required"),
	description: z.string().optional(),
	difficulty: z.enum(["easy", "medium", "hard"]),
	duration: z.string().optional(),
	tags: z.string().optional(),
	details: z.string().optional(),
	requirements: z.string().optional(), // Changed to string to match form input
});

export const Route = createFileRoute("/quests-create")({
	component: CreateQuest,
});

function CreateQuest() {
	const navigate = useNavigate();
	const form = useForm({
		defaultValues: {
			title: "",
			description: "",
			difficulty: "medium",
			duration: "",
			tags: "",
			details: "",
			requirements: "",
		},

		onSubmit: async ({ value }) => {
			await createQuest({
				data: {
					...value,
					tags: value.tags
						.split(",")
						.map((t) => t.trim())
						.filter(Boolean),
					requirements: value.requirements
						.split("\n")
						.map((r) => r.trim())
						.filter(Boolean), // Fixed: convert string to string[]
				},
			});
			navigate({ to: "/quests" });
		},
	});

	return (
		<div className="min-h-screen retro-bg flex items-center justify-center p-4">
			<Card className="w-full max-w-2xl">
				<CardHeader>
					<CardTitle className="text-2xl md:text-3xl text-primary animate-pulse text-center">
						ADD NEW QUEST
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
						className="space-y-6"
					>
						<form.Field
							name="title"
							validators={{
								onChange: z.string().min(1, "Title is required"),
							}}
							children={(field) => (
								<div className="space-y-2">
									<Label htmlFor={field.name}>Quest Title</Label>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="e.g. Build a Retro Game"
									/>
									{field.state.meta.errors ? (
										<p className="text-red-500 text-xs pixelated">
											{field.state.meta.errors.join(", ")}
										</p>
									) : null}
								</div>
							)}
						/>

						<form.Field
							name="description"
							children={(field) => (
								<div className="space-y-2">
									<Label htmlFor={field.name}>Short Description</Label>
									<Textarea
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Brief overview of the quest..."
									/>
								</div>
							)}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<form.Field
								name="difficulty"
								children={(field) => (
									<div className="space-y-2">
										<Label>Difficulty</Label>
										<Select
											value={field.state.value}
											onValueChange={field.handleChange}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select difficulty" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="easy">Easy</SelectItem>
												<SelectItem value="medium">Medium</SelectItem>
												<SelectItem value="hard">Hard</SelectItem>
											</SelectContent>
										</Select>
									</div>
								)}
							/>

							<form.Field
								name="duration"
								children={(field) => (
									<div className="space-y-2">
										<Label htmlFor={field.name}>Duration</Label>
										<Select
											value={field.state.value}
											onValueChange={field.handleChange}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select duration" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="weekend">Weekend</SelectItem>
												<SelectItem value="1week">~1 Week</SelectItem>
												<SelectItem value="2weeks">~2 Weeks</SelectItem>
												<SelectItem value="month">1+ Month</SelectItem>
											</SelectContent>
										</Select>
									</div>
								)}
							/>
						</div>

						<form.Field
							name="tags"
							children={(field) => (
								<div className="space-y-2">
									<Label htmlFor={field.name}>Tags (comma separated)</Label>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="React, TypeScript, 8bit"
									/>
								</div>
							)}
						/>

						<form.Field
							name="details"
							children={(field) => (
								<div className="space-y-2">
									<Label htmlFor={field.name}>Detailed Guide</Label>
									<Textarea
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Step-by-step details..."
										className="min-h-[150px]"
									/>
								</div>
							)}
						/>

						<form.Field
							name="requirements"
							children={(field) => (
								<div className="space-y-2">
									<Label htmlFor={field.name}>
										Requirements (one per line)
									</Label>
									<Textarea
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Know React&#10;Basic CSS"
										className="min-h-25"
									/>
								</div>
							)}
						/>

						<div className="pt-4">
							<Button
								type="submit"
								className="w-full h-12 text-lg active:scale-95 transition-transform"
							>
								CREATE QUEST
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
