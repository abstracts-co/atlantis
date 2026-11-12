# Meeting

People in the city at the same time see each other as figures with names, can write a line to the room, and can talk with whoever stands near them. Walking the city needs no account. Being seen, writing and speaking need an Abstracts account, because they go through an Abstracts room.

## Sub-features

- `alone` the city is always walked without an account. Signed out on abstracts.co, one button says `Sign in`. Anywhere else, one button says `Meet people on abstracts.co` and opens the hall there.
- `choose` nothing is joined and nothing is asked when the page opens. Multiplayer starts when the visitor chooses it: the bronze brazier just inside the hall's door, or the `Multiplayer` button while walking. Signed out, that signs them in; outside abstracts.co, it opens the page there. The brazier burns while multiplayer is on; pressing it again leaves. Who else is here shows at the top right, as faces and a count.
- `figures` everyone else in the room stands where they stand and turns as they turn, with their name over their head.
- `text` a line typed in the bar at the bottom left is read by the whole room. `T` or `/` puts the cursor there.
- `voice` the microphone button starts voice: a call with each of the nearest people who also have voice on, eight at most, louder as they come nearer. Press it again to mute.
- `rooms` a room holds as many as the site allows this page (it asks for 100; a site that does not yet know that allows 8). A full room sends the next person to the next room.

## How to get to it (user POV)

- On abstracts.co, walk into the hall and press the brazier, or press `Multiplayer` at the lower left while walking.

## Driving it with verify.mjs

Preconditions:

- Baseline. The journey starts its own stand-in for an Abstracts room on this machine (`source/build/room-relay.mjs`) and stops it at the end.

Run `node source/build/verify.mjs drive meet`.

- **Alone.** Step `outside abstracts.co the city is still walked, and one button says where people meet`.
- **Two people.** Two more tabs join the same room. Steps `two people in the hall are in one room`, `each sees the other as a figure with a name, where they stand` and `when one walks, the other sees them go`.
- **Text.** One writes a line. Steps `a line written by one is read by the other, with the name` and `a line arriving does not wipe what is being typed`.
- **Voice.** Both press the microphone button. Steps `with voice on, the two are in a call and sound arrives`, `a voice 13 m away is quieter than one at arm's length` and `walking out of earshot ends the call`.
- **Full room.** The stand-in is set to two seats and a third person arrives. Step `when a room is full, the next person is put in the next room`.
- **Leaving.** One tab closes. Step `someone leaving is gone from the hall, and the room says so`.
- **A site with rooms of eight.** The stand-in is run the old way. Step `on a site with rooms of eight and no position frames, people are still seen where they stand`.

## Gotchas

- This journey proves the page against a stand-in that follows the room protocol as the Abstracts kit describes it. It has not been run against abstracts.co itself: that needs the page posted there and two signed-in members.
- The stand-in checks nobody's identity. It is for this machine only.
- The voice step uses the browser's stand-in microphone and checks that sound arrives. Nobody has listened to a real call here.
- Voice is peer to peer. Abstracts has no relay for it yet, so two people on strict networks may see each other and still not connect.
- Voice needs the page to be allowed the microphone: its `artifact.json` asks for it, and the browser asks the person.
- There is no way yet to report or block someone from inside the hall. A line is not stored anywhere.
