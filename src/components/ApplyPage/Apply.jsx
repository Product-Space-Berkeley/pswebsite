import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import ApplyPanel from './ApplyPanel'
import Navbar from '../Navbar'
import Timeline from './Timeline'
import Footer from '../Footer'


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

const SectionWrap = styled.div`
    will-change: transform;
`

const FooterWrap = styled.div`
    margin-top: auto;
    width: 100%;
`
function Apply() {
    const panelRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return undefined;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return undefined;

    const sections = [
            { ref: panelRef, factor: 0.3, max: 160 },
            { ref: timelineRef, factor: 0.26, max: 140 }
        ];
        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
        let frame = 0;

        const update = () => {
            sections.forEach(({ ref, factor, max }) => {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                const offset = clamp(rect.top * -factor, -max, max);
                ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
            });
            frame = 0;
        };

        const onScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            if (frame) window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <Container>
            <Navbar />
            <SectionWrap ref={panelRef}>
                <ApplyPanel /> 
            </SectionWrap>
            <SectionWrap ref={timelineRef}>
                <Timeline />
            </SectionWrap>
    <FooterWrap>
                <Footer />
            </FooterWrap>
        </Container>
    )
}

export default Apply;
