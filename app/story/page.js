'use client';
import './story.css';
import '../globals.css';

import { useState } from 'react';
import Link from 'next/link';

const spreads = [
  {
    spreadTitle: 'THE OTHER SIDE OF THE STORY',
    pages: [
      {
        title: null,
        content: (
          <>
            Veda, I know I was hurting you in those final weeks and putting strain on us that neither of us understood at the time. I've spent months reflecting on what happened, and I need to share the context I couldn't give you then—not as an excuse, but because you deserved to know why someone who loved you so deeply became so unrecognizable. What I'm about to tell you, I only fully understood after we ended and somethings, I didn’t get the chance to tell you as it happened exactly when we parted. This is a little long, so bear with me!
            <br /> <br />
            WHAT I COULDN'T TELL YOU:
            <br /><br />
            When you first found me Veda, around early November, I was an ambitious, caring, independent, and a happy person. Most of all, I was full of love which I was so happy to share with you. I was truly happy to have found you, and I hope that showed.
            <br /><br />
            It would have remained that way, but life hit me with things I wasn’t prepared for. By Spring Break, the floaters had taken over my life. You knew I was affected but not the real extent of it. 
          </>
        )
      },
      {
        title: null,
        content: (
          <>
            I wish I could have shown you how bad it looked. Doctors and people around me kept saying they were normal, but they weren’t—and only after our breakup--visiting specialists in Albany and NYC finally confirmed they were a rare and intrusive condition. But the damage was done, it messed up my mind and who I was. 
            <br /><br />
           Waking up with these things in my vision, left me feeling deeply frustrated and defeated every day. Without realizing, I was withdrawing from life itself – skipped classes and shifts, socializing, talking back home, taking you on dates, and abandoned small things like walking you back to your dorm in the morning. I was finding every excuse to not walk outside during the day because I was scared. It might have felt like I was trying to hurt you or was dissatisfied with our relationship, but no, I was hurting everywhere and all aspects of my life. I was losing pieces of myself. 
           <br /><br />
           But I acted like I was fine, because that's all I was taught—never burden others or be vulnerable. In those weeks, you were the only joy in my life, so I wanted you around but didn’t ask for that properly. The constant frustration from vision made me bitter—I blamed you and got upset over small things that shouldn't have mattered. 
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
            I didn't realize it then, but I hate that I let my pain strain us and hurt you. Moreover, the timing was cruel—things got worse for me just as your academic season got hardest. This mismatch created most of our fights about time together. My brain interpreted you being busy as abandonment, because I was already feeling so alone. Looking back, all I wanted to say was that your presence made me feel safe--and less sick and bit hopeful. I just couldn't find the right words.
            <br /><br />
            We could have fixed those issues with honest conversations as my vision improved and your workload eased, but life had other plans. The week before that terrible weekend, I received another devastating diagnosis: blood in my urine, requiring scans on all my vital organs. It could mean anything, and it was really scary. If you remember, one of the nights I had run to the washroom saying something hurt—this was related to that. This new health crisis came while I was already struggling with my vision and feeling us drift apart. I was terrified and wanted to talk to you—because if something was seriously wrong, I'd want you there. But we didn’t get enough time that week, and I was waiting for the scan results before sharing anything. It was eating me alive, which caused a lot of my frustration that week. 
            <br /><br />
             
          </>
        )
      },
      {
        title: null,
        content: (
          <>
             Overwhelmed by the diagnosis, existing anxiety about vision, and not having any answers, for the first time in my life–I choose to drink to escape. I just wanted to feel okay, to go numb for one night and dance. But it made everything worse. Bottling up, anxiety, fear, and frustration, it created a night totally out of character, and I will regret it all my life.What I should’ve done was tell you I wasn’t okay and skip the party entirely. But before I could, I blacked out unusually fast—even before the party started. I later found out that mixing my new stress and anxiety supplements with alcohol can mess with brain and cause symptoms. This doesn’t excuse my behavior but it’s one other thing that went wrong. Everything collapsed after that night. I kept making mistakes the next day—leaving that morning, Deewane, how I handled our conversation— I couldn't think clearly. There's more context, but this letter is already long.
             <br /><br />
             The most painful part is the Monday morning, the day we broke up, I was in a hospital getting those scans. When your message came, asking to meet in the evening, I replied I couldn’t and said I was fine with your decision. Not because I didn’t care—but because I was shattered. I had no emotional or mental energy left, and life felt uncertain. I was crying, waiting for medical answers while facing the reality that I'd just destroyed our relationship from a night I have no recollection of. I lost hope. I was angry at life. 
             
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

             <b>Life got too real, and the timing couldn’t be any worse.</b>
             <br /><br />
             I wanted to text, call, or meet you after some days and share everything but I saw that you didn’t even want to look at me, which is fair. I knew any rushed explanation would only hurt you, would sound like an excuse. I understood then that if I am ever to get to talk to you again or even deserve to write to you, I needed to get myself back, get over this victim mentality. The health stuff kept going, the scans came out fine, but it took some time and more appointments. I had to fix my vision; I went to Albany and NYC until I found a treatment. As I did all that, I also reflected on our relationship, worked hard to rebuild myself and gain clarity as to what happened. This letter is that reflection. 
             <br /><br />
             Veda, I see your pain so clearly now. Towards the end, I made you carry a broken version of me that I didn't even understand—someone bitter and demanding. I have never been like that and never wanted to be. I was trying to be there for you, but I was also too consumed by my own struggles to notice how much you were already holding—your art, friends, health, sleep. That wasn’t fair. And you didn’t deserve that night or how it all went afterwards. 
             

            {/* Maybe this will be another mistake. But, if any part of you ever doubted that I cared or loved you as these things happened, I made a small capsule with something for you. Open it if your heart ever feels like it, they are somethings I didn't know if I should share but was too hard to carry within me. You can find it here. <a className='a_text' href="/capsule">Click for the Capsule</a>. */}
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
            We were living in completely different realities of what was happening, while I was drowning in medical fears and panic, you were watching someone you cared about become unrecognizable without understanding why, this is why I called it a tragedy. 
           <br />
            From this reflection all I wanted to say is, we were tested by forces beyond our control and unfortunate sequence of events. And the person who fell in love with you in November, who wanted to protect you from everything—that person never wanted to hurt you, not for a second. He never stopped caring. Even sick, he was trying but his struggles overshadowed his care. 
            <br /><br />
            Life tested me in those few weeks in ways I didn't know where possible, and I wasn’t prepared. I wish I could have been stronger for you. I wish I could have said 'I'm not okay' instead of letting my pain strain us. I wish we had some time to breathe. 
            <br />Alas,<br />
            <b>One of the most beautiful things in my life happened during one of the most painful seasons of my life, and I wish I had more strength.</b>
           

            <br /><br />
            <em>Thank you for loving me during one of the hardest chapters of my life.</em>

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

      <div className="gallery-note-box fixed-gallery">
            <p>
            Here are some memories of you, I am not in them, that I couldn't erase
            but it hurt too much to keep as well. You may want to see them someday.<br />
            </p>
            <Link href="/gallery" className="nav-button">→ Go to Gallery</Link>
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
