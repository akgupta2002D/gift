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
            Veda, I know we had some arguments before Spring Break, but those were just part of moving beyond the initial phase and learning to be a real couple. What wasn't fair was how those final weeks had bad moments shadowing the good ones, some things about the night and the aftermath. These things completely distorted how we both saw what happened. I am sharing the context I didn't get a chance to give you.
            <br /> <br />
            <b>THE STORY – WEEKS BEFORE BREAKUP</b>
            <br /><br />
            When you first found me Veda, around early November, I was an ambitious, independent, and a calm person. Most of all, I was full of love which I was so happy to share with you, and I hope that showed.
            <br /><br />
            It would have remained that way, but life hit me with things I wasn’t prepared for. By Spring Break, the floaters consumed my life. You knew I was affected but not the real extent of it. I wish I could have shown you how bad it looked. Doctors and people around me kept saying they were normal, but they weren’t--visiting specialists in Albany and NYC finally confirmed they were a rare and intrusive condition. But the damage was done, it was messing with my mind and who I was as a person. 
          </>
        )
      },
      {
        title: null,
        content: (
          <>
            Waking up with these things in my vision, left me feeling deeply frustrated. Without realizing, I was withdrawing from life itself in those last weeks – skipped classes and shifts, socializing, talking back home, stopped taking you on dates, and abandoned small things like walking you back to your dorm in the morning. I was finding every excuse to not walk outside during the day because I was scared. This is when I started noticing small changes and becoming bitter. It might have felt like I was trying to hurt you or was dissatisfied with our relationship, but no, I was hurting everywhere and all aspects of my life. I was losing pieces of myself. 
            <br /><br />
           But I acted like I was fine, because that's all I was taught—never burden others or be vulnerable. In those weeks, honestly, you were the only joy in my life, and I needed support, so I wanted you around, but I didn’t ask for that properly. Every major fight we had was about time and it escalated.
           <br /><br />
           <b>Our fights:</b>
           <br />
           When you returned from Spring Break saying you had no time the next few weeks, my vision and my anxiety were getting worse- terrible timing that set us both up for failure. I planned your birthday night for weeks, I hope you enjoyed. 
          </>
        )
      }
    ]
  },
  {
    spreadTitle: 'The fights ',
    pages: [
      {
        title: null,
        content: (
          <>
            But at lunch the next day, when I asked about your schedule, because I wanted to take you on a proper birthday date that week. And out of care said 'be careful' about weekday drinking, your response really broke my heart. 
            <br /><br />
            I was already stressed with vision but trying so hard to give you a good time, and that response didn’t sit well. I spiraled, on top I missed a test, and sent those emotional texts, unable to process your apology properly. I didn’t realize the impact of those text then. Next day, you confronted me in dhall, I listened and asked what I could do better. I’d realized I made a big mistake. “Never fumble on your gfs birthday” is a slogan I carry now. I respected your space as much as I could after, and things were improving, atleast I thought. Then, another party at mine, and at the end I had a panic attack due to fear. But you had left to sleep. That stung, though you didn’t know.
            <br /><br />
            By this point, I saw things were going south, so, I planned a makeup date for your birthday. We had a good time, but I brought up the scheduling thing because it had been three weeks now. You said, 'I can't give you more than what I'm giving,' it crushed me again because initially you had said you were busy only for next few weeks. But this didn't align with that and we fought. That response just doesn’t leave any place to work or feel validated. 
             
          </>
        )
      },
      {
        title: null,
        content: (
          <>
             I already know you are busy, and I didn’t want a lot of time, I just needed predictability and a schedule, so I wasn’t in the dark. It is not a great feeling especially when someone you love is sick. But I didn’t convey this properly instead dragged our conversations, that’s my bad. I did realize that week and even told you that I need to learn to stop. And I would have, I promise.
             <br /><br />
             The timing was cruel—things got worse for me just as your academic season got hardest. This mismatch was the reason for most of our fights about time together. My brain interpreted you being busy as abandonment, because I was already feeling so alone due to my sickness. And for you, my need for time and communication felt like control and you felt trapped. But that wasn't it. All I wanted to say was that your presence made me feel safe—and less sick and a bit hopeful. I just couldn't find the right words.
             <br /><br />
             <b>Week before our breakup</b>, we finally started talking about attachment styles and moving to a next phase of relationship where we would have the difficult conversations; we had decided on talking about things and setting boundaries; Also, as my vision improved, I would have felt much calmer, and your workload was going to ease up. I know you think I never understood but I really did, and I wanted to make it right. 
          </>
        )
      },
      
    ]
  },
  {
    spreadTitle: "THE NIGHT",
    pages: [
      {
        title: null,
        content: (
          <>

             But life had other plans, this part is what you really don’t know. The week before our breakup, I received another devastating diagnosis: blood in my urine, requiring scans on all my vital organs. It could mean anything, and it was really scary. If you remember, one of the nights I had run to the washroom saying something hurt—this was related to that. This new health scare came while I was already struggling with my vision and feeling us drift apart. I was terrified and wanted to talk to you—because if something was seriously wrong, I'd want you there. But we didn't get enough time that week—you were swamped with commitments. We kept missing each other Monday through Wednesday, the bowling thing, caught an hour on Thursday, and Friday you returned drunk, even Saturday morning you had to run to study. The timing just wasn't there for me to share what I was going through because I was also processing and finding a right time to tell you, prolly after the scans. But it was eating me alive, I don’t know if you noticed my frustration that week, everything bugged me. I was very scared.
             <br /><br />
             Overwhelmed by the diagnosis, the anxiety about my vision, and not having any answers, I had started taking stress and anxiety supplements that week—just trying anything to feel okay. That night, I took the supplements as usual, not realizing how they might interact with alcohol. 
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
            And I drank to escape the pain, I just wanted to feel okay, to go numb for one night and dance. But it made everything worse. I blacked out within the first 15 minutes of you entering the house, even though I hadn't been drinking for long. I remember sending you those videos of us playing with cars earlier that night. Plus, most I had was high noon that I bought for you. This has never happened to me before—I know I get energetic but can usually handle 20-25 drinks, and I've never been told I misbehaved with anyone, even when blackout drunk. 
           <br /><br />
            This wasn't just being drunk—it was a dangerous chemical reaction combined with the worst crisis of my life, creating behavior so out of character. Even others told me, I was acting different that night. I did research on the meds later and confirmed that mental distortions, loss of motor ability, rapid blacking out, and more can happen. And they strongly suggest against mixing it with alcohol. This doesn’t excuse my behavior, I choose alcohol, and I should have read about the meds. But I cannot deny that it played a significant role.
            <br /><br />
            I can't tell you anything about the parts of the night I don't remember. But whatever happened, it wasn't what you might have thought—I wasn't trying to hurt you or acting out because of our relationship issues. Even that night, I called you to ask what high noon flavor you liked because your presence and needs mattered to me. 



          </>
        )
      },
      
    ]
  },
  {
    spreadTitle: "THE BREAK Up",
    pages: [
      {
        title: null,
        content: (
          <>

             What I should’ve done was tell you I wasn’t okay and skip the party entirely. In fact, I did call you that night before drinking, asking if we can skip the party early and talk, but you said you didn’t want to, and I also just wanted to have fun. Everything collapsed after that night. I kept making mistakes the next day—leaving that morning, Deewane, how I handled our conversation—because I was panicking and couldn't think clearly. I just needed some time figure things out, tell you what had happened and give the accountability and care you deserved. But you changed your mind, I would have appreciated if we had taken space, talked about things and then leave if things didn’t feel right. Atleast we would have saved few months of pain. But I respect what you decided to protect your mind and gave you space.
             <br /><br />
             The most painful part is the Monday morning, the day we broke up, I was in a hospital getting those scans. When your message came, asking to meet in the evening, I replied I couldn’t and said I was fine with your decision. Not because I didn’t care—but because I was shattered. I had no emotional or mental energy left, and life felt uncertain. I was crying, waiting for medical answers while facing the reality that I'd just destroyed our relationship from a night I have no recollection of. I lost hope. I was angry at life. 
             <br /><br />
             <b>Life got too real, and the timing couldn’t be any worse.</b>
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
            I wanted to text, call, or meet you after some time and share everything but I saw that you didn’t even want to look at me, which is fair. I knew any rushed explanation would only hurt you, would sound like an excuse or an attempt to get you back. 
           <br /><br />
            And damn, seeing you cry that day, I hated myself. I had promised myself that the only tear from your eyes would be of joy. I understood then that if I am ever to get to talk to you again or even deserve to write to you, I needed to get myself back, get over this health crisis, and bad headspace I had. The health stuff kept going, the scans came out fine, but it took some time and more appointments. I had to fix my vision; I went to Albany and NYC until I found a treatment. I literally proposed a treatment after doing research for months. As I did all that, I also reflected on our relationship, worked hard to rebuild myself and gain clarity as to what happened. This letter is that reflection. 
            <br /><br />
            ---Veda, I always saw your pain and I wanted to figure things out. I was trying to be there for you, but I was also consumed by my own struggles to fully support you, I needed support myself. I knew how much you were already holding—your art, friends, health, sleep. We were just living in completely different realities of what was happening, while I was drowning in medical fears and panic, you were feeling like I didn’t care and I didn’t understand you. 



          </>
        )
      },
      
    ]
  },
  {
    spreadTitle: "Reflection",
    pages: [
      {
        title: null,
        content: (
          <>

             From this reflection all I wanted to say is, it wasn’t really the relationship issues that caused problem, it were external factors like unexpected health scares, busy schedule, and that night and aftermath full of accidents. There were a lot of mistakes I made as well, but I also know I would have learned and figured things if everything didn’t happen all at once. And the person who fell in love with you in November, who wanted to protect you from everything—that person never wanted to hurt you, not for a second. He never stopped caring. Even sick, he was trying but his struggles overshadowed his care. 
             <br /><br />
             Life tested me in those few weeks in ways I didn't know where possible, and I wasn’t prepared. I wish I could have been stronger for you. I wish I could have said 'I'm not okay’. I wish we had some time to breathe, some stolen moments where it was just your hand in mine and nothing else mattered.
             <br /><br />
             And, even with all that storm, somethings remain true no matter what happened.
             <br /><br />
             <b>I was never out there to hurt you.</b> Every part of me wanted only to protect you—I noticed every bump on your skin, every scratch that marked you, even the way your hair fell into your eyes, it bothered me, and I got worried. And maybe that was too much. 
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
           Whenever you were sick or unwell, I didn’t leave your room until you were asleep. I deeply cared about all the little things. Hurting wasn't my intention, I was just drowning in a storm that consumed every shore I'd known, and I didn’t know how to ask for help. But my actions hurt you, I know that with aching clarity and I take responsibility.
           <br /><br />
            <b>And, I have loved you fully.</b> I cared about and remembered every detail of you—the meaning behind your rings, your favorite food, your art and the artist you liked, your friends and your family, and that penguin face that made my heart skip. Even the night before everything shattered, we created memories making pani-puri together, still sick I was. I wasn’t perfect at loving you, but I loved learning about you; Gracie, SZA, Kendrick, and Tate were non-negotiables, when you share about your nemesis I am automatically on your team, and sleep is sacred. With enough time, I would have earned my PhD in loving you.
            <br /><br />
            <b>Lastly, I cannot change what happened that night.</b> I gave you the context to what happened. And if I had the slightest clue how disastrously it would unfold—if life had given me even one experience remotely close to that—I would have learned and done everything to prevent it. If when the microwave hit your finger, I got angry at the microwave, why would I want to hurt you, Veda. I have questioned this every day for the last 2 months.



          </>
        )
      },
      
    ]
  },
  {
    spreadTitle: "SOME THIngs I kept with me",
    pages: [
      {
        title: null,
        content: (
          <>

             I know things have changed and you may think, I never cared or listened to you. Typical of a breakup. But I did, I really did. As long as I can remember, I really wanted to have conversations and understand each other.
             <br /><br />
             If I could spend three days perfecting a portrait of you, I think I would have waited through your busiest seasons without complaining. Without the storm of health scares clouding everything, I would have shown you that I understood my girl was silently enduring a lot. I would have been there for more of those quiet studio nights, not just the handful we shared, really understanding your world and what you needed. I would have listened and changed for you, cuz I believe in sacrifices for love.
             <br /><br />
             And..
             <br /><br />
             If that night hadn’t broken us or if we had been in touch and talked about things. I think things would have made sense and we would have set boudaries. My health improved as well. I would've been stronger for us. An independent and driven me would have respected your space naturally, essentially eliminating most of our fights about time together. Cuz, I would have been busy myself. A strong and healthy me would have never resolved to alcohol and meds to numb my pain. 
            


          </>
        )
      },
      {
        title: null,
        content: (
          <>
          And if something were to go wrong between us, instead of being defensive about our breakup, I would have given you space and asked for a chance instead. Don’t love or trust me immediately but give me a chance, because life wasn't fair to us, and the care wasn’t fake. A chance to impress you again without any commitment, to build enough good memories that the old pain would fade eventually and to build the trust one step at a time, to do it right this time. A healthy me and a little less busy you would have been great. Almost like what you once wanted from me: To love you first. 
          <br /> <br />
           I don’t know what life has for us, so the least I could offer was truth, change and be honest with you. I don’t expect anything, but I wanted you to know. I have realized in the past few months that life is too uncertain, and it needs to lived, a little scared and a little happy.
           <br /><br />
            And, if any of this concerned you, I promise you I will never be of any inconvenience to you without your permission ever after today. I was shaken by life a little bit, but I am back and the same old Ankit, actually even better, and respect matters more than anything. And, I keep my promises.
            <br /><br />
            With deepest apologies and truth.



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
