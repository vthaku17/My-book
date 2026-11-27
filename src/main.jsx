import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, ChevronLeft, ChevronRight, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import "./styles.css";

const chapter = {
  number: 1,
  title: "A beginning",
  paragraphs: [
  `There was a time when life was just... life.

A person (me) was simply surviving one day after another, enjoying his own company, finding happiness in little things, and occasionally laughing or crying for reasons that even he couldn't always explain. Nothing extraordinary, nothing particularly exciting. Just the usual routine of living, without expecting anyone to make a difference.

And then, one day, she arrived.

It was the middle of June. The kind of summer when stepping outside barefoot could easily leave you injured. But somehow, I managed to get injured without even stepping outside. I was sitting comfortably on a chair in a perfectly chilled room, minding my own business, completely unaware that something was about to change.

The day she entered the room, almost every eye turned towards her.

Well, almost every eye except mine.

I barely noticed her. I was sitting there as if nothing had happened, carrying on with my usual expression of who cares? Not because there was anything wrong with her, but because I was never really the kind of person who got excited about meeting someone new. I was, and still am, a little shy when it comes to introducing myself to people.

Though, technically, she wasn't a complete stranger to me.

I had already seen her resume, and one of my colleagues had told me a little about her before she joined. In fact, the way he introduced her to me was quite hilarious.

He said something along the lines of:

"The girl we've hired has some hair on her hands and a solid fitness level. Looks like a gangster!"

I just smiled.

And that was pretty much my first introduction to her — through someone else's rather unusual description.

At that point, I had absolutely no idea that this person, whom I had barely noticed, would eventually become someone whose little details I would remember so carefully.

A few days later...

One day, a few of us friends decided to celebrate one of our colleague's work anniversaries. While making plans, we thought it would be a good idea to invite her too.

After all, she was new to the workplace, and we wanted her to feel comfortable around us. We thought it would be a nice opportunity to get familiar with each other, have some fun, and see whether she would fit in with our little group.

So, we invited her.

Obviously, being new, she seemed a little shy at first. But eventually, she agreed to join us.

And that's how it happened.

We all gathered around the food table, where casual conversations slowly turned into introductions, laughter, and little exchanges of stories. Nothing particularly special was planned, and there was no big moment that anyone would have thought of remembering.

But somewhere between those conversations and the food, we started getting to know each other.

We talked. We laughed. We became friends.

And perhaps, without either of us realising it, that was the beginning of something.

Not a love story. Not yet.

Just two people meeting, talking, and becoming a part of each other's everyday lives.

Sometimes, the most beautiful chapters begin with the most ordinary moments.

The journey home had already started feeling like a memory before we even reached the train station.

There were five of us travelling together, coming back after a trip that had given us enough stories to talk about for days. We had spent so much time together during the trip that by the time we boarded the train, none of us seemed ready to stop talking. We kept bringing up things that had happened earlier, laughing about moments that had seemed normal at the time but became much funnier when we retold them to each other.

The train was crowded with the usual sounds of a long journey. People were arranging their bags, checking their seats, calling family members to tell them they had boarded, and trying to make themselves comfortable for the night. Our bags were pushed beneath the seats and into whatever space we could find. We were still full of energy, even though the journey had already made us tired.

The five of us sat together, talking about everything and nothing. Someone would start talking about something that had happened during the trip, another person would interrupt with a completely different story, and somehow we would all end up laughing again. We made fun of each other, remembered stupid things we had done, and talked about the trip as if we were already missing it even though we were still on our way back.

The train slowly carried us away from the place where we had spent those days together. Outside the window, the lights of the station disappeared one by one, replaced by the darkness of the night. Every now and then, a station would appear outside, bright for a few moments, before disappearing again as the train continued forward.

For a while, none of us cared about sleeping.

We continued talking.

Eventually, we had dinner on the train. After that, the energy slowly started changing. The conversations became less loud. Some of us started checking our phones. Some were already trying to find a comfortable position to sleep in. The train had settled into its nighttime rhythm, with the sound of the wheels becoming almost like background music.

But somehow, we still weren't ready to sleep.

That was when we started playing UNO.

It began casually, but none of us knew how to play a casual game of UNO. Within a few minutes, the game had become unnecessarily competitive. We argued about rules, accused each other of saving the worst cards until the perfect moment, and laughed whenever someone was forced to pick up a huge number of cards.

She eventually came and sat on my seat so that all of us could play together. There wasn't much space, but none of us cared. We were all gathered around the cards, leaning toward each other, trying to see what everyone else was holding while pretending not to.

The game continued for a long time.

At first, she was completely involved in it. She laughed, argued, and tried to defeat everyone else like the game actually mattered. But slowly, I noticed her becoming quieter. She started leaning more heavily against me. Her replies became slower, and she began closing her eyes between turns.

I asked her if she was tired.

She probably denied it at first.

But after some time, she stopped trying to stay awake.

She fell asleep in my lap.

For a few seconds, I simply looked down at her.

It felt strange because only a little earlier she had been laughing with all of us, arguing over the game and making fun of everyone. Now she was completely quiet, resting against me as if she had forgotten everything around her.

The others continued playing for a while. I tried to remain involved in the game, but my attention kept drifting back to her. I don't remember who won. I don't even remember exactly when the game ended. I only remember the moment when the others slowly began returning to their own seats.

One by one, everyone started settling down for the night.

But I stayed there.

She was still asleep in my lap.

The compartment had become much quieter by then. The loud conversations had disappeared, and most of the people around us were either sleeping or trying to sleep. The train continued moving through the darkness, rocking gently from side to side.

I started massaging her head.

I wasn't thinking about anything particular. I just wanted her to be comfortable.

There was something peaceful about sitting there while she slept. Her hair had become messy, probably from the journey and from resting against me. Occasionally, the movement of the train would make her shift slightly, and I would adjust my position so she could continue sleeping comfortably.

After some time, I gently asked her to go and sleep properly.

She slowly opened her eyes.

She looked tired and confused for a moment, as if she had forgotten where she was. Then she looked at me with that sleepy face, her hair completely messy and her voice soft from sleep.

And suddenly, I didn't want to leave.

It was such a simple moment, but somehow I felt stuck there.

I had been telling her to go and sleep, but the moment she actually woke up, I didn't want to go back to my seat anymore. I wanted to stay there a little longer.

I don't think she wanted me to leave either.

Neither of us said that directly.

We didn't need to.

Sometimes you can feel that someone is also comfortable with your presence without them having to say anything.

But we both needed to sleep. The journey was still long, and eventually, I had to go back to my seat.

Our berths were on the upper level, right beside each other. I climbed up and lay down on my berth, but sleep still didn't come immediately.

She was right there beside me.

The compartment was dark except for the dim lights inside the train. The sound of the train moving through the night continued beneath us. Every now and then, the train would shake slightly as it passed over something on the tracks.

I slowly reached out and ran my fingers through her hair.

I did it gently, trying not to wake her.

I just wanted to make sure she could sleep peacefully.

And then I kept looking at her.

I don't know how long I stayed awake like that. I wasn't checking the time. I wasn't doing anything else. I was just looking at her while the train continued moving.

There was something about watching someone sleep that made the whole journey feel different.

She looked completely peaceful.

The person who had been laughing with us for hours was now completely quiet. Her breathing was slow, and every once in a while, she would move slightly in her sleep.

I kept thinking that I should sleep too.

But then I would look at her again.

And somehow, more time would pass.

I don't remember when the night became morning.

At some point, I finally fell asleep.

But it wasn't for very long.

When I woke up, the first thing I noticed was her.

And that was when I realized how much of the journey had slowly become about making sure she was comfortable.

It wasn't something I had planned.

I wasn't consciously trying to do anything special.

I just kept noticing small things.

If she was tired, I wanted her to rest.

If she was cold, I wanted her to be warm.

If she needed somewhere to sit, I wanted her to have space.

If she was uncomfortable, I wanted to fix it.

Maybe that was the first time I realized that I had started caring for her differently.

Not in some dramatic way.

Just in the small, almost automatic ways that you care for someone when their comfort begins to matter to you.

The journey continued, and the day passed with the usual conversations and laughter. We talked about the trip again, because somehow we never seemed to run out of things to say about it. We remembered moments that we had already discussed several times and still found new reasons to laugh about them.

Then, after dinner, we started watching a series together.

At first, we sat beside each other on the upper berth, sharing the small space while the episode played on the phone. The train had become quieter again. Most people around us were settling down for the night, and the compartment was filled with the soft sounds of people moving, talking quietly, and preparing to sleep.

The phone screen lit up the space between us.

We watched the episode for a while.

At least, we tried to.

Slowly, we started sitting closer together. It wasn't something either of us announced or planned. One moment there was a little space between us, and then somehow there wasn't.

The train moved gently beneath us.

The sound of the wheels continued outside.

The episode kept playing.

But gradually, neither of us was really paying attention to the story anymore.

We ended up under the same blanket.

She rested her head against my chest.

I could feel her breathing.

My hand rested around her waist, and I slowly began rubbing her back and comforting her. The moment felt natural, but I was also nervous. I was aware of every small movement, every pause in the conversation, every time she looked at me.

Her voice became quieter.

The conversations between us became shorter.

There were moments when neither of us said anything at all.

But the silence didn't feel uncomfortable.

It felt like both of us were aware that something had changed between us, even though neither of us was saying it out loud.

The series continued playing in front of us, but it had become almost irrelevant.

I remember feeling nervous because I didn't know what to do next.

There are moments when you want to do something, but you are also afraid of changing the moment by doing it.

I asked her for a kiss.

I asked her for a kiss.

It was a simple question, but I remember how nervous I felt asking it.

And then I leaned closer and kissed her.

For a moment, everything else seemed to disappear.

The kiss didn't end after a few seconds. It continued, slowly becoming more natural, more intense, and more comfortable. We kept kissing each other, neither of us really wanting to be the one to pull away. Every time we paused for a breath, we would look at each other for a moment before moving closer again.

There was a quiet nervousness between us at first, followed by small smiles and soft sounds of affection. The world around us seemed to fade into the background. The train was still moving, the episode was still playing on the phone, and people were still sleeping around us, but none of that felt important anymore.

We were simply lost in the moment.

My hands slowly moved around her, gently resting against her stomach and waist as we continued holding each other close. There was nothing rushed about it. Every movement felt natural, like we were both slowly discovering the comfort of being close to each other.

We continued kissing for what felt like a long time.

Two or three minutes may not sound like much, but in that moment, it felt like time had stopped completely.

Whenever we finally pulled back for a breath, we would stay close, looking at each other for a moment, and then move closer again.

It was my first kiss.

And somehow, it wasn't just one kiss.

It became a moment we kept returning to.

The nervousness slowly disappeared, replaced by the warmth of being close to each other and the feeling that neither of us wanted the moment to end.

For a moment, I almost forgot that we were on a train.

I forgot about the people around us.

I forgot about the episode still playing on the phone.

I forgot about the journey.

All I could think about was that this was actually happening.

It was my first kiss, and somehow the fact that it happened there made it even more memorable. Not in some perfect, planned setting. Not somewhere beautiful or romantic.

It happened on a train.

During a journey home.

Under a shared blanket.

With the sound of the train moving through the night.

And somehow, that felt perfect.

The moment continued naturally between us, with the nervousness slowly disappearing. There was the awkwardness of something new, but also the comfort of being close to someone who clearly wanted to be there with you.

Eventually, she told me to go back to my seat.

And honestly, I didn't want to.

I wanted to stay there.

I wanted to sleep beside her.

I wanted to remain close to her for a little longer and hold on to the feeling of the night.

But eventually, I had to go.

Fortunately, my berth was right beside hers.

So I went back to my seat and lay down.

But even then, I didn't immediately sleep.

I kept looking at her.

The dim light inside the train fell softly across her face. The rest of the compartment was quiet. The train continued moving, carrying all of us toward home.

I thought about the night.

About how the journey had started with five friends laughing and playing UNO.

About how she had fallen asleep in my lap.

About how I had stayed awake watching her.

And now, somehow, I had experienced my first kiss with her.

I kept looking at her until I eventually fell asleep.

Morning came quietly.

The temperature inside the train had dropped, and the cold had started becoming noticeable. When I woke up, I noticed that she was shivering slightly.

Without thinking much about it, I gave her my blanket.

I wanted her to be warm.

Then I went back to my seat.

But after some time, I found myself going back to her again.

Not for another kiss.

Not because I wanted anything dramatic.

I just wanted to be close to her.

I sat near the end of her berth, near her legs. She was still resting, and I noticed that her clothes had become slightly uncomfortable from sleeping in the same position.

So I gently adjusted them around her legs to make her more comfortable.

Then I started massaging her feet.

It was a small thing, but I remember how natural it felt to me.

The journey had somehow turned into a series of small moments where I kept trying to make her comfortable.

I didn't need a reason.

I just wanted to do it.

After some time, she woke up.

She looked at me with that sleepy face again.

Her voice was soft, and there was a little shyness between us because we both remembered the previous night.

For a moment, neither of us knew exactly what to say.

There was a strange kind of awkwardness.

Not the uncomfortable kind.

The kind that comes after something new has happened between two people.

We both knew what had happened.

We both remembered.

And yet, there was no need to immediately talk about it.

She looked at me.

I smiled.

And somehow, that was enough.

The train continued carrying us home.

But somewhere during that journey, something between us had changed.

We had started as five friends coming back from a trip.

We had spent hours laughing and talking.

We had played UNO late into the night.

She had fallen asleep in my lap.

I had massaged her head.

I had stayed awake watching her sleep.

We had watched a series together.

We had ended up under the same blanket.

She had rested her head against my chest.

And I had experienced my first kiss.

The next morning, I had given her my blanket when she was cold and returned to sit beside her simply because I wanted to make sure she was comfortable.

Nothing had changed because of one single moment.

It was all the small moments together.

The laughter.

The tiredness.

The silence.

The comfort.

The way we kept finding reasons to sit close.

The way I kept finding small ways to take care of her.

The way neither of us seemed to want the moments to end.

Maybe that was how something between us slowly became more than friendship.

Not through a grand confession.

Not through a dramatic promise.

But through a journey.

Through small conversations.

Through shared laughter.

Through a sleeping head resting in my lap.

Through a quiet night on a moving train.

Through a first kiss.

And through the simple feeling that, for that entire journey, I wanted her to be comfortable, warm, safe, and happy beside me.

When I think about that journey now, I don't remember the stations.

I don't remember how many hours were left.

I don't remember which episode we were watching.

I remember her.

I remember the way she fell asleep in my lap while everyone else was still playing UNO.

I remember her messy hair and sleepy voice.

I remember staying awake while she slept.

I remember the nervousness before my first kiss.

I remember the quietness after it.

I remember giving her my blanket in the morning.

I remember sitting beside her again simply because I wanted to be close.

The train was taking us home.

But somewhere along the way, something unexpected happened.

We began the journey as five friends returning from a trip.

And somewhere between the laughter, the sleepless nights, the shared blanket, the quiet glances, and a first kiss—

something between us became a little more.

Maybe we didn't have a name for it then.

Maybe we didn't completely understand it.

But I knew one thing.

That journey was no longer just a journey home.

It had become a memory.

One I never wanted to leave behind.
`
]
};

