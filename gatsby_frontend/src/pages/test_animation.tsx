import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default function TestPage() {
    const [props] = useSpring(() => ({
        width: 100,
        from: { width: 0 },
        config: { duration: 3000 }  // ms
    }))
    return (
        <TestStyle>
            <main>
                <div className="App">
                    <div className="Physics">
                        <div className="circle A">A</div>
                        <div className="divider_space">
                            <animated.div 
                                className="Physics__divider" 
                                style={{ width: props.width.interpolate(w => `${w}%`) }}
                            />
                            {/* <div className="Physics__divider"/> */}
                        </div>
                        <div className="circle B">B</div>                        
                    </div>
                    <p className="link"><a href="/test_animation">(Re - ) Start Animation</a></p>
                </div>
            </main>
        </TestStyle>
    )
}

const TestStyle = styled.div`
.App {
    width: 80%;
    height: 12rem;
    padding: 4rem;
    background-color: lightgray;
    margin: auto;
}
.Physics {
    height: 100%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
}
.circle {
    width: 2rem;
    height: 2rem;
    border-radius: 3rem;
    text-align: center;
    padding: 2rem;
    border: 2px solid;    
    background-color: lightgrey;
    &.A {
        margin: 3rem 0 3rem 3rem;
    }
    &.B {
        margin: 3rem 3rem 3rem 0;
    }
}
.divider_space {
    width: 600px;
    align-items: left;
}
.Physics__divider {
    width: 100%;
    height: 3px;
    background-color: grey;
    margin-top: 60px;
}
.link {
    margin: 10px;
    text-align: center;
}
`