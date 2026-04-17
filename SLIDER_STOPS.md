# How to Configure the Home Page Slider

The Work ↔ Life slider on the home page is driven by a list of "stops" you define in `content/_index.md`. This doc explains how it works and how to set it to any number of stops you want — including 10 or 12.

---

## How the stops work

Each stop is one set of `{ tagline, blurb, descriptors }` shown together on the hero. The slider is divided into **evenly-spaced positions** based on how many stops you have. Position 0 (far left) shows the first stop. Position 100 (far right) shows the last. When you drag, the slider snaps to whichever stop is nearest, with a brief crossfade at the midpoints.

The **background colour** transitions smoothly teal → orange across the whole slider regardless of stop count. Colours don't care how many stops you have.

---

## Where to edit

Everything lives in one file:

```
content/_index.md
```

The file uses YAML front matter (the block between the `---` lines at the top). The slider reads the `stops:` list. Add, remove, or reorder entries — no code changes needed.

### YAML basics (for non-developers)

- Indentation matters. Use **two spaces**, not tabs.
- Each stop starts with a `-` (hyphen + space).
- Strings with apostrophes or special characters should be wrapped in `"double quotes"`.
- `descriptors:` is a list — either in-line `["a", "b"]` or with more hyphens on new lines.

---

## Slider positions by stop count

Each stop sits at an evenly-spaced position on the 0–100 slider. This table shows where each stop lands:

| Stops | Slider positions (%) |
|-------|----------------------|
| 2     | 0, 100 |
| 3     | 0, 50, 100 |
| 5     | 0, 25, 50, 75, 100 |
| 7     | 0, 17, 33, 50, 67, 83, 100 |
| 10    | 0, 11, 22, 33, 44, 56, 67, 78, 89, 100 |
| 12    | 0, 9, 18, 27, 36, 45, 55, 64, 73, 82, 91, 100 |

Formula if you want more: position of stop `i` (0-indexed) out of `N` total = `i / (N − 1) × 100`.

---

## Example: 10 stops

Paste this block as the `stops:` list in `content/_index.md`, then replace each placeholder with real copy.

```yaml
stops:
  - tagline: "Stop 1 — your Work-end tagline here"
    blurb: "Blurb for stop 1. The most work-leaning version of how you describe yourself."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 2"
    blurb: "Blurb for stop 2 — slightly less work-heavy."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 3"
    blurb: "Blurb for stop 3."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 4"
    blurb: "Blurb for stop 4."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 5 — leaning into balanced"
    blurb: "Blurb for stop 5."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 6 — past the midpoint"
    blurb: "Blurb for stop 6."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 7"
    blurb: "Blurb for stop 7."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 8"
    blurb: "Blurb for stop 8."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 9"
    blurb: "Blurb for stop 9."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 10 — your Life-end tagline here"
    blurb: "Blurb for stop 10. The most life-leaning version of how you describe yourself."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]
```

---

## Example: 12 stops

```yaml
stops:
  - tagline: "Stop 1 — Work end"
    blurb: "Most work-leaning description."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 2"
    blurb: "Blurb for stop 2."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 3"
    blurb: "Blurb for stop 3."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 4"
    blurb: "Blurb for stop 4."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 5"
    blurb: "Blurb for stop 5."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 6 — approaching balance"
    blurb: "Blurb for stop 6."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 7 — past the midpoint"
    blurb: "Blurb for stop 7."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 8"
    blurb: "Blurb for stop 8."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 9"
    blurb: "Blurb for stop 9."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 10"
    blurb: "Blurb for stop 10."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 11"
    blurb: "Blurb for stop 11."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

  - tagline: "Stop 12 — Life end"
    blurb: "Most life-leaning description."
    descriptors: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]
```

---

## Tips

- **Tagline length:** keep under ~50 characters so it doesn't wrap awkwardly on mobile.
- **Descriptors:** 3–5 tags per stop looks best. More than 6 starts to crowd the hero.
- **Order matters:** the first stop shows at slider = 0 (left), the last at slider = 100 (right). Drag-direction follows array order.
- **No code changes needed:** add or remove stops by editing `content/_index.md` only. The JavaScript adapts automatically.
- **Progression:** on a personal site, it reads well if the taglines and blurbs shift gradually — e.g. one dimension you are dialling up while another dials down — rather than jumping randomly between unrelated personas.

---

## Preview locally

From the `ken-vc` folder:

```
hugo server
```

Then open `http://localhost:1313/` in your browser and drag the slider to see each stop. Edits to `content/_index.md` hot-reload automatically.
