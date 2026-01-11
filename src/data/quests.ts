export type Difficulty = "easy" | "medium" | "hard";

export type Quest = {
	id: string;
	title: string;
	description: string;
	difficulty: Difficulty;
	duration: string;
	tags: string[];
	details: string;
	requirements: string[];
};

export const quests: Quest[] = [
	// === EASY ===
	{
		id: "1",
		title: "Commit Message Roaster",
		description:
			"Analyze git commits and roast bad commit messages with witty comebacks.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["Node.js", "Git", "CLI"],
		details: `Build a CLI tool that judges your commit history:

• Parse git log and analyze commit messages
• Score messages based on quality (length, keywords, emoji abuse)
• Generate sarcastic feedback for lazy commits like "fix" or "wip"
• Hall of shame for worst commits
• Suggest better commit messages
• ASCII art reactions`,
		requirements: [
			"Git command basics",
			"Node.js child_process",
			"String manipulation",
		],
	},
	{
		id: "2",
		title: "Fake Startup Generator",
		description:
			"Generate ridiculous startup ideas with names, pitches, and fake valuations.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["React", "Framer Motion", "LocalStorage"],
		details: `Create a startup idea generator:

• Combine random buzzwords into startup names (Uber for Cats)
• Generate elevator pitches with industry jargon
• Fake valuation calculator based on buzzword density
• "Pivot" button that slightly changes the idea
• Save favorites to your "portfolio"
• Share ridiculous ideas on Twitter`,
		requirements: [
			"Random generation logic",
			"Basic animations",
			"Social sharing APIs",
		],
	},
	{
		id: "3",
		title: "Keyboard Sounds Customizer",
		description:
			"Turn your typing into a mechanical keyboard, typewriter, or lightsaber.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["Electron", "Web Audio API", "CSS"],
		details: `Build a desktop app for typing sounds:

• Different sound packs (mechanical, typewriter, piano, 8-bit)
• Per-key sound mapping
• Volume and pitch controls
• Special sounds for Enter, Backspace, Space
• Record your own sound packs
• Minimal tray app interface`,
		requirements: [
			"Electron basics",
			"Audio playback",
			"Global keyboard hooks",
		],
	},
	{
		id: "4",
		title: "CSS Battle Trainer",
		description:
			"Practice recreating designs with CSS and get scored on accuracy.",
		difficulty: "easy",
		duration: "~1 Week",
		tags: ["React", "Monaco Editor", "html2canvas"],
		details: `Create a CSS practice arena:

• Daily challenges with target images
• Live preview of your CSS
• Pixel-perfect comparison scoring
• Character count optimization mode
• Global leaderboard by challenge
• Solution sharing after completion`,
		requirements: [
			"Image comparison algorithms",
			"Code editor integration",
			"Canvas manipulation",
		],
	},
	{
		id: "5",
		title: "Meeting Bingo",
		description:
			"Track corporate buzzwords during meetings and win bingo.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["React", "PWA", "Confetti"],
		details: `Build a meeting survival game:

• Generate bingo cards with corporate phrases
• "Let's circle back", "synergy", "low-hanging fruit"
• Tap to mark when you hear them
• Celebration animation on bingo
• Statistics: worst offenders, average bingo time
• Custom word lists for your company`,
		requirements: [
			"Grid layout",
			"Touch events",
			"Animation libraries",
		],
	},
	{
		id: "6",
		title: "Spotify Wrapped Faker",
		description:
			"Generate fake Spotify Wrapped for any music taste you want to pretend to have.",
		difficulty: "easy",
		duration: "~1 Week",
		tags: ["React", "Canvas", "Spotify API"],
		details: `Create customizable music year reviews:

• Pick artists/songs from Spotify API
• Generate story-style slides
• Fake statistics (listening minutes, top genres)
• Export as shareable images
• Compare with real Wrapped
• Roast mode: generate embarrassing stats`,
		requirements: [
			"Spotify Web API",
			"Canvas/image generation",
			"Story-style UI",
		],
	},
	{
		id: "7",
		title: "Excuse Generator for Developers",
		description:
			"Technical excuses for missed deadlines with fake stack traces.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["React", "TypeScript", "Clipboard API"],
		details: `Generate believable dev excuses:

• "It works on my machine" certificate generator
• Fake error logs and stack traces
• Blame generator (npm, AWS, DNS)
• Slack message templates
• Excuse severity slider (minor delay → project pivot)
• Copy-paste ready with formatting`,
		requirements: [
			"Text generation logic",
			"Clipboard API",
			"Fake data patterns",
		],
	},

	// === MEDIUM ===
	{
		id: "8",
		title: "Localhost Radio Station",
		description:
			"Turn your development environment into a synthwave radio with coding sounds.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["Electron", "Web Audio API", "WebSocket"],
		details: `Build an ambient audio app for coding:

• Layered soundscapes (rain, coffee shop, server room)
• React to IDE events (compile sounds, error alerts)
• Synthwave/lo-fi background music integration
• "Focus mode" that intensifies during long typing sessions
• Visualizer in menubar
• Pomodoro integration with sound transitions`,
		requirements: [
			"Audio mixing and layering",
			"IDE extension APIs",
			"Background processes",
		],
	},
	{
		id: "9",
		title: "npm Package Roast",
		description:
			"Analyze a package.json and roast the dependency choices.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["Node.js", "npm Registry API", "React"],
		details: `Create a dependency analyzer with attitude:

• Upload package.json or paste npm package name
• Analyze bundle size, maintenance status, alternatives
• Generate roasts for questionable choices
• Suggest lighter alternatives
• "Dependency shame" score
• Timeline of when packages were last cool`,
		requirements: [
			"npm Registry API",
			"Bundle analysis",
			"Data visualization",
		],
	},
	{
		id: "10",
		title: "Time Zone Friendship Tester",
		description:
			"Visualize overlap between your schedule and friends across time zones.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "D3.js", "Luxon"],
		details: `Build a time zone coordination tool:

• Add friends with their time zones
• Visual 24-hour circle showing everyone's day
• Mark sleeping hours, work hours, "botherable" hours
• Find optimal meeting times
• "Friendship difficulty" score based on overlap
• Calendar integration for availability`,
		requirements: [
			"Time zone math with DST",
			"Circular visualizations",
			"Calendar API basics",
		],
	},
	{
		id: "11",
		title: "Fake Data Artisan",
		description:
			"Generate realistic fake data that tells a story, not random garbage.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "Faker.js", "JSON Schema"],
		details: `Create a smart fake data generator:

• Define data schemas with relationships
• Generate consistent data (same user across tables)
• Temporal consistency (created_at < updated_at)
• Realistic distributions (not everyone born Jan 1)
• Export to JSON, SQL, CSV, GraphQL mocks
• Save and share schemas`,
		requirements: [
			"Schema design",
			"Statistical distributions",
			"Data export formats",
		],
	},
	{
		id: "12",
		title: "Portfolio Chaos Mode",
		description:
			"Add a hidden konami code to your portfolio that breaks everything hilariously.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "GSAP", "Canvas"],
		details: `Build chaotic easter eggs:

• Konami code activates chaos mode
• Components start falling with physics
• Cursor leaves trails of fire
• Text becomes Comic Sans
• 90s under construction GIFs appear
• Clippy offers to help with your resume`,
		requirements: [
			"Physics simulations",
			"Advanced animations",
			"DOM manipulation",
		],
	},
	{
		id: "13",
		title: "Regex Escape Room",
		description:
			"Escape rooms where each puzzle requires writing the correct regex.",
		difficulty: "medium",
		duration: "~3 Weeks",
		tags: ["React", "Regex", "Game Design"],
		details: `Create regex-based puzzles:

• Narrative-driven escape room scenarios
• Each lock requires a regex pattern
• Visual feedback on matches
• Hint system with regex explanation
• Multiple difficulty levels
• Time attack mode`,
		requirements: [
			"Regex engine internals",
			"Game state management",
			"Educational UX design",
		],
	},
	{
		id: "14",
		title: "Pull Request Roulette",
		description:
			"Randomly assign yourself to open source PRs for forced learning.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "GitHub API", "OAuth"],
		details: `Build a contribution randomizer:

• Filter by language, difficulty, labels
• Spin wheel to get random PR to review
• Difficulty estimation based on file changes
• Track your roulette history
• Streak system for consistent reviewing
• Weekly digest of PRs matching your skills`,
		requirements: [
			"GitHub API deep dive",
			"OAuth flows",
			"Gamification patterns",
		],
	},
	{
		id: "15",
		title: "Variable Name Therapist",
		description:
			"Paste your code and get therapy for your naming choices.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "AST Parsing", "OpenAI API"],
		details: `Create a code naming analyzer:

• Parse code and extract all identifiers
• Analyze naming patterns and conventions
• Detect anti-patterns (x, temp, data2)
• Suggest better names with explanations
• "Confession booth" mode for worst names
• Generate naming convention report`,
		requirements: [
			"AST parsing (Babel/TypeScript)",
			"NLP basics",
			"Code analysis patterns",
		],
	},

	// === HARD ===
	{
		id: "16",
		title: "Vibe-Based Music Player",
		description:
			"Music player that reads your webcam and plays songs matching your mood.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "TensorFlow.js", "Spotify API", "WebRTC"],
		details: `Build an emotion-aware music player:

• Real-time facial expression analysis
• Map emotions to music attributes (energy, valence)
• Create dynamic playlists from Spotify
• Smooth transitions between moods
• "Force happy" mode for bad days
• Privacy mode: process locally only`,
		requirements: [
			"ML model deployment in browser",
			"Spotify recommendation API",
			"Real-time video processing",
			"Privacy-conscious architecture",
		],
	},
	{
		id: "17",
		title: "Git Archaeology",
		description:
			"Visualize repository history as an archaeological dig site.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "Three.js", "Git", "D3.js"],
		details: `Create 3D git history exploration:

• Repository visualized as layered earth
• Commits are artifacts to excavate
• Deeper = older commits
• Interactive 3D digging mechanic
• Find "treasures" (first commits, deleted features)
• Export findings as shareable stories`,
		requirements: [
			"Three.js advanced usage",
			"Git internals deep dive",
			"3D interaction design",
			"Large data visualization",
		],
	},
	{
		id: "18",
		title: "Type Racer for Vim",
		description:
			"Competitive typing game but you edit code using Vim motions.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "Monaco Editor", "WebSocket", "Redis"],
		details: `Build a Vim skills competition platform:

• Real challenges: refactor this code, fix this bug
• Vim emulation in browser
• Replay system showing keystrokes
• Multiplayer races in real-time
• Efficiency scoring (fewer keystrokes wins)
• Daily challenges with global leaderboard`,
		requirements: [
			"Vim keybinding implementation",
			"Real-time multiplayer architecture",
			"Keystroke recording and replay",
			"Competitive scoring algorithms",
		],
	},
	{
		id: "19",
		title: "404 Game Collection",
		description:
			"Turn every 404 page into a playable mini-game that earns rewards.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "Phaser.js", "Service Workers", "Web Monetization"],
		details: `Create 404 page game framework:

• Library of mini-games (snake, pong, flappy bird)
• Play while waiting for page to load
• Earn points across websites using same library
• Global leaderboard for 404 games
• Customizable themes for different sites
• PWA support for offline 404 pages`,
		requirements: [
			"Game development basics",
			"Cross-site data sharing",
			"Service worker caching",
			"Embeddable widget architecture",
		],
	},
	{
		id: "20",
		title: "Merge Conflict Visualizer",
		description:
			"Turn git merge conflicts into a visual territory war game.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "Pixi.js", "Git", "WebSocket"],
		details: `Gamify merge conflict resolution:

• Visualize conflicts as territory battles
• Each developer's changes are "armies"
• Drag and drop to resolve conflicts
• Real-time collaboration on resolution
• Instant preview of merged result
• Integration with VS Code extension`,
		requirements: [
			"Git merge internals",
			"Real-time collaboration (CRDT)",
			"Game mechanics design",
			"IDE extension development",
		],
	},
];

export const getQuestById = (id: string): Quest | undefined => {
	return quests.find((quest) => quest.id === id);
};

export const getQuestsByDifficulty = (difficulty: Difficulty): Quest[] => {
	return quests.filter((quest) => quest.difficulty === difficulty);
};

export const getQuestsByTag = (tag: string): Quest[] => {
	return quests.filter((quest) =>
		quest.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())),
	);
};
