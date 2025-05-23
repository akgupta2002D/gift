'use client';
import './story.css';
import '../globals.css';
import { useState } from 'react';

const spreads = [
  {
    spreadTitle: 'The part of our story I understood late',
    pages: [
      {
        title: 'SLOW CHANGE - The Floaters',
        content: (
          <>
            When you first found me around early November, I was an ambitious, confident, and independent person. And most of all, I was full of love that I was happy to share with you. But things started to change slowly and in ways I couldn’t see then.
            <br /><br />
            By Spring Break, the floaters had taken over my life. I wish I could show you how bad it looked. Doctors kept saying they were normal, but they weren’t, they weren't even floaters to begin with—and only after our breakup--visiting specialists in Albany and NYC finally confirmed they were serious and gave me a treatment plan. But the damage was done. I wasn’t just annoyed by this disease—I was going crazy, constantly anxious. Waking up to see hundreds of these dark things floating across my vision every morning and throughout the day, left me feeling deeply frustrated and defeated. I dreaded daylight, wore sunglasses all the time, and stayed alone in my dark room. Without realizing, I was withdrawing from life itself – skipped classes and job shifts, stopped research, socializing, talking back home and abandoned small things like walking you back to your dorm in the morning. I was finding every excuse to not walk outside. I was losing pieces of myself.


          </>
        )
      },
      {
        title: 'HEALTH CRISIS',
        content: (
          <>
            Nothing felt good because I was losing my drive, was becoming insecure about life, and very scared. You were the only thing that brought joy, so I clung to you—I became dependent and grew bitter, and worst of all I didn’t even realize it. The timing was cruel too—things got worse for me just when you had your hardest academic season. This mismatch created arguments around our time together, majority of our fights. Looking back, all I really wanted to say was: your presence alone made me feel safe—and less sick.
            <br /><br />
           We could have fixed those issues with honest conversations and as workload got better but life had other plans. The week before that terrible weekend, I received another devastating diagnosis: blood in my urine, requiring scans on all my vital organs. If you remember, one of the nights I had run to the washroom saying something hurt—this was related to that. This new health crisis came while I was already struggling with my vision and feeling us drift apart. I was terrified and wanted to talk to you—because if something was seriously wrong, I'd want you there. But we never got enough time to chat about everything that week. I also was waiting to get the scans done before sharing.
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
            Overwhelmed by the diagnosis, existing anxiety about floaters, and not having any answers, for the first time in my life–I choose to drink to escape. I just wanted to feel okay, to go numb for one night and dance. But it made everything worse. I was drinking out of pain, and that pain brought out a version of me I didn’t recognize. I said things I didn’t mean, became someone who caused you fear and hurt. Something I regret doing every single day. What I should’ve done was tell you I wasn’t okay and skip the party entirely. But before I could, I blacked out unusually fast—even before the party. Life collapsed too fast, I kept making mistakes the next day. There are reasons, not excuses, to that, but letter would be too long to include them.
            <br /><br />
            The most painful part is: the Monday morning, the day we broke up, I was in a hospital gown getting scans. When your message came asking to meet in the evening, I replied I couldn’t and said I was fine with your decision. Not because I didn’t care—but because I was shattered. I was crying, waiting for medical answers while facing the reality that I'd just destroyed our relationship. I lost hope.
            <br /><br />
            <b>Life couldn’t have been any more real and the timing couldn’t be any worse.</b>
          </>
        )
      },
      {
        title: "Reflection",
        content: (
          <>
          The truth is, those health scares changed me—I went from being independent, grounded, and caring to someone anxious, lost, bitter and quietly dependent. I denied that for a long time because I was taught that I can’t be weak. That denial brought us to a breaking point.
            <br /><br />
            I spent a lot of time reflecting, fixing my health, and working a better mindset to finally arrive at a clarity I have now. Veda, I see your pain so clearly now. I made you carry a version of me I didn't even understand. I was too consumed by my own struggles to notice how much you were already holding—your art, friends, health, sleep—while I only saw what I lacked. That wasn’t fair. The fact that I was the reason for your pain breaks me every day. I am sorry.
            <br /><br />
            I just wish I wasn’t tested so much by life in those few weeks. I was losing on all fronts—fighting health scares, losing myself, and failing you—with no room to breathe between crises. I wish timing had been kinder to us or I had recovered faster. 

          </>
        )
      },
      
    ]
  },
  {
    spreadTitle: "FINAL WORDS",
    pages: [
      {
        title: null,
        content: (
          <>
          <b>Amid all of this I want you to know that:</b>
          <br /> <br />
             I have never wished upon any harm to you. Every part of me wanted only to protect you. But my actions hurt you, I know that with aching clarity and I take responsibility. Hurting wasn't my intention, I was just drowning in a storm that consumed every shore I'd known, and I didn’t know how to ask for help. Moreover, what we shared was real and meaningful to me. I deeply care about you and who you are. Lastly, If I had the slightest clue how disastrously that night would unfold. If life had given me even one experience remotely close to that, I would have learned and done anything to prevent it. I understand myself now in ways I didn't then, and I will never make that mistake again.
            <br /><br />

            Maybe this will be another mistake. But, if any part of you ever doubted that I cared or loved you as these things happened, I made a small capsule with something for you. Open it if your heart ever feels like it, they are somethings I didn't know if I should share but was too hard to carry within me. You can find it here. <a className='a_text' href="/capsule">Click for the Capsule</a>.
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
            None of what I shared is supposed to be an excuse for my actions. But it was a tragedy, very bad sequence of events happening at the same time, that led to an awful outcome. And forgiveness isn't asked, hopefully someday I will be able to earn it.
            
            <br /><br />
            Alas,
            <br /><br />
            <b>One of the most beautiful things in my life happened during one of the most painful seasons of my life.</b>
           

            <br /><br />
            I just wanted to make sure my silence didn't become the last thing you remember. 
                        <br /><br />  
            <em>Thank you for loving me during one of the hardest chapters of my life. I'll always carry that with care.</em>

            <br /><br />
            
            With deepest apologies and truth



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