const chapters = [
  { number: 1, title: "A beginning", available: true },
  { number: 2, title: "The girl", available: false },
  { number: 3, title: "The day", available: false },
  { number: 4, title: "The night", available: false },
  { number: 5, title: "The place", available: false }
];

function escapeHtml(value) {
  return value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function splitText(text) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  return sentences.flatMap(s => s.length > 1200 ? s.trim().split(/\s+/) : [s.trim()]);
}
function paginate(paragraphs, measure, height) {
  const pages = [], source = paragraphs.flatMap(p => String(p).split(/\n\s*\n/)).map(p => p.trim()).filter(Boolean);
  let current = [];
  const fits = items => {
    measure.innerHTML = items.map(p => `<p>${escapeHtml(p)}</p>`).join("");
    return measure.scrollHeight <= height;
  };
  for (const paragraph of source) {
    if (fits([...current, paragraph])) { current.push(paragraph); continue; }
    if (current.length) pages.push(current);
    current = [];
    if (fits([paragraph])) { current = [paragraph]; continue; }
    let chunk = "";
    for (const part of splitText(paragraph)) {
      const next = chunk ? `${chunk} ${part}` : part;
      if (chunk && !fits([next])) { pages.push([chunk]); chunk = part; }
      else chunk = next;
    }
    if (chunk) current = [chunk];
  }
  if (current.length) pages.push(current);
  return pages;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("jam-theme") || "dark");
  const [fontScale, setFontScale] = useState(() => Number(localStorage.getItem("jam-font-scale") || 1));
  const [page, setPage] = useState(() => Number(localStorage.getItem("jam-page") || 0));
  const [pages, setPages] = useState([]);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [narrating, setNarrating] = useState(false);
  const measureRef = useRef(null);

  const recalc = () => {
    const el = measureRef.current;
    if (!el) return;
    const h = Math.max(120, el.clientHeight);
    setPages(paginate(chapter.paragraphs, el, h));
  };

  useLayoutEffect(() => {
    recalc();
    const ro = new ResizeObserver(recalc);
    if (measureRef.current) ro.observe(measureRef.current);
    return () => ro.disconnect();
  }, [fontScale, theme]);

  const allPages = useMemo(() => [
    { type: "welcome" }, { type: "contents" },
    ...pages.map((paragraphs, index) => ({ type: "story", index, paragraphs }))
  ], [pages]);

  useEffect(() => { if (page >= allPages.length && allPages.length) setPage(allPages.length - 1); }, [allPages.length]);
  useEffect(() => { localStorage.setItem("jam-page", page); }, [page]);
  useEffect(() => { localStorage.setItem("jam-theme", theme); document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { localStorage.setItem("jam-font-scale", fontScale); document.documentElement.style.setProperty("--font-scale", fontScale); }, [fontScale]);

  useEffect(() => {
    const key = e => {
      if (["ArrowRight","ArrowDown","PageDown"," "].includes(e.key)) { e.preventDefault(); next(); }
      if (["ArrowLeft","ArrowUp","PageUp"].includes(e.key)) { e.preventDefault(); prev(); }
      if (e.key === "+" || e.key === "=") setFontScale(v => Math.min(1.25, +(v + .05).toFixed(2)));
      if (e.key === "-") setFontScale(v => Math.max(.75, +(v - .05).toFixed(2)));
    };
    addEventListener("keydown", key); return () => removeEventListener("keydown", key);
  });

  const current = allPages[Math.min(page, Math.max(0, allPages.length - 1))] || { type: "welcome" };

  function navigate(target, dir) {
    if (target < 0 || target >= allPages.length || animating) return;
    setDirection(dir); setAnimating(true);
    setTimeout(() => { setPage(target); setAnimating(false); }, 260);
  }
  function next() { navigate(page + 1, "next"); }
  function prev() { navigate(page - 1, "previous"); }

  function narrate() {
    if (!("speechSynthesis" in window)) return alert("Narration is not supported in this browser.");
    if (narrating) { speechSynthesis.cancel(); setNarrating(false); return; }
    const text = current.type === "story" ? current.paragraphs.join(" ") : current.type === "welcome" ? "Just about me. A collection of moments, feelings, and memories that I never wanted to leave behind." : "Contents. Chapter One, A beginning. Chapter Two, The girl. Chapter Three, The day. Chapter Four, The night. Chapter Five, The place.";
    const u = new SpeechSynthesisUtterance(text); u.rate = .9; u.onend = () => setNarrating(false); u.onerror = () => setNarrating(false);
    speechSynthesis.cancel(); speechSynthesis.speak(u); setNarrating(true);
  }
  useEffect(() => { speechSynthesis?.cancel(); setNarrating(false); }, [page]);

  return <main className="site-reader">
    <header className="site-header">
      <button className="brand" onClick={() => navigate(0,"previous")}><BookOpen size={17}/><span>Just about me</span></button>
      <div className="header-actions">
        <button onClick={() => setFontScale(v => Math.max(.75, +(v-.05).toFixed(2)))}>A−</button>
        <button onClick={() => setFontScale(v => Math.min(1.25, +(v+.05).toFixed(2)))}>A+</button>
        <button onClick={narrate}>{narrating ? <VolumeX size={18}/> : <Volume2 size={18}/>}</button>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}</button>
      </div>
    </header>
    <section className="content-stage" onTouchStart={e => setTouchStart(e.touches[0].clientX)} onTouchEnd={e => { if (touchStart === null) return; const d=e.changedTouches[0].clientX-touchStart; setTouchStart(null); if(Math.abs(d)>45) d<0?next():prev(); }}>
      <aside className="side-navigation">
        <button onClick={prev} disabled={page===0}><ChevronLeft size={20}/></button>
        <div className="side-page-number">{String(page+1).padStart(2,"0")}</div>
        <button onClick={next} disabled={page===allPages.length-1}><ChevronRight size={20}/></button>
      </aside>
      <div className={`content-panel ${animating ? `content-${direction}` : ""}`}><Page page={current} onRead={() => navigate(2,"next")}/></div>
      <div className="chapter-rail"><span>{current.type === "story" ? `Chapter ${chapter.number}` : current.type === "welcome" ? "Introduction" : "Contents"}</span></div>
    </section>
    <div className="swipe-hint">Swipe or use ← → to continue</div>
    <div className="measure-page" ref={measureRef} aria-hidden="true"/>
  </main>;
}

