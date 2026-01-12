const STORAGE_KEY = "audio-settings";

interface AudioSettings {
	volume: number;
	muted: boolean;
}

const defaultSettings: AudioSettings = {
	volume: 0.5,
	muted: false,
};

function loadSettings(): AudioSettings {
	if (typeof window === "undefined") return defaultSettings;

	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			return { ...defaultSettings, ...JSON.parse(stored) };
		}
	} catch {
		// ignore
	}
	return defaultSettings;
}

function saveSettings(settings: AudioSettings) {
	if (typeof window === "undefined") return;

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
	} catch {
		// ignore
	}
}

let currentSettings = loadSettings();
const listeners = new Set<() => void>();

export function getAudioSettings(): AudioSettings {
	return currentSettings;
}

export function setVolume(volume: number) {
	currentSettings = { ...currentSettings, volume };
	saveSettings(currentSettings);
	notifyListeners();
}

export function setMuted(muted: boolean) {
	currentSettings = { ...currentSettings, muted };
	saveSettings(currentSettings);
	notifyListeners();
}

export function subscribe(listener: () => void) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}

function notifyListeners() {
	listeners.forEach((listener) => listener());
}
