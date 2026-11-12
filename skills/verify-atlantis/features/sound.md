# Sound

The story is spoken aloud by one voice over a quiet bed of sound. The hunt has its effects, the city has the air of a harbour and footsteps, and the hall has its own quiet. Nothing clicks, jumps or cuts off, and one button turns all of it off.

## Sub-features

- `narration` each sentence of the story is spoken as it appears, word for word, and stays up for as long as it takes to say.
- `clean edges` every recording begins and ends in silence; every sound fades in and out; a sentence cut short by `Next` fades out before the next begins.
- `pause` `Pause` stops the voice and `Play` takes it up a breath before where it stopped.
- `loops` the bed, the deep sea and the harbour go round with each pass fading into the next, so no join is heard.
- `effects` the sea rising, the scan, the lights, a strong match, a claim, a footstep.
- `places` the harbour out of doors in the city; a low bed inside the hall; the deep sea while hunting.
- `mute` the speaker button at the top right turns sound off and on.

## How to get to it (user POV)

- Press `Watch the story`: it speaks. Browsers allow no sound before the first press.
- Go on foot and walk; go into the hall.
- Hunt: move the globe and claim a spot.
- Press the speaker button at the top right.

## Driving it with verify.mjs

Preconditions:

- Baseline. `node tools/make-audio.mjs --check` prints no problems.

Run `node source/build/verify.mjs drive sound`.

- **Button.** Step `the page has a sound button`.
- **Recorded.** Start the story. Step `every sentence of the story as it stands is recorded, word for word`.
- **Speaks.** Steps `the story speaks its first sentence, over a quiet bed` and `the sentence stays up for as long as it takes to say`.
- **Loop.** Step `the bed goes round with each pass fading into the next`.
- **Pause.** Press `Pause`, then `Play`. Steps `"Pause" stops the voice, and "Play" takes it up from where it stopped` and `it resumes a breath before that point, not from the start`.
- **Moving on.** Press `Next` twice, mid-sentence. Step `moving on mid-sentence fades the old voice out before the new one starts`.
- **On foot.** Skip to the city and walk. Steps `on foot the harbour is heard, and the story's voice and bed are gone` and `walking is heard as footsteps`.
- **The hall.** Go inside. Step `inside the hall the air changes`.
- **Effects.** Open the globe and claim the best match. Step `claiming a spot sounds the sonar, and a strong match the chime`.
- **Mute.** Press the speaker button and claim again. Step `the sound button turns everything off`.

## Gotchas

- The journey reads what the page says it played and how it arranged it. It cannot hear. `node tools/make-audio.mjs --check` does listen to each recording's first and last moments, and fails on one that does not begin and end in silence or has a stray sound after its last pause.
- An earlier set of recordings clicked every time the story moved on: asked for with its neighbours as context, the voice began the next sentence at the end of a recording. Each sentence is now asked for on its own, cleaned, and checked.
- When the data changes a sentence, its old recording no longer matches and the story shows that sentence in silence until `tools/make-audio.mjs` is run again. `--check` lists such sentences, and `drive data-files` runs it.
- Making sound needs an ElevenLabs key in `ELEVENLABS_API_KEY` for that one command. It is never stored in the repository.
- Whether the voice tells the story well is a matter for ears. Someone has to listen to a new voice, model or script once.
