'use client';

import { useState } from 'react';
import '../globals.css';
import './capsule.css';
import Link from 'next/link';

export default function Capsule() {
  const [opened, setOpened] = useState(false);

  const capsulePages = [
    {
      title: 'for you',
      content: (
        <>
        I have loved you fully. I cared about and remembered every detail of you—the meaning behind your rings, your favorite food, your art and the artist you liked, your friends and your family, and that penguin face that made my heart skip. And even sick I was trying, to understand your needs around space and wanted to find a middle ground. Even the night before everything shattered, we created memories making pani-puri together. I wasn't perfect at loving you, we had our differences, but I loved learning about you; I was almost there getting to like those dog reels and Gracie is good.
        <br /><br />
          Every part of me wanted only to protect you—I noticed every bump on your skin, every scratch that marked you, even the way your hair fell rebelliously into your eyes. It hurts me to know that I hurt you. Our relationship was tested by too many external factors, health issues, time management, workload, and really bad sequence of events. I also know if we weren't struggling before that night, you would have gotten angry at me, but you wouldn't lost hope. I am sorry I couldn't save it.
          <br /><br />
          

        </>
      )
    },
    {
      title: 'What I would have done differently',
      content: (
        <>
          If life hadn't collapsed on me all at once or if I had been healthier quicker, I believe we would have found our way or at least tried fully, cuz love wasn't an issue. I would've been stronger for us. An independent me would have respected your space naturally and I would have never resolved to alcohol to numb my pain. Instead of being defensive about our breakup, I would have asked for a chance to build enough good memories that the old pain would fade. Almost like what you once wanted from me: To love you first.
          <br /><br />
          Also, I would prove to you that people can change and trust can be rebuilt. I would have said, you didn't trust me when you first met me, I built it, I can again.
          And the week our relationship ended was the first week we talked about attachment styles and how they affect us. We were finally reaching a place where we would have figured it out.
          <br /><br />
          
          With love, deepest apologies, and nothing left unsaid.
          <br /> <br />
          
        </>
      )
    }
  ];

  return (
    <div className="container">
      {/* Always visible apology sidebar */}
      <div className="left-sidebar scroll-aware fixed-sidebar">
        <Link href="/" className="nav-button highlight-button">The Apology - Go back</Link>
      </div>

      {/* Always visible gallery box */}
        {opened && (
        <div className="gallery-note-box fixed-gallery">
            <p>
            Here are some memories of you, I am not there, that I couldn't erase
            but it hurt too much to keep as well.<br />
            </p>
            <Link href="/gallery" className="nav-button">→ Go to Gallery</Link>
        </div>
        )}

      {/* Capsule opening prompt */}
      {!opened ? (
        <div className="capsule-popup">
          <h2 className="capsule-title">CAUTION!</h2>
          <p className="capsule-text">
            These texts are personal truths that I carry with me. They are not meant to sway or pressure—only to reveal what stayed buried inside me.
            <br /><br />
            Please open only if your heart is ready.
          </p>
          <button onClick={() => setOpened(true)} className="nav-button capsule-button">
            Open it!
          </button>
        </div>
      ) : (
        <div className="story-flipbook">
          <div className="flipbook-wrapper">
            <h2 className="spread-title">What my heart feels for you</h2>
            <div className="flipbook-pages">
              <div className="page">
                <h3 className="story-title">{capsulePages[0].title}</h3>
                <p className="story-text">{capsulePages[0].content}</p>
              </div>
              <div className="page">
                <h3 className="story-title">{capsulePages[1].title}</h3>
                <p className="story-text">{capsulePages[1].content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}