'use client';
import './story.css';
import '../globals.css';
import { useState } from 'react';

const spreads = [
  {
    spreadTitle: 'The part of our story I understood very late:',
    pages: [
      {
        title: 'Independent and Ambitious',
        content: (
          <>
            When you first found me around early November, I was an ambitious, confident, and independent person--grounded in purpose and joy. And most of all, I was full of love that I was happy to share with you. But things started to change slowly and in ways I couldn’t see then.
            <br /><br />
            Earlier spring semester, an ER visit revealed elevated blood pressure. It resolved quickly but I dropped robotics and a class, things I loved—I think I told you this. Then came hundreds of intrusive floaters that local doctors couldn't diagnose until I saw specialists in Albany and NYC in late April, after we had parted. They were not normal floaters and they messed up my life. I saw them first thing in the morning and throughout the day, it frustrated me constantly. I began to dread daylight wearing sunglasses all the time. Without realizing, I was withdrawing from life itself – skipped classes and job shifts, stopped socializing, and abandoned small rituals like walking you back to your dorm in the morning. I was slowly losing myself, and it was taking a toll on everything around me; my family, friends, academics, and you.

          </>
        )
      },
      {
        title: 'Losing Myself - Dependent and Anxious',
        content: (
          <>
            Around Spring break, it all intensified. Floaters grew. I lost my drive, felt anxious, and nothing felt good—except you. I pretended to be strong because that’s all I knew. I didn't know how to be vulnerable and instead fear turned into bitterness whenever you needed space or were busy. I became reactive and dependent. I failed to respect your independence and wrongly interpreted as abandonment. It wasn't fair to you. I recognize my behavior made you feel trapped and that you weren’t enough. Looking back, all I really wanted to say was: your presence alone made me feel safe—and less sick. So, I just wanted you around. The timing was cruel too—things got worse for me just when you had your hardest academic season. This mismatch propelled many of our arguments around timing and availability. 
            <br /><br />
            We could have fixed those issues with honest conversation and as workload got down, but life had other plans. Something happened that week you never knew about—not because I hid it, but because everything collapsed before I could process it. 
          </>
        )
      }
    ]
  },
  {
    spreadTitle: 'The Collapse ',
    pages: [
      {
        title: null,
        content: (
          <>
            The week before that devastating weekend, I received another devastating diagnosis: blood in my urine, requiring ultrasound scans on all my vital organs. I don't know if you remember, but one of the nights, I had run to the washroom saying something hurt—this was related to that. This new health crisis came while I was already struggling with my vision and feeling us drift apart. I was terrified and wanted to talk to you—because if something was seriously wrong, I'd want you there. But we never got enough time to sit and chat about everything.
            <br /><br />
            Overwhelmed by the diagnosis, existing anxiety about floaters, and not having any answers, for the first time in my life–I choose to drink to escape. I wanted to feel okay and numb, for one night and just dance--but instead it made everything worse. I had no control over drinking as my pain took over. Little did I know, the holding up, the sadness, and the pain would bring out such a horrible side of me. I said things I didn’t mean and was someone unrecognizable. And, I caused you a lot of pain. 

          </>
        )
      },
      {
        title: null,
        content: (
          <>
          What I did was an unhealthy way of coping and something I regret doing every single day and something I would never choose again. Here's what I should have done: told you I wasn't okay and suggested we skip the party entirely.
            <br /><br />
            The most painful part is—we were meant to talk that Sunday to fix things and share. Maybe if I hadn’t tried to run from everything, escape using alcohol, the night wouldn’t have happened, and we would have talked instead. But life collapsed too fast. That Monday morning, the day we broke up, I was in a hospital gown getting scans. When your message came asking to meet in the evening, I replied I couldn’t and said I was fine with your decision. Not because I didn’t care—but because I was shattered. I was crying, waiting for medical answers while facing the reality that I'd just destroyed what mattered most in my life, us. I lost hope. 
            <br /><br />
            <b>Life couldn’t have been any more real and the timing couldn’t be any worse.</b>

          </>
        )
      },
      
    ]
  },
  {
    spreadTitle: 'Reflection',
    pages: [
      {
        title: null,
        content: (
          <>
            After everything collapsed that week, I wanted to reach out every day. But I realized the hurt you carried came from my actions and my disrespect for your space. I would have only added to the hurt. Life kept sucking more but I needed to stand again. I needed to create a new self—someone driven, lively, and independent, for everyone around me and to deserve to write to you.
            <br /><br />

            My health journey continued. Though the scans came back fine, it took some time. The floaters turned out to be more serious than expected. I spent weeks seeing new doctors and specialists, eventually finding a custom treatment. But physical healing wasn't enough. I had lost myself in all of it—the fear, the pain, and the guilt. I had to become someone I could trust and be proud of again. This letter comes from that place of journey, recovery and reflection, not from the broken person who hurt you.
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
            Veda, I see your pain so clearly now. I made you carry a version of me I didn't even understand. I was too consumed by my own struggles to notice how much you were already holding—your art, friends, health, sleep—while I only saw what I lacked. I imagine how confusing and heavy it must have felt to love someone who was falling apart in ways you couldn't fix, then to be blamed for not doing enough. And getting your trust broken from someone you loved. That pain... I see it now, and it breaks me to know I caused it. I am sorry.
<br /><br />
I just wish I wasn’t tested so much by life in those few weeks. I was losing on all fronts—fighting health scares, losing myself, and failing you—with no room to breathe between crises. I wish timing had been kinder to us or I had recovered faster. 


          </>
        )
      },
      
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
