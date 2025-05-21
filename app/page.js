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
        <p className="sidebar-hint">Tap or click to view</p>
      </div>




      <main className="paper">
        <h2 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          TO WHOM I HURT THE MOST
        </h2>

        <p>I want to begin with what should've been said clearly and purely, long ago:<br />I am sorry, Veda.</p>

        

        <p>
          Sorry for that night when everything broke—for making you feel unsafe and breaking your trust. I crossed a line, and I am fully responsible for my actions. And the harm didn’t end that night. I left the next morning confused, didn’t show up for you during Deewane, and later pushed you for a decision out of panic and fear. I now see how all of that only added to your pain. I didn’t protect your heart when it needed care most. When we broke up, I wrongly texted that "it wasn't me" and used not remembering as an excuse. It was me, a part of me I hadn’t seen before; or mentally prepared to accept. I never thought I could make someone feel unsafe, let alone you – someone I truly loved. I understand that promises mean little compared to actions, and I'm committed to never repeating this behavior. That version of me has no place in my life, and I’ve been working every day to make sure of that.
        </p>

        <p>
          I also need to apologize for the patterns that hurt you long before that night. I didn't respect your need for space, made you feel your needs came second to mine, and for turning my insecurities into arguments about texts, calls, and about not spending time together. I became someone who constantly asked for more when you were already stretched thin. You had told me how busy you'd be, but I took distance as loss and pushed when you needed space. I never meant to make you feel unseen, but I know I did. I truly apologize for that.
        </p>

        <p>
          I know this apology comes late. After everything fell apart, I have wanted to reach out every day. But I realized the hurt you carried came from my actions and any rushed conversation risked more harm than healing. I was also dealing with ongoing health issue that continued for some time after we parted. Most importantly, I needed to truly understand my actions before speaking to you again. This letter comes after honest reflection, not from a place of panic or guilt, but from a genuine desire to acknowledge the hurt I caused you. I should have found a way to express my accountability sooner, and I apologize for the additional pain my silence may have caused.
        </p>

        <p>
          My apology stands complete as is. What follows isn't meant to justify or excuse my actions—nothing can. I'm sharing something I never got to tell you because I believe you deserve the full story.
        </p>
      </main>
      <div className="voice-note-box">
        <p>Text doesn’t do justice to emotion.<br />If you wanted to hear me say this, here’s a voice note.</p>
        <audio controls preload="metadata">
          <source src="/voice/apology.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

      </div>

      


    </div>
  );
}
