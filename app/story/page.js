'use client';
import './story.css';
import '../globals.css';
import { useState } from 'react';

const sections = [
  {
    title: 'The Part I Understood Very Late',
    content: `When you first found me around early November, I was an ambitious, confident, and independent person—grounded in purpose and joy. And most of all, I was full of love that I was happy to share with you. But things started to change slowly and in ways I couldn’t see then.
    
    Earlier spring semester, an ER visit revealed elevated blood pressure. It resolved quickly but I dropped robotics and a class, things I loved—I think I told you this. Then came hundreds of intrusive floaters that local doctors couldn't diagnose until I saw specialists in Albany and NYC in late April. They were not normal, and they messed up my life. I saw them first thing in the morning and throughout the day, it frustrated me constantly. I began to dread daylight wearing sunglasses all the time. Without realizing, I was withdrawing from life itself – skipped classes, stopped socializing, and abandoned small rituals like walking you back to your dorm in the morning. It was all taking a toll, slowly losing myself.`
  },
  {
    title: 'Losing Myself',
    content: `After Spring break, it intensified. I lost my drive, felt anxious, and nothing felt good—except you. I truly couldn’t understand what was happening and I stopped loving myself. I didn't know how to be vulnerable and instead fear turned into bitterness whenever you needed space. I became reactive and dependent. I failed to respect your independence and wrongly interpreted it as abandonment. It wasn't fair. I recognize my behavior made you feel trapped and that you weren’t enough. Looking back, all I really wanted to say was: *your presence alone made me feel safe—and less sick.* So, I just wanted you around. We could have fixed these issues with honest conversation, but life had other plans. Something happened that week you never knew about—not because I hid it, but because everything collapsed before I could process it.`
  },
  {
    title: 'What You Never Knew',
    content: `

The week before that weekend, I received another devastating diagnosis: blood in my urine, requiring ultrasound scans on all my vital organs. I don't know if you remember, but one of the nights, I had run to the washroom saying something hurt—this was related to that. This new health crisis came while I was already struggling with my vision and feeling us drift apart. I was terrified and wanted to talk to you—because if something was seriously wrong, *I'd want you there.* 

Overwhelmed by the diagnosis, existing anxiety about floaters, and not having any answers, for the first time in my life—I chose to drink to escape. I wanted to feel okay and numb, for one night and just dance—but instead it made everything worse. I had no control over drinking as my pain took over. Little did I know, the holding up, the sadness, and the pain would bring out such a horrible side of me. I said things I didn’t mean and was someone unrecognizable. I caused you a lot of pain. What I did was an unhealthy way of coping and something I would *never* do in my life again.`
  },
  {
    title: 'The Collapse',
    content: ``
  },
  {
    title: 'The Day Everything Ended',
    content: `The most painful part is—we were meant to talk that Sunday to fix things and share. Maybe if I hadn’t tried to run from everything, escape using alcohol, the night wouldn’t have happened, and we would have talked instead. But life collapsed too fast. That Monday morning, the day we broke up, I was in a hospital gown getting scans. When your message came asking to meet in the evening, I replied I couldn’t and said I was fine with your decision. Not because I didn’t care—but because I was shattered. I was crying, waiting for medical answers while facing the reality that I'd just destroyed what mattered most in my life—*us.*

Life couldn’t have been any more real, and the timing couldn’t be any worse.`
  },
  {
    title: 'After Everything Collapsed',
    content: `After everything collapsed, I wanted to reach out every day. But I realized the hurt you carried came from my actions and my disrespect for your space. With your finals and Korea ahead, I didn't want to burden you further. More importantly, I didn't want to contact you from a place of desperation or guilt—I needed clarity, not just regret.

My health journey continued. Though the scans came back fine, it took some time. The floaters turned out to be more serious than expected. I spent weeks seeing new doctors and specialists, eventually finding a custom treatment. But physical healing wasn't enough. I had lost myself in all of it—the fear, the pain, and the guilt. Before I could speak to you again, I needed to create a new self—*someone driven, lively, and independent, for everyone around me. Someone I could trust and be proud of again.* This letter comes from that place of recovery and reflection, not from the broken person who hurt you.`
  },
  {
    title: 'Reflection and Goodbye',
    content: `Veda, I see your pain so clearly now. I made you carry a version of me I didn't even understand. I was too consumed by my own struggles to notice how much you were already holding—your art, friends, health, sleep—while I only saw what I lacked. I imagine how confusing and heavy it must have felt to love someone who was falling apart in ways you couldn't fix, then to be blamed for not doing enough. And getting your trust broken from someone you loved. *That pain... I see it now, and it breaks me to know I caused it. I am sorry.*

I just wish I wasn’t tested so much by life. I was losing on all fronts—fighting health scares, losing myself, and failing you—with no room to breathe between crises. I wish timing had been kinder to us or I had recovered faster.

Amid all of this, somethings were still true, and I want you to know that:

**First:** I never intended to cause you pain. Every part of me wanted only to protect you—I noticed every bump on your skin, every scratch that marked you, even the way your hair fell rebelliously into your eyes. My actions hurt you, I know that with aching clarity. But I wasn't trying to hurt you; *I was drowning in a storm that consumed every shore I'd known.*

**Second:** I have loved you fully. I cared about and remembered every detail of you—the meaning behind your rings, your favorite food, your art and the artist you liked, your friends and your family, and that penguin face that made my heart skip. I didn't just love you—I saw you, in ways that words can barely capture. And even sick I was trying, to understand your needs around space and wanted to find a middle ground. Even the night before everything shattered, we created memories making pani-puri together. I wasn’t perfect at loving you, we had our differences, but I loved learning about you; I was almost there getting to like those dog reels and Gracie is good.

This may be the last piece of conversation we ever share. And if it is, I want to say this:

If life hadn't collapsed on me all at once or if I had been healthier quicker, I believe we would have found our way or at least tried fully, *cuz love wasn’t an issue.* I would’ve been stronger for us. An independent me would have respected your space naturally and I would have never resolved to alcohol to numb my pain. Moreover, I would have learned exactly the way you wanted to be loved. *Because there is no perfect, just a willingness to learn.* Instead of being defensive about our breakup, I would have asked for a chance to build enough good memories that the old pain would fade. Almost like what you once wanted from me: *To love you first.*

I don’t know what life has for us, but I didn’t want to leave you in dark. With everything that happened to me last couple of months, I know life is too short to live in fear and regret. All I can say is: *One of the most beautiful things in my life happened during one of the most painful seasons of my life.*

Lastly, I just wanted to make sure my silence didn’t become the last thing you remember.

*Thank you for loving me during one of the hardest chapters of my life. I’ll always carry that with care.*

With love, deepest apologies, and nothing left unsaid.`
  }
];

