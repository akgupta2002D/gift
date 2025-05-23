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

        <p>Veda, I need to begin with what should have been said clearly and purely long ago. <br /> I am deeply sorry.</p>
        <p>
          I’m sorry for that night—for making you feel unsafe and breaking your trust. I take full responsibility for my actions. I also didn't handle things well afterward. I left the next morning confused, didn’t show up for you during Deewane, and later pushed you for a decision when you needed space. I now see how all of that only added to your pain. I failed to protect your heart when it needed care most. When we broke up, I texted that "it wasn't me" and sounded like alcohol or not remembering was an excuse. That was wrong. It doesn't matter if I don't remember it, the harm was done by me. So, I want to acknowledge that it was me, a part of me I hadn’t seen before and wasn’t mentally prepared to face at the moment. I never thought I could make someone feel unsafe, let alone you – someone I truly loved. That truth shook me deeply. I understand that promises mean little compared to actions, but I'm committed to never repeating this behavior. That version of me has no place in my life, and I’ve been working every day to make sure of that.
        </p>

        <p>
        I also need to apologize for the patterns that hurt you long before that night, that weakened our bond. I didn't respect your need for space, made you feel your needs came second to mine, and for turning my insecurities into arguments about texts, calls, and not spending time together. You had told me how busy you'd be, but I took distance as loss and pushed when you needed space. I never meant to make you feel unseen, but I know I did. I truly apologize for that.
        </p>

        <p>
          I know this apology comes late. I wanted to reach out, but I realized any rushed conversation risked more harm than healing, and I needed to truly understand my actions and the situation before deserving to write to you. This letter comes after honest reflection, not from panic or guilt, but from a genuine desire to acknowledge the hurt I caused you. I apologize for the additional pain my silence may have caused.
        </p>

        <p>My apology stands complete as is. No context can change what I did – nothing.</p>
        <p>
          Veda, if you wondered how someone who once made you feel safest could shatter that safety all in one night, or why I didn't show up the way you'd expect me the next day or during our breakup—there were external circumstances I didn't have time to process or communicate to you. I have put that story here for you to read, if you choose to.
          <a href="/story" className="inline-boxed-link strong-highlight">
            Click to read - Somethings Untold
          </a>
        </p>
        
      </main>
      <div className="voice-note-box">
        <p>Scroll down on the letter to see everything.</p>
        <p>Text doesn’t do justice to emotion.<br />If you wanted to hear me say this, here’s a voice note.</p>
        <audio controls preload="metadata">
          <source src="/voice/apology.m4a" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

      </div>

      


    </div>
  );
}