function Page({ page, onRead }) {
  if (page.type === "welcome") return <div className="welcome-page"><span className="eyebrow">A memory worth keeping</span><h1>Just about me</h1><p>A collection of moments, feelings, and memories that I never wanted to leave behind.</p><button className="primary-action" onClick={onRead}>Start reading <ChevronRight size={16}/></button></div>;
  if (page.type === "contents") return <div className="contents-page"><span className="eyebrow">The story</span><h1>Contents</h1><div className="contents-list">{chapters.map(item => <div className={`contents-row ${!item.available ? "muted":""}`} key={item.number}><span>Chapter {item.number}</span><strong>{item.title}</strong>{!item.available && <em>Coming soon</em>}</div>)}</div><button className="text-action" onClick={onRead}>Continue <ChevronRight size={16}/></button></div>;
  return <article className="story-page">{page.index===0 && <div className="story-heading"><span className="eyebrow">Chapter One</span><h1>{chapter.title}</h1></div>}<div className={`story-text ${page.index===0 ? "with-heading":"full-height"}`}>{page.paragraphs.map((p,i)=><p className={i===0&&page.index===0?"dropcap":""} key={`${page.index}-${i}`}>{p}</p>)}</div></article>;
}
createRoot(document.getElementById("root")).render(<App/>);
