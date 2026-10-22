# for Anny ♥

A one-page interactive love letter: a sealed letter, a hold-to-fill “missing you” meter, a deck of notes, flip cards, a date-idea machine, “open when…” notes, and one very important question.

## Run it

Just open `index.html` in a browser, or serve it locally:

```bash
python -m http.server 4173
```

Then visit `http://localhost:4173`.

The fonts are loaded from Google Fonts, so the full look needs an internet connection. Everything else runs locally with no build step and no dependencies.

## Make it yours

- **The letter:** edit the paragraphs inside `.love-letter` in `index.html`.
- **Love notes:** edit the `loveNotes` list at the top of `script.js`.
- **Flashcards:** edit the `flashcardData` list at the top of `script.js`.
- **Date ideas:** edit the `dateIdeas` list at the top of `script.js`.
- **Open-when notes:** edit the `openWhenNotes` object at the top of `script.js`.
- **The final question:** edit the copy inside `.ask-card` in `index.html`.
- **Colours and type:** all the colours and font choices live in the `:root` variables at the top of `styles.css`.

Saved date ideas and the kiss counter are stored in the browser using `localStorage`, so Anny’s little plan stays put when she comes back.
