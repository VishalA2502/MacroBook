import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>
    {
        setHover(!hover)
    }
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Eat Healthy and Tasty</HeroH1>
                <HeroP>
                    Select Search to begin 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter = {onHover} onMouseLeave = {onHover}
                        primary = "true"
                        dark = 'true'
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
