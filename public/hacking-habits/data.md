# The Hacking Habits: Speaker Notes & Data

## Talk Metadata

**Title:** The Hacking Habits
**Subtitle:** From cracking captchas to commanding AI agents
**Speaker:** Varunkumar Nagarajan
**Event:** Spark Lab Meetup
**Duration:** ~33 minutes (27 slides, leaving 5-7 min for Q&A)
**Objective:** "By the end of this talk, I want you to go home and hack something."

---

## The Four Habits (Tag System)

These colored badges appear throughout the presentation and accumulate across chapters. All four converge on Slide 22 (The School Agent).

| Habit | Color | Meaning | First Appears |
|-------|-------|---------|---------------|
| SPOT & SOLVE | #f59e0b (amber) | See a problem, build a fix | Slide 4 |
| AUTOMATE THE TEDIOUS | #22c55e (green) | Script it, schedule it, delegate it | Slide 12 |
| SHARE & MULTIPLY | #3b82f6 (blue) | A hack shared is a hack multiplied | Slide 4 |
| LEVEL UP THE TOOLS | #a78bfa (purple) | Yesterday's hack becomes today's platform | Slide 10 |

---

## Timing Breakdown

| Chapter | Slides | Time | Notes |
|---------|--------|------|-------|
| Intro | 1-2 | 2 min | Hook and objective |
| Chapter 1: The Early Days | 3-5 | 3 min | Blogging era, IRCTC captcha, hackathons |
| Chapter 2: Life Hacks | 6-8 | 3 min | Family domain names, wedding sites, baby monitor |
| Chapter 3: The Covid Era | 9-10 | 3 min | Mute button, hackathon projects |
| Chapter 4: The AI Era | 11-15 | 6 min | School diary digitization, portal automation, pivot moment |
| Chapter 5: Enter the Agents | 16-23 | 12 min | OpenClaw, setup, security, the snake squad, mission control, school agent |
| Closing | 24-27 | 4 min | Tools, habits revealed, reflection, thank you |

---

## Per-Slide Speaker Notes

### Slide 1: Title Slide (30 seconds)

**Title:** The Hacking Habits

**Talking Points:**
- Clean, direct entry. Let the title and subtitle speak.
- No need for verbal commentary; establish credibility with your presence.

**Timing:** 30 seconds

---

### Slide 2: Objective & About Me (90 seconds)

**Title:** Objective & About Me

**Talking Points:**
- Open with the objective: "By the end of this talk, I want you to go home and hack something."
- Walk through career timeline: D. E. Shaw (quant finance foundations), Recon, Backoffice, UI/UX, now Trinity at Arcesium. That's 18 years of continuous hacking.
- Personal side: Married, two kids, passionate about wildlife photography.
- The through-line is that hacking isn't just professional. It's how I solve problems everywhere.

**Timing:** 90 seconds

**Image:** `about-me.jpg` (personal/wildlife photo)

---

### Slide 3: Segue Slide (Transition)

**Title:** Chapter 1 / The Early Days / 2008-2012

**Talking Points:**
- Brief transition. Set the historical context.
- We're going back to where this all started.

**Timing:** ~15 seconds

---

### Slide 4: Blogging & IRCTC Captcha (90 seconds)

**Title:** Blogging & IRCTC Captcha

**Tags:** SPOT & SOLVE, SHARE & MULTIPLY

