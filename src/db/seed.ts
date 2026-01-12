import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { quests } from "./schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const questsData = [
	// === EASY ===
	{
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
		title: "Meeting Bingo",
		description: "Track corporate buzzwords during meetings and win bingo.",
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
		requirements: ["Grid layout", "Touch events", "Animation libraries"],
	},
	{
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
		title: "npm Package Roast",
		description: "Analyze a package.json and roast the dependency choices.",
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
		requirements: ["npm Registry API", "Bundle analysis", "Data visualization"],
	},
	{
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
		title: "Variable Name Therapist",
		description: "Paste your code and get therapy for your naming choices.",
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
		title: "Git Archaeology",
		description: "Visualize repository history as an archaeological dig site.",
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
		title: "Type Racer for Vim",
		description: "Competitive typing game but you edit code using Vim motions.",
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
		title: "Merge Conflict Visualizer",
		description: "Turn git merge conflicts into a visual territory war game.",
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

	// === NEW QUESTS ===

	// EASY
	{
		title: "Stack Overflow Fortune Teller",
		description:
			"Predict your debugging future based on your recent Stack Overflow searches.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["React", "Chrome Extension", "LocalStorage"],
		details: `Build a fortune-telling browser extension:

• Track Stack Overflow searches (locally)
• Generate "prophecies" based on error patterns
• "You will mass 3 semicolons this week"
• Weekly debugging horoscope
• Lucky framework of the day
• Share your fortune as an image`,
		requirements: [
			"Browser extension basics",
			"Pattern matching",
			"Image generation",
		],
	},
	{
		title: "Localhost Postcard Generator",
		description:
			"Send digital postcards from your localhost to friends' localhosts.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["Node.js", "Canvas", "QR Code"],
		details: `Create shareable dev postcards:

• "Wish you were here at localhost:3000"
• Auto-generate based on your current project
• Include fake weather (CPU temp), local time
• QR code that links to your GitHub
• Vintage postcard templates
• Terminal-style ASCII art option`,
		requirements: [
			"Canvas image manipulation",
			"QR code generation",
			"System info APIs",
		],
	},
	{
		title: "Dependency Zodiac",
		description:
			"Determine your developer zodiac sign based on your most used npm packages.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["React", "npm API", "SVG"],
		details: `Astrology for developers:

• Scan package.json history
• Map dependencies to zodiac traits
• "Rising sign: Express, Moon in React"
• Compatibility checker with other devs
• Daily dependency horoscope
• Shareable zodiac cards`,
		requirements: [
			"npm package analysis",
			"SVG manipulation",
			"Fun algorithm design",
		],
	},
	{
		title: "404 Graveyard",
		description:
			"A memorial site for all the dead links and discontinued APIs you've encountered.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["React", "IndexedDB", "CSS Animations"],
		details: `Honor fallen web resources:

• Browser extension to log 404s and dead APIs
• Generate tombstones with last-seen date
• "RIP Parse.com 2011-2017"
• Graveyard visualization with fog effects
• Obituary generator for deprecated packages
• Pour one out animation`,
		requirements: [
			"IndexedDB storage",
			"CSS atmospheric effects",
			"Extension content scripts",
		],
	},
	{
		title: "README Karaoke",
		description:
			"Turn any README into a karaoke experience with dramatic narration.",
		difficulty: "easy",
		duration: "~1 Week",
		tags: ["React", "Web Speech API", "Framer Motion"],
		details: `Dramatic documentation reading:

• Paste any README or fetch from GitHub
• Auto-generate dramatic reading with TTS
• Highlight text as it's being read
• Background music matching the project type
• Applause at the end of installation steps
• Record and share your performances`,
		requirements: [
			"Web Speech API",
			"Text synchronization",
			"Audio mixing basics",
		],
	},
	{
		title: "Procrastination Leaderboard",
		description:
			"Track how long you've had browser tabs open without reading them.",
		difficulty: "easy",
		duration: "Weekend",
		tags: ["Browser Extension", "React", "Charts.js"],
		details: `Competitive tab hoarding:

• Track tab age across browser sessions
• "This MDN article has been open for 47 days"
• Achievements: "Tab Archaeologist", "Professional Procrastinator"
• Compare with friends
• Shame notifications for ancient tabs
• Hall of fame for longest-lived tabs`,
		requirements: [
			"Browser tab APIs",
			"Persistent storage",
			"Gamification mechanics",
		],
	},

	// MEDIUM
	{
		title: "Code Smell Perfumery",
		description:
			"Analyze code and recommend actual perfumes that match its quality.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "AST Parsing", "Puppeteer"],
		details: `Synesthetic code analysis:

• Parse code for various smell patterns
• Map code smells to actual fragrance notes
• "Your callback hell pairs well with tobacco and regret"
• Generate perfume bottle labels
• Scrape real perfume databases for matches
• Gift recommendation for code reviewers`,
		requirements: [
			"Static code analysis",
			"Web scraping",
			"Creative mapping algorithms",
		],
	},
	{
		title: "Terminal Tamagotchi",
		description:
			"A pet that lives in your terminal and thrives on your git commits.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["Rust", "CLI", "SQLite"],
		details: `Raise a terminal creature:

• Pet health tied to coding activity
• Feed it with commits, tests make it happy
• Gets sad during long meetings (no typing)
• Evolution based on languages you use
• Can die from force pushes to main
• ASCII art animations`,
		requirements: [
			"CLI application architecture",
			"Git hooks integration",
			"State persistence",
		],
	},
	{
		title: "Impostor Syndrome Simulator",
		description:
			"A game where you're a junior dev trying to survive standups without being exposed.",
		difficulty: "medium",
		duration: "~3 Weeks",
		tags: ["React", "Game Engine", "TypeScript"],
		details: `Social survival game:

• Daily standup scenarios with dialogue choices
• "What did you do yesterday?" pressure meter
• Learn real tech terms to survive
• Boss battles: architecture discussions
• Unlock confidence points
• Multiplayer mode: spot the real impostor`,
		requirements: [
			"Dialogue system design",
			"Game state management",
			"Narrative branching",
		],
	},
	{
		title: "WiFi Weather Report",
		description:
			"Visualize network quality as weather patterns throughout your day.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["Electron", "D3.js", "Network APIs"],
		details: `Network conditions as climate:

• Continuous ping monitoring
• Sunny = low latency, stormy = packet loss
• Historical weather maps of your connection
• Predict "network weather" based on patterns
• Alert when storms are coming
• Beautiful weather widget for desktop`,
		requirements: [
			"Network diagnostics",
			"Time-series visualization",
			"Desktop widget development",
		],
	},
	{
		title: "Callback Hell Elevator",
		description:
			"Visualize nested callbacks as an elevator descending into the abyss.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "Babel", "Three.js"],
		details: `Journey through callback depths:

• Paste code, watch elevator descend per nesting level
• Each floor has themed decorations (fire at bottom)
• Refactoring makes elevator go up
• Side-by-side with Promise/async version
• Achievement: "Escaped the basement"
• Export journey as shareable video`,
		requirements: [
			"AST nesting analysis",
			"3D scene management",
			"Code transformation",
		],
	},
	{
		title: "Spaghetti Code Untangler",
		description:
			"A puzzle game where you physically untangle dependency graphs.",
		difficulty: "medium",
		duration: "~3 Weeks",
		tags: ["React", "D3.js", "Force Simulation"],
		details: `Interactive code cleanup:

• Import real projects or generate puzzles
• Drag nodes to untangle the graph
• Score based on crossings eliminated
• Learn about circular dependencies
• Multiplayer race to untangle
• Generate beautiful dependency art when solved`,
		requirements: [
			"Force-directed graph algorithms",
			"Crossing detection",
			"Smooth drag interactions",
		],
	},
	{
		title: "Legacy Code Museum",
		description:
			"An interactive museum of ancient code patterns with historical context.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "Three.js", "MDX"],
		details: `Walk through coding history:

• 3D museum with exhibits (jQuery wing, Flash memorial)
• Interactive code samples you can run
• Audio tours explaining why we did things that way
• "Touch to refactor" interactive displays
• Gift shop with deprecated framework merch mockups
• Contribute your own artifacts`,
		requirements: [
			"3D navigation",
			"Code sandboxing",
			"Content management",
		],
	},
	{
		title: "Rubber Duck Debugger",
		description:
			"Voice-activated debugging companion that asks the right questions.",
		difficulty: "medium",
		duration: "~2 Weeks",
		tags: ["React", "Web Speech API", "OpenAI API"],
		details: `Your quacking debugging partner:

• Speak your problem out loud
• Duck asks clarifying questions
• "Have you tried console.log there?"
• Detects frustration and offers encouragement
• Keeps session history of solved problems
• Different duck personalities (stern duck, supportive duck)`,
		requirements: [
			"Speech recognition",
			"Conversational flow design",
			"Context management",
		],
	},

	// HARD
	{
		title: "Codebase City Builder",
		description:
			"Visualize your entire codebase as a living city that grows with commits.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["Three.js", "React", "Git", "WebGL"],
		details: `Urban planning for code:

• Files become buildings (size = lines of code)
• Directories are neighborhoods
• Commits animate construction/demolition
• Traffic = import/export relationships
• Pollution = code smells and complexity
• Time-lapse city growth from git history`,
		requirements: [
			"Procedural 3D generation",
			"Git history parsing",
			"Large-scale WebGL optimization",
			"Metric calculation algorithms",
		],
	},
	{
		title: "Distributed Whiteboard Wars",
		description:
			"Real-time collaborative whiteboard with territory control mechanics.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "Canvas", "WebRTC", "CRDT"],
		details: `Competitive collaboration:

• Draw to claim territory on shared canvas
• Team-based color wars
• Undo wars: erase enemy drawings
• Power-ups: larger brush, color bombs
• Spectator mode with replay
• Export timelapse of the battle`,
		requirements: [
			"CRDT implementation",
			"WebRTC peer connections",
			"Canvas optimization for real-time",
			"Game balancing",
		],
	},
	{
		title: "API Response Orchestra",
		description:
			"Turn your microservices' responses into a musical composition.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "Web Audio API", "WebSocket", "D3.js"],
		details: `Sonification of infrastructure:

• Each service is an instrument
• Response time = pitch, status = rhythm
• 200s are harmonious, 500s are dissonant
• Real-time performance of your production traffic
• Record and export compositions
• Alert when the music sounds wrong`,
		requirements: [
			"Audio synthesis",
			"Real-time data streaming",
			"Musical theory implementation",
			"Metric collection integration",
		],
	},
	{
		title: "Memory Palace IDE",
		description:
			"Navigate your codebase as a 3D spatial environment you can memorize.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["Three.js", "React", "Monaco Editor", "WebXR"],
		details: `Spatial code navigation:

• Codebase rendered as explorable 3D space
• Place code snippets in memorable locations
• VR support for full immersion
• Bookmark locations for quick travel
• Collaborative tours for onboarding
• Memory training mode with code quizzes`,
		requirements: [
			"3D space generation from code structure",
			"WebXR integration",
			"Spatial audio",
			"Code editor in 3D space",
		],
	},
	{
		title: "Blockchain of Blame",
		description:
			"Immutable, distributed record of who broke the build and when.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["Node.js", "libp2p", "React", "CI/CD"],
		details: `Decentralized accountability:

• P2P network between team members
• CI failures create immutable blame records
• Consensus required to assign blame
• Reputation scores based on fix speed
• Appeals process with evidence submission
• Historical blame archaeology`,
		requirements: [
			"P2P networking",
			"Consensus algorithms",
			"CI/CD webhook integration",
			"Cryptographic verification",
		],
	},
	{
		title: "Quantum Diff Viewer",
		description:
			"View all possible states of a file simultaneously until you observe one.",
		difficulty: "hard",
		duration: "1+ Month",
		tags: ["React", "WebGL", "Git", "Shader Programming"],
		details: `Superposition of code states:

• Visualize file across multiple branches at once
• Sections blur between versions until clicked
• "Collapse the wavefunction" to choose a version
• Probability cloud showing likely merge outcomes
• Entangled files highlight together
• Beautiful quantum-inspired visual effects`,
		requirements: [
			"Multi-branch git analysis",
			"Custom WebGL shaders",
			"Complex state visualization",
			"Smooth interpolation algorithms",
		],
	},
];

async function main() {
	console.log("Seeding database with quests...");

	await db.delete(quests);

	await db.insert(quests).values(questsData);

	console.log(`Created ${questsData.length} quests`);
}

main()
	.then(() => {
		console.log("Seeding complete");
		process.exit(0);
	})
	.catch((e) => {
		console.error("Error seeding database:", e);
		process.exit(1);
	});
