import { Volume2, VolumeX } from "lucide-react";
import { useId, useSyncExternalStore } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";
import { Label } from "@/components/ui/8bit/label";
import { Slider } from "@/components/ui/8bit/slider";
import { Switch } from "@/components/ui/8bit/switch";
import { cn } from "@/lib/utils";
import {
	getAudioSettings,
	setMuted,
	setVolume,
	subscribe,
} from "@/stores/audio-settings";

export default function AudioSettings({
	className,
	...props
}: React.ComponentProps<"div">) {
	const id = useId();
	const settings = useSyncExternalStore(subscribe, getAudioSettings);

	const handleVolumeChange = (values: number[]) => {
		setVolume(values[0] / 100);
	};

	const handleMutedChange = (checked: boolean) => {
		setMuted(!checked);
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-xl text-center">AUDIO</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							{settings.muted ? (
								<VolumeX className="h-5 w-5 text-muted-foreground" />
							) : (
								<Volume2 className="h-5 w-5" />
							)}
							<Label htmlFor={`${id}-sound-enabled`}>Sound</Label>
						</div>
						<Switch
							id={`${id}-sound-enabled`}
							checked={!settings.muted}
							onCheckedChange={handleMutedChange}
						/>
					</div>

					<div className="space-y-3">
						<div className="flex items-center justify-between">
							<Label>Volume</Label>
							<span className="text-sm text-muted-foreground">
								{Math.round(settings.volume * 100)}%
							</span>
						</div>
						<Slider
							value={[settings.volume * 100]}
							onValueChange={handleVolumeChange}
							min={0}
							max={100}
							step={1}
							disabled={settings.muted}
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