**Talking Points:**
- Started a tech blog around 2008, got featured as a top tech blogger in India.
- The IRCTC (Indian Railways) captcha story is iconic: I cracked their anti-bot protection to book train tickets programmatically.
- Terminal prompt: `$ python crack_captcha.py --target irctc` captures the hacker spirit.
- This is the first instance of SPOT & SOLVE: saw a problem (can't book tickets), built a solution.
- It's also SHARE & MULTIPLY because I blogged about it, and others learned and built on it.

**Timing:** 90 seconds

**Image:** `irctc.png` (captcha screenshot or blog post)

---

### Slide 5: Hackathon Era & Robots (90 seconds)

**Title:** Hackathon Era & Robots

**Tags:** SPOT & SOLVE, SHARE & MULTIPLY

**Talking Points:**
- The energy was infectious in the early 2010s. Hackathons were where I met other builders.
- Four areas: Social Media Hacks (building tools to solve everyday problems), Arduino Robots (hardware meets code), Hackathon Wins (competing and shipping fast), Open Source (contributing to the ecosystem).
- Each of these reinforced the cycle: spot a problem, solve it quickly, share the solution.

**Timing:** 90 seconds

**Image:** `hackathons.jpg` (hackathon and robot photos)

---

### Slide 6: Segue Slide (Transition)

**Title:** Chapter 2 / Life Hacks / When hacking meets parenting

**Talking Points:**
- The tone shifts here. We're moving from professional hacking to personal, everyday problem-solving.

**Timing:** ~15 seconds

---

### Slide 7: Family Life, Hacked (90 seconds)

**Title:** Family Life, Hacked

**Tags:** SPOT & SOLVE

**Talking Points:**
- When I had kids, I didn't just become a parent; I became a maker.
- Registered domain names for each child (adhiyan.in, arya.in) so they'd have an online identity from day one.
- Built a wedding invitation website instead of paper invites. Built baby announcement sites (two different ones for two kids).
- The physical baby monitor hack: instead of buying an expensive one, I set up an old smartphone and created a simple interface.
- Contributed open source code in between.
- Terminal prompt: `$ whois adhiyan.in` > "Domain available. Registering..." captures that moment of discovery.
- All of this is SPOT & SOLVE: life problems, hacked solutions.

**Timing:** 90 seconds

**Image:** `family-hacks.png` (wedding invitation, baby announcement website screenshots)

---

### Slide 8: Segue Slide (Transition)

**Title:** Chapter 3 / The Covid Era / Lockdowns, online school, and a burst of creativity

**Talking Points:**
- The pandemic forced everyone online. For builders, it became the most creative period.

**Timing:** ~15 seconds

---

### Slide 9: Physical Mute Button (60 seconds)

**Title:** Physical Mute Button

**Tags:** SPOT & SOLVE

**Talking Points:**
- School went virtual overnight. My son was in class, teachers were on Zoom, and the challenge was simple: kids accidentally unmute, talking over lessons.
- I built a physical mute button he could press instead of navigating the UI.
- The punchline: "Problem solved. Kid happy. Teacher confused."
- This is the essence of SPOT & SOLVE. Quick, creative, practical.

**Timing:** 60 seconds

**Image:** `mute-button.jpg` (photo of the physical button)

---

### Slide 10: Covid Hackathon Highlights (120 seconds)

**Title:** Covid Hackathon Highlights

**Tags:** SPOT & SOLVE, LEVEL UP THE TOOLS

**Talking Points:**
- Covid lockdowns gave us time. Hackathons moved online. Participation exploded.
- Four projects, each born from curiosity:
  1. **BringBackMyWorkspace** - Spatial audio to recreate the office feel during Zoom calls. (YT: https://www.youtube.com/watch?v=LInf2HsHRrk)
  2. **Squasher.pro** - A summarizer before LLMs existed. Condensed long threads into key points. (YT: https://www.youtube.com/watch?v=kov5EL8xpX0)
  3. **Camlio** - Background remover before virtual backgrounds became standard.
  4. **Nemo** - An early AI assistant for Aquata. (YT: https://www.youtube.com/watch?v=yfhf-txmPvQ)
- Tagline: "Each born from curiosity, shaped through preparation, refined in the sprint."
- This is LEVEL UP THE TOOLS: what I learned in these hacks fed into bigger platforms later.

**Timing:** 120 seconds

**Image:** `hackathons.jpg` (project cards or screenshots)

**YouTube Links:**
- BringBackMyWorkspace: https://www.youtube.com/watch?v=LInf2HsHRrk
- Squasher.pro: https://www.youtube.com/watch?v=kov5EL8xpX0
- Nemo: https://www.youtube.com/watch?v=yfhf-txmPvQ

---

### Slide 11: Segue Slide (Transition)

**Title:** Chapter 4 / The AI Era / Leveraging AI to hack my kids' school experience

**Talking Points:**
- Now the tools are different. AI is available. How do you use it to solve real problems?

**Timing:** ~15 seconds

---

### Slide 12: Digitizing the School Diary (90 seconds)

**Title:** Digitizing the School Diary

**Tags:** SPOT & SOLVE, AUTOMATE THE TEDIOUS, SHARE & MULTIPLY

**Talking Points:**
- My son's school sent paper diary pages home every day: homework, announcements, event dates.
- Parents struggled to track everything. I saw an opportunity.
- Workflow: photograph the diary pages at home, AI extracted events, built calendar.adhiyan.in to host it, shared with parents.
- Overnight, parents loved it. My son became a superstar at school because parents were engaged.
- This is all three habits: SPOT & SOLVE (saw the diary problem), AUTOMATE THE TEDIOUS (AI did the extraction), SHARE & MULTIPLY (built a tool parents could use).

**Timing:** 90 seconds

**Image:** `calendar.png` (screenshot of calendar.adhiyan.in)

---

### Slide 13: The School Portal Problem (60 seconds)

**Title:** The School Portal Problem

**Tags:** SPOT & SOLVE

**Talking Points:**
- The school had a mobile app for parent notifications. It was broken.
- No push notifications. App was unstable. Important content was buried.
- I wrote to the school. I wrote to the app developers. Got nowhere.
- So I did what any hacker would do: I built a better solution myself.

**Timing:** 60 seconds

---

### Slide 14: The School Portal Solution (90 seconds)

**Title:** The School Portal Solution

**Tags:** SPOT & SOLVE, AUTOMATE THE TEDIOUS, SHARE & MULTIPLY

**Talking Points:**
- Built an automated scraper using Puppeteer that monitored the school portal 24/7.
- Whenever content changed, the system detected it and sent real-time notifications to a Slack workspace I set up for parents.
- Terminal prompt: `$ node portal-scraper.js --watch` shows the automation running.
- Slack became the parent hub: updates, discussions, coordination.
- Again, three habits converge: SPOT & SOLVE (portal broken), AUTOMATE THE TEDIOUS (scraper runs automatically), SHARE & MULTIPLY (Slack workspace for all parents).

**Timing:** 90 seconds

**Image:** `portal-slack.png` (Slack notification screenshot)

---

### Slide 15: The Pivot Moment (30 seconds)

**Title:** The Pivot Moment

**Talking Points:**
- "Scripts worked. Automation worked. But the world was changing. Coding agents were becoming autonomous. I wanted to build something more intelligent."
- This is a dramatic pause. Let the gravity land. We're moving from scripts to agents.
- Audience is about to see the future.

**Timing:** 30 seconds

---

### Slide 16: Segue Slide (Transition)

**Title:** Chapter 5 / Enter the Agents / From scripts to autonomous AI teammates

**Talking Points:**
- We're entering the agent era now. Everything before was preparation for this.

**Timing:** ~15 seconds

---

### Slide 17: OpenClaw (120 seconds)

**Title:** OpenClaw

**Tags:** LEVEL UP THE TOOLS

**Talking Points:**
- Show the evolution: Clawdbot > Moltbot > OpenClaw.
- OpenClaw is my personal AI agent framework.
- Four core capabilities:
  1. **Long-term Memory** - It remembers context and history.
  2. **Tool Use** - It can call APIs, run scripts, access systems.
  3. **Always On** - It's continuously available, not just when I prompt it.
  4. **Multi-Agent** - Multiple specialized agents working together.
- Quote: "Think Jarvis from Iron Man. Ask it anything. It learns. It delivers."
- This represents LEVEL UP THE TOOLS: we've gone from scripts I write, to agents that think and act autonomously.

**Timing:** 120 seconds

---

### Slide 18: The Setup (90 seconds)

**Title:** The Setup

**Talking Points:**
- Hardware: Mac Studio (powerful, stable).
- Architecture: macOS VM for isolation and security.
- Integrations: Slack and Telegram for user interface.
- LLM access: Provided via GitHub to me and the agents.
- Anecdote: When I started building this, Twitter went wild about Mac Minis. People were buying them up. I already had the Mac Studio sitting there. Good timing.
- The setup is simple but intentional: isolation, security, accessibility.

**Timing:** 90 seconds

**Image:** `setup.jpg` (Mac Studio setup photo or architecture diagram)

---

### Slide 19: Security (60 seconds)

**Title:** Security

**Talking Points:**
- Before we see the fun stuff, let's talk responsibility.
- What do these agents have access to? Email, GitHub, social media handles (X, etc.), APIs, school data.
- How am I protecting against misuse? macOS VM isolation, scoped permissions (agents can't do everything), audit trail (I log all actions).
- This is not a demo of chaos. It's a carefully controlled system.

**Timing:** 60 seconds

---

### Slide 20: The Snake Squad (120 seconds)

**Title:** The Snake Squad

**Tags:** SPOT & SOLVE, AUTOMATE THE TEDIOUS, LEVEL UP THE TOOLS

**Talking Points:**
- My team of agents. All named snakes because my last name is Nagaraj (nagas = snakes in Sanskrit). Crowd moment.
- **Naga** - Chief of Staff. Breaks down big tasks, delegates to specialists.
- **Viper** - Principal Engineer. Handles architecture, complex technical problems.
- **Cobra** - Frontend Engineer. UI, design, user-facing work.
- **Boa** - Backend Engineer. APIs, infrastructure, databases.
- **Krait** - Test Engineer. Quality assurance, validation.
- Each has an email, GitHub account, X handle. They're not just abstractions; they're specialized personalities.
- The moment the audience realizes my son talks to these agents later, the payoff lands better.

**Timing:** 120 seconds

---

### Slide 21: My Workflow (90 seconds)

**Title:** My Workflow

**Tags:** AUTOMATE THE TEDIOUS

**Talking Points:**
- Here's how it works for me.
- I assign a task to Naga. Naga breaks it down into subtasks and delegates to the right specialist.
- The specialists execute. Everything funnels into Mission Control, a dashboard I monitor.
- Four use cases that show the breadth:
  1. **School Work** - Managing my kids' activities, events, assignments.
  2. **Photography Business** - Editing, portfolio management, customer communication.
  3. **Daily Feeds** - Curating news, summarizing articles.
  4. **Kids' Learning** - Creating educational content, answering questions.
- This is AUTOMATE THE TEDIOUS at scale.

**Timing:** 90 seconds

**Image:** `mission-control.png` (dashboard screenshot)

---

### Slide 22: The School Agent (120 seconds)

**Title:** The School Agent

**Tags:** SPOT & SOLVE, AUTOMATE THE TEDIOUS, SHARE & MULTIPLY, LEVEL UP THE TOOLS (ALL FOUR)

**Talking Points:**
- This is the climax. All four habits converge here for the first and only time.
- The school agent is specialized for school-related intelligence.
- Capabilities:
  - RAG (Retrieval Augmented Generation) for school questions: it can recall school documents, syllabus, past communications.
  - Print from Slack: if you want a printout of something, the agent can generate and queue it.
  - Auto-extract contests and events from portal updates and add them to family calendar.
  - Reminders for parents: "Science exhibition next Friday."
  - My son uses it directly through Slack instead of ChatGPT or Claude.
- Mockup: `@school-agent When is the next science exhibition?` and it responds with details.
- Point out to the audience: This is where all four habits live together. You spot problems (student needs info), you automate (agent handles it), you share (through Slack with family), you level up tools (the agent itself is the platform now).

**Timing:** 120 seconds

---

### Slide 23: A Kid and His Agent (60 seconds)

**Title:** A Kid and His Agent

**Talking Points:**
- Emotional beat. Let this breathe.
- "My son doesn't use ChatGPT or Claude directly. He talks to the agent in Slack."
- The simplicity of that statement is profound. An 11-year-old is interfacing with AI through a tool designed for his world, not the other way around.
- Pause. Let it land.

**Timing:** 60 seconds

---

### Slide 24: Tools I Use (60 seconds)

**Title:** Tools I Use

**Talking Points:**
- Not a lot of fancy ones. Simplicity in tooling is underrated.
- **Mac Studio** - The workhorse. Fast, reliable, always on.
- **GitHub Copilot** - My favorite coding agent. It understands context and suggests what I'd write anyway.
- **Claude.ai** - Writing and brainstorming. Thinking partner.
- **Gemini** - A bit of this for NanoBanana project.
- Subheading: "Not a lot of fancy ones." emphasizes that you don't need exotic tools to hack effectively.

**Timing:** 60 seconds

---

### Slide 25: The Four Habits Revealed (90 seconds)

**Title:** The Four Habits Revealed

**Talking Points:**
- This is the explicit payoff moment.
- Four habit cards in 2x2 grid, each with full definition:
  1. **SPOT & SOLVE** (amber) - See a problem, build a fix. Show up. Be curious. Ask "What's broken?" and then fix it.
  2. **AUTOMATE THE TEDIOUS** (green) - Script it, schedule it, delegate it. Your time is precious. Don't repeat yourself.
  3. **SHARE & MULTIPLY** (blue) - A hack shared is a hack multiplied. Your solution becomes others' foundation. Community grows.
  4. **LEVEL UP THE TOOLS** (purple) - Yesterday's hack becomes today's platform. Each iteration is faster, smarter, more powerful.
- Tagline: "You've been watching these build up throughout the talk. Here's what they are."

**Timing:** 90 seconds

---

### Slide 26: Closing (60 seconds)

**Title:** Closing

**Talking Points:**
- Quote block with reflection: "The intersection of my hobbies and my work has always been interesting. I never set out to build autonomous agents. I just solved problems. And one day, the tools got good enough to do something new."
- "You never know what you'll create."
- Circles back to opening objective: Go home and hack something. You don't need permission. You don't need a grand plan. Just start with a problem you see.

**Timing:** 60 seconds

---

### Slide 27: Thank You

**Title:** Thank You

**Talking Points:**
- Clean end card.
- Speaker name, no other text.
- Let the presentation rest.

**Timing:** Brief

---

## YouTube Links Reference

These are embedded in the hackathon project cards (Slide 10):

1. **BringBackMyWorkspace** - Spatial audio office feel
   Link: https://www.youtube.com/watch?v=LInf2HsHRrk

2. **Squasher.pro** - Thread summarizer (pre-LLM era)
   Link: https://www.youtube.com/watch?v=kov5EL8xpX0

3. **Nemo** - Early AI assistant for Aquata
   Link: https://www.youtube.com/watch?v=yfhf-txmPvQ

---

## Image Checklist

All images go in `/hacking-habits/images/`. Suggested filenames:

| Slide | Placeholder Description | Suggested Filename |
|-------|------------------------|--------------------|
| 2 | Personal/wildlife photo | `about-me.jpg` |
| 4 | IRCTC captcha or blog screenshot | `irctc.png` |
| 5 | Hackathon/robot photos | `hackathons.jpg` |
| 7 | Wedding invitation or baby announcement site | `family-hacks.png` |
| 9 | Physical mute button photo | `mute-button.jpg` |
| 12 | calendar.adhiyan.in screenshot | `calendar.png` |
| 14 | Slack notifications screenshot | `portal-slack.png` |
| 18 | Mac Studio setup or architecture diagram | `setup.jpg` |
| 21 | Mission Control dashboard screenshot | `mission-control.png` |

---

## Notes for Delivery

- **Pacing:** Use the `data-time` attributes on each slide. Slides with demos (YT links) can expand beyond their base timing with viewer questions.
- **Tone:** Start conversational (About Me), build energy through hackathon era, deepen with personal stories (family hacks), shift to wonder during agent era (slides 17-23), end with reflection.
- **Dramatic moments:** Slides 15 (pivot), 22 (school agent), 23 (kid and his agent) are emotional beats. Pause. Let silence work.
- **Visual clarity:** The habit tags accumulate visually. By Slide 22, the audience should see all four. This reinforces the "convergence" narrative.
- **Interactive elements:** If time allows, demo a live Slack interaction with an agent or show the Mission Control dashboard in real-time.
- **Q&A setup:** End with gratitude and the objective reiterated. Invite questions warmly.
