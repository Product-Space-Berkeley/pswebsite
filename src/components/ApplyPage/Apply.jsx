import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import ApplyPanel from './ApplyPanel'
import Navbar from '../Navbar'
import Timeline from './Timeline'
import Footer from '../Footer'

function RevealSection({ children, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section ref={ref} className={`${className} ${visible ? "is-visible" : ""}`}>
      {children}
    </section>
  );
}

const Container = styled.div`
    background: radial-gradient(circle at 20% 0%, rgba(62, 38, 100, 0.3), transparent 55%),
        radial-gradient(circle at 80% 20%, rgba(82, 52, 120, 0.22), transparent 50%),
        linear-gradient(180deg, #0a0612 0%, #0b0712 60%, #09060f 100%);
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

@media only screen and (max-width: 800px) {
    overflow-x: hidden;
}
`

const SectionReveal = styled(RevealSection)`
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const TimelineWrapper = styled.div`
  opacity: 0;
  transform: translateY(24px);
  animation: delayedFadeIn 0.7s ease 0.3s forwards;

  @keyframes delayedFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
  }
`;

const FooterWrap = styled.div`
    margin-top: auto;
    width: 100%;
`

function Apply() {

    return (
        <Container>
            <Navbar />
            <SectionReveal>
                <ApplyPanel />
                <TimelineWrapper>
                    <Timeline />
                </TimelineWrapper>
            </SectionReveal>
            <FooterWrap>
                <Footer />
            </FooterWrap>
        </Container>
    )
}

export default Apply;
