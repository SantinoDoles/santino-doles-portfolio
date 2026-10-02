import { Braces, Check, Code2 } from 'lucide-react'

export function ProfileCode() {
  return (
    <div className="profile-visual" aria-label="A code-inspired introduction to Santino">
      <div className="visual-grid" aria-hidden="true" />
      <div className="floating-label"><span className="status-dot" /> Learning. Building. Growing.</div>
      <div className="code-window">
        <div className="code-titlebar">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span><Code2 size={14} /> santino.js</span>
          <Braces size={15} aria-hidden="true" />
        </div>
        <div className="code-content" aria-hidden="true">
          <div><span className="line-number">01</span><span className="code-comment">{'// A little about me'}</span></div>
          <div><span className="line-number">02</span><span><b>const</b> developer <b>=</b> {'{'}</span></div>
          <div><span className="line-number">03</span><span>&nbsp; name: <em>&apos;Santino Doles&apos;</em>,</span></div>
          <div><span className="line-number">04</span><span>&nbsp; role: <em>&apos;Student & Developer&apos;</em>,</span></div>
          <div><span className="line-number">05</span><span>&nbsp; studying: <em>&apos;Multimedia Web Dev&apos;</em>,</span></div>
          <div><span className="line-number">06</span><span>&nbsp; interests: {'['}</span></div>
          <div><span className="line-number">07</span><span>&nbsp;&nbsp;&nbsp; <em>&apos;Technology&apos;</em>, <em>&apos;Creative coding&apos;</em></span></div>
          <div><span className="line-number">08</span><span>&nbsp; {'],'}</span></div>
          <div><span className="line-number">09</span><span>&nbsp; alwaysLearning: <b>true</b></span></div>
          <div><span className="line-number">10</span><span>{'};'}</span></div>
          <div><span className="line-number">11</span><span>&nbsp;</span></div>
          <div><span className="line-number">12</span><span>developer.<strong>buildSomethingGreat</strong>();<i className="code-cursor" /></span></div>
        </div>
        <div className="code-status"><span><span className="status-dot" /> Open to possibilities</span><span>JavaScript</span></div>
      </div>
      <div className="build-label"><span className="check-icon"><Check size={15} /></span><span>Curiosity meets creativity.<small>One line of code at a time.</small></span></div>
    </div>
  )
}
