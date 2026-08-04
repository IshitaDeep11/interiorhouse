import { useReveal } from '../useReveal'
import { useRef, useState } from 'react'

const projects = [
  { img: '/images/img9.jpeg', cat: 'Living Room', name: 'Modern Luxury Living' },
  { img: '/images/img12.jpeg', cat: 'Modular Kitchen', name: 'Sleek White Kitchen' },
  { img: '/images/img17.jpeg', cat: 'Master Bedroom', name: 'Warm Wood Retreat' },
  { img: '/images/img7.jpeg', cat: 'False Ceiling', name: 'Tray Ceiling Design' },
  { img: '/images/img18.jpeg', cat: 'TV Unit', name: 'Feature Wall Unit' },
  { 
    type: 'video', 
    src: '/images/work.mp4', 
    poster: '/images/img1.jpeg', 
    cat: 'Showcase', 
    name: 'Luxury Work Reel' 
  },
]

export default function Projects() {
  const r1 = useReveal()
  const r2 = useReveal()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // Play/Pause Function
  const handleVideoClick = (e) => {
    const video = e.currentTarget.querySelector('video');
    const playBtn = e.currentTarget.querySelector('.video-play-btn');
    
    if (video) {
      if (video.paused) {
        video.play();
        if (playBtn) playBtn.style.opacity = '0';
      } else {
        video.pause();
        if (playBtn) playBtn.style.opacity = '1';
      }
    }
  };

  // Sound Toggle Function
  const toggleSound = (e) => {
    e.stopPropagation();
    const video = e.currentTarget.closest('.proj-card').querySelector('video');
    const soundBtn = e.currentTarget;
    
    if (video) {
      video.muted = !video.muted;
      if (video.muted) {
        soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      } else {
        soundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header reveal" ref={r1}>
        <div>
          <div className="section-tag">Our Portfolio</div>
          <h2 className="section-title">Recent <em>Projects</em></h2>
        </div>
        <button className="btn-secondary" style={{ flexShrink: 0 }} onClick={() => scrollTo('contact')}>
          Discuss Your Project
        </button>
      </div>
      
      <div className="projects-grid reveal" ref={r2}>
        {projects.map((p, i) => {
          if (p.type === 'video') {
            return (
              <div 
                className="proj-card" 
                key={i}
                onClick={handleVideoClick}
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  gridColumn: 'span 1'
                }}
              >
                <video 
                  src={p.src} 
                  poster={p.poster}
                  loop 
                  playsInline 
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                
                {/* Play/Pause Button */}
                <div 
                  className="video-play-btn"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    border: '2px solid #C8A45A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C8A45A',
                    fontSize: '18px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    zIndex: 2
                  }}
                >
                  <i className="fas fa-play" style={{ marginLeft: '4px' }}></i>
                </div>

                {/* Sound Toggle Button */}
                <div 
                  onClick={toggleSound}
                  style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '14px',
                    cursor: 'pointer',
                    zIndex: 3,
                    transition: 'all 0.2s ease',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                  className="sound-toggle-btn"
                  title="Toggle Sound"
                >
                  <i className="fas fa-volume-up"></i>
                </div>

                {/* Text Overlay */}
                <div className="proj-overlay">
                  <div className="proj-cat">{p.cat}</div>
                  <div className="proj-name">{p.name}</div>
                </div>
              </div>
            )
          }

          
          return (
            <div className="proj-card" key={i}>
              <img src={p.img} alt={p.cat} />
              <div className="proj-overlay">
                <div className="proj-cat">{p.cat}</div>
                <div className="proj-name">{p.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}