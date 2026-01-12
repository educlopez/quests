import { useEffect } from "react";
import { getAudioSettings, subscribe } from "@/stores/audio-settings";

const SOUNDS = {
	intro: "/intro.mp3",
	next: "/next.mp3",
	prev: "/prev.mp3",
} as const;

let introAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
let pendingIntroPlay = false;

function getIntroAudio() {
	if (!introAudio) {
		introAudio = new Audio(SOUNDS.intro);
		introAudio.loop = true;
	}
	return introAudio;
}

function applySettings(audio: HTMLAudioElement) {
	const settings = getAudioSettings();
	audio.volume = settings.muted ? 0 : settings.volume;
}

function tryPlayIntro() {
	if (!pendingIntroPlay) return;

	const audio = getIntroAudio();
	applySettings(audio);
	audio.play().catch(() => {});
}

function unlockAudio() {
	if (audioUnlocked) return;
	audioUnlocked = true;

	tryPlayIntro();

	document.removeEventListener("click", unlockAudio);
	document.removeEventListener("touchstart", unlockAudio);
	document.removeEventListener("keydown", unlockAudio);
}

if (typeof document !== "undefined") {
	document.addEventListener("click", unlockAudio);
	document.addEventListener("touchstart", unlockAudio);
	document.addEventListener("keydown", unlockAudio);
}

export function useIntroMusic(shouldPlay: boolean) {
	useEffect(() => {
		const audio = getIntroAudio();
		applySettings(audio);
		pendingIntroPlay = shouldPlay;

		if (shouldPlay) {
			if (audioUnlocked) {
				audio.play().catch(() => {});
			}
		} else {
			audio.pause();
		}

		const unsubscribe = subscribe(() => {
			applySettings(audio);
		});

		return () => {
			audio.pause();
			pendingIntroPlay = false;
			unsubscribe();
		};
	}, [shouldPlay]);
}

export function playNextSound() {
	const settings = getAudioSettings();
	if (settings.muted) return;

	const audio = new Audio(SOUNDS.next);
	audio.volume = settings.volume;
	audio.play().catch(() => {});
}

export function playPrevSound() {
	const settings = getAudioSettings();
	if (settings.muted) return;

	const audio = new Audio(SOUNDS.prev);
	audio.volume = settings.volume;
	audio.play().catch(() => {});
}
