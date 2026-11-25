# Meryl’s SAT Studio

## Practice test archive and saved words

The Practice test archive (`#/archives`) preserves the supplied Archive01–Archive09 documents as compressed page scans. Browse by folder, title, or document type; open any page; keep answers and working notes; and select a source answer document for checking. Documents are not automatically paired and scanned questions are not auto-graded. Multiple questions on one original page remain together to preserve passages, tables, diagrams, and answer choices.

Use **Save an unknown word from this question** in a built-in question or archive page. A word or phrase can be typed, with optional English and Chinese meanings. Existing vocabulary is marked unknown; new words join the collection and are included in progress exports. Their question context is retained. Edit a new word’s meaning in the Word library. The site uses the same existing local-storage key, preserving prior vocabulary progress.

Built-in sessions now select distinct questions and shorten the session if fewer questions match. Mistakes are queued for later review rather than replacing the next question. The additional English drills live in `extra-practice.js`; the scan library lives in `archive-data.js`, `study-library.js`, `library.css`, and `archive-pages/`.

A white, pastel-blue, static SAT study app. Open `index.html` directly, or run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000/#/home`.

No build, packages, API key, or account required. Source: `index.html`, `style.css`, `content.js`, `app.js`. `.nojekyll` tells GitHub Pages to serve these files directly.

## GitHub Pages

After committing and pushing the files, select Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save. The expected project URL is `https://s5cy.github.io/s/`, unless a custom domain is configured. Hash routes work on GitHub Pages without rewrite rules:

- `#/home`
- `#/practice?topic=personal`
- `#/vocab`
- `#/english?topic=essential`
- `#/math?topic=geometry`
- `#/notebook`

Progress is browser-local. Export/import it through settings; a localhost and GitHub Pages URL do not share storage. No commits or pushes are performed by the app.

## Content and limits

Vocabulary is transcribed from the supplied 2023–2025 screenshots, deduplicated by word, with clarified English definitions. Personal focus words have additional sentence/synonym/antonym notes. The rest of the library has English definitions and Chinese translations. These are recollection sheets, not an official SAT word list.

Questions are original SAT-style exercises. Math repeats use deterministic number families; English repeats use the built-in bank. There is no live AI generation. Topic mastery is accuracy across the last ten answers, with five attempts needed for 100%. Flashcard schedules are 1, 3, 7, 14, and 30 days; a miss returns in one minute. An unseen word is due immediately.

The provided total (1370) and sections (710 Math / 560 English) do not add up. The dashboard labels that discrepancy, and settings let the student correct it.
