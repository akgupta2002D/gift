'use client';
import './story.css';
import '../globals.css';
import { useState } from 'react';

const spreads = [
  {
    spreadTitle: 'The Descent',
    pages: [
      {
        title: 'The Part I Understood Very Late',
        content: (
          <>
            When you first found me around early November, I was an <b>ambitious, confident, and independent</b> person—grounded in purpose and joy. And most of all, I was full of love that I was happy to share with you. But things started to change slowly and in ways I couldn’t see then.
            <br /><br />
            Earlier spring semester, an ER visit revealed elevated blood pressure. It resolved quickly but I dropped robotics and a class, things I loved—I think I told you this. Then came <b>hundreds of intrusive floaters</b> that local doctors couldn't diagnose until I saw specialists in Albany and NYC in late April. They were not normal, and they messed up my life. I saw them first thing in the morning and throughout the day, it frustrated me constantly. I began to <em>dread daylight wearing sunglasses</em> all the time. Without realizing, I was withdrawing from life itself – skipped classes, stopped socializing, and abandoned small rituals like walking you back to your dorm in the morning. It was all taking a toll, slowly losing myself.
          </>
        )
      },
      {
        title: 'Losing Myself',
        content: (
          <>
            After Spring break, it intensified. I <b>lost my drive</b>, felt anxious, and <b>nothing felt good—except you</b>. I truly couldn’t understand what was happening and I stopped loving myself. I didn't know how to be vulnerable and instead fear turned into bitterness whenever you needed space. I became reactive and dependent. I <em>failed to respect your independence</em> and wrongly interpreted it as abandonment. It wasn't fair. I recognize my behavior made you feel trapped and that you weren’t enough. Looking back, all I really wanted to say was: your presence alone made me feel safe—and less sick. So, I just wanted you around. We could have fixed these issues with honest conversation, but life had other plans. Something happened that week you never knew about—not because I hid it, but because everything collapsed before I could process it.
          </>
        )
      }
    ]
  },
  {
    spreadTitle: 'The Collapse and Reflection',
    pages: [
      {
        title: 'What You Never Knew',
        content: (
          <>
            The week before that weekend, I received another devastating diagnosis: blood in my urine, requiring ultrasound scans on all my vital organs. I don't know if you remember, but one of the nights, I had run to the washroom saying something hurt—this was related to that. This new health crisis came while I was already struggling with my vision and feeling us drift apart. I was terrified and wanted to talk to you—because if something was seriously wrong, <em>I'd want you there</em>.
            <br /><br />
            <b>Overwhelmed by the diagnosis</b>, existing anxiety about floaters, and not having any answers, for the first time in my life—I chose to drink to escape. I wanted to feel okay and numb, for one night and just dance—but instead it made everything worse. I had no control over drinking as my pain took over. Little did I know, the holding up, the sadness, and the pain would bring out such a horrible side of me. I said things I didn’t mean and was someone unrecognizable. <b>I caused you a lot of pain</b>. What I did was an unhealthy way of coping and something I would never do in my life again.
          </>
        )
      },
      {
        title: 'The Goodbye',
        content: (
          <>
            The most painful part is—we were meant to talk that Sunday to fix things and share. Maybe if I hadn’t tried to run from everything, escape using alcohol, the night wouldn’t have happened, and we would have talked instead. But life collapsed too fast. That Monday morning, the day we broke up, I was in a hospital gown getting scans. When your message came asking to meet in the evening, I replied I couldn’t and said I was fine with your decision. Not because I didn’t care—but because I was shattered. I was crying, waiting for medical answers while facing the reality that I'd just destroyed what mattered most in my life—<em>us</em>.
            <br /><br />
            Life couldn’t have been any more real, and the timing couldn’t be any worse.
          </>
        )
      }
    ]
  }
];

export default function StoryFlipbook() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const currentSpread = spreads[spreadIndex];
  const [leftPage, rightPage] = currentSpread.pages;

  const next = () => setSpreadIndex((prev) => (prev + 1 < spreads.length ? prev + 1 : prev));
  const prev = () => setSpreadIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

  return (
    <>
      <div className="left-sidebar scroll-aware">
        <a href="/" className="nav-button highlight-button">The Apology - Go back</a>
        <p className="sidebar-hint">Tap or click to view</p>
      </div>

      <div className="story-flipbook">
        <div className="flipbook-wrapper">
          <h2 className="spread-title">{currentSpread.spreadTitle}</h2>
          <div className="flipbook-pages">
            <div className="page left">
              <h3 className="story-title">{leftPage.title}</h3>
              <p className="story-text">{leftPage.content}</p>
            </div>
            <div className="page right">
              {rightPage && (
                <>
                  <h3 className="story-title">{rightPage.title}</h3>
                  <p className="story-text">{rightPage.content}</p>
                </>
              )}
            </div>
          </div>

          <div className="flip-controls">
            <button onClick={prev} disabled={spreadIndex === 0} className="nav-button">← Back</button>
            <span className="page-label">Spread {spreadIndex + 1} of {spreads.length}</span>
            <button onClick={next} disabled={spreadIndex + 1 >= spreads.length} className="nav-button">Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}
