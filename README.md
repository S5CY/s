# Meryl’s SAT Studio

## Practice Tests and saved words

Practice Tests (`#/archives`) groups the supplied Archive01–Archive09 papers by year (2023–2026), month, and version. All 7,338 unique source pages were processed locally. The bank contains 7,821 individual questions with matching supplied key entries across 122 test versions. Short practices use this bank by default, put unseen questions first, and avoid duplicate question fingerprints within a session. Choose a test version and “All matching questions” to work through its extracted questions.

Question images preserve the source wording and diagrams; answer letters keep their original order. Numerical answers accept fractions and equivalent decimals. After grading, the matched key crop and links to both source pages appear. The original files remain accessible. The C-format June 2025 paper has separate monochrome practice images to remove its green answer highlights. Extracted text is optional and may contain OCR errors.

`question-import-audit.json` reports coverage per test and excludes missing, conflicting, or unaligned key entries from grading. Some recollection papers and keys are incomplete. A test's matched question count is not a claim that its entire original paper was extracted. Topic tags use wording heuristics; select Math or Reading & Writing for broader coverage.

Use **Save an unknown word from this question** in a built-in question or archive page. A word or phrase can be typed, with optional English and Chinese meanings. Existing vocabulary is marked unknown; new words join the collection and are included in progress exports. Their question context is retained. Edit a new word’s meaning in the Word library. The site uses the same existing local-storage key, preserving prior vocabulary progress.

Sessions shorten if fewer distinct questions match. Mistakes are saved for later review. The original exercises remain available under “Original short drills.” Matched practice lives in `test-question-bank.js`, `question-practice.js`, and `question-practice.css`. Source scans live in `archive-data.js`, `study-library.js`, `library.css`, and `archive-pages/`. Imported attempts store question IDs instead of image/text snapshots to keep progress storage compact.

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
- `#/archives?year=2025&month=6`

Progress is browser-local. Export/import it through settings; a localhost and GitHub Pages URL do not share storage. No commits or pushes are performed by the app.

## Content and limits

Vocabulary is transcribed from the supplied 2023–2025 screenshots, deduplicated by word, with clarified English definitions. Personal focus words have additional sentence/synonym/antonym notes. The rest of the library has English definitions and Chinese translations. These are recollection sheets, not an official SAT word list.

Default practices use extracted source questions; original drills are an optional collection. There is no live AI generation. Topic mastery is accuracy across the last ten answers, with five attempts needed for 100%. Vocabulary progress remains under the existing `meryl-sat-studio-v2` storage key.

The provided total (1370) and sections (710 Math / 560 English) do not add up. The dashboard labels that discrepancy, and settings let the student correct it.