export default function StoryFlipbook() {
  const [page, setPage] = useState(0);

  const next = () => setPage((prev) => (prev + 2 < sections.length ? prev + 2 : prev));
  const prev = () => setPage((prev) => (prev - 2 >= 0 ? prev - 2 : prev));

  const leftPage = sections[page];
  const rightPage = sections[page + 1];

  return (
    <>
    <div className="left-sidebar scroll-aware">
        <div className="sidebar-topic">Two Letters Two Truths</div>
        <a href="/" className="nav-button highlight-button">The Apology</a>
        <a href="/story" className="nav-button highlight-button">Somethings Untold</a>
        <p className="sidebar-hint">Tap or click to view</p>
      </div>

    <div className="story-flipbook">
      <div className="flipbook-wrapper">
        <div className="flipbook-pages">
          <div className="page left">
            <p className="story-text">{leftPage?.content}</p>
          </div>
          <div className="page right">
            {rightPage && (
              <>
                <p className="story-text">{rightPage.content}</p>
              </>
            )}
          </div>
        </div>

        <div className="flip-controls">
          <button onClick={prev} disabled={page === 0} className="nav-button">← Back</button>
          <span className="page-label">Spread {page / 2 + 1} of {Math.ceil(sections.length / 2)}</span>
          <button onClick={next} disabled={page + 2 >= sections.length} className="nav-button">Next →</button>
        </div>
      </div>
    </div>
    </>
  );
}
