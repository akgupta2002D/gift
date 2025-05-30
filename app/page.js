import './globals.css';

export default function Home() {
  return (
    <div className="page">
      <div className="background-sheet sheet1" />
      <div className="background-sheet sheet2" />

      <div className="left-sidebar scroll-aware">
        <div className="sidebar-topic">Two Letters Two Truths</div>
        <a href="/" className="nav-button highlight-button">The Apology</a>
        <a href="/story" className="nav-button highlight-button">Somethings Untold</a>
        <p className="sidebar-hint">Tap or click above to view</p>
      </div>

       


      <main className="paper">
        <h2 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          TO WHOM I HURT THE MOST
        </h2>

        <p>Veda, <br /> I am deeply sorry.</p>
        <p>
          I am sorry for the night- for making you feel unsafe. I had always wished to be the pillar, one standing between you and any harm. That night, I became the hurt itself. I regret it—every single day. I also didn't handle things well afterward. I woke up confused the next day when you said you want to break up, and instead of asking what happened, I left, didn’t show up for you during Deewane, and later that day when you shared what had happened, I pushed you into making a decision out of panic and confusion instead of being there for you and respecting your emotions. It must have felt like, he is the one who messed up and he is demanding things from me. I didn’t protect your heart when it needed care most. And when you texted the next day, I didn’t show up and instead replied saying “it wasn’t me”. It was an emotional text-there were other things that impaired my judgement and was still processing the night I had no recollection of. But that text was wrong too. I know it hurt you, you expected better from me. I should have showed up and told you what I was truly feeling.
        </p>

        <p>
        I never thought I could make someone feel unsafe, let alone you – someone I truly loved. I know words mean little in front of actions, but I'm committed to never being that person again. I've been doing the work to understand, confront and change the parts of myself that led to that night. It was a first and it will be a last. That version of me has no place in my life.
        </p>

        <p>
          I also want to apologize for the hurt I caused before that night. I didn't respect when you needed space, kept you awake too late, and argued about time together. I made you feel like you weren't doing enough, which wasn't fair to you. If there were other moments when I failed to show up the way you needed, I'm sorry for those too.
        </p>

        <p>My apology stands complete as is. No context can change what I did – nothing.</p>
        <p>
          P.S: None of this came from wanting to hurt you. I was going through some difficult things at the time that I wasn't handling well, and unfortunately the timing meant we didn't get the chance to talk. I didn’t even know how to share. You ended up bearing the weight of struggles that weren't yours. It was a sequence of difficult events with no time to breathe between them, too many external factors hitting us at once. And we each carried a different story of what happened during the last weeks and our breakup, and that is the saddest part. Almost a perfect tragedy.
          <br />
          <a href="/story" className="inline-boxed-link strong-highlight">
            Click to read - Somethings Untold
          </a>
          
        </p>
        
      </main>

      <div className="voice-note-box">
        <p>Scroll down on the letter to see everything.</p>

      </div>
      



    </div>
  );
}
