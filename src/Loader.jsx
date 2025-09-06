import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="cube-loader">
                <div className="cube-top" />
                <div className="cube-wrapper">
                    {[...Array(4)].map((_, index) => (
                        <span key={index} style={{ '--i': index }} className="cube-span" />
                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .cube-loader {
    position: relative;
    width: 75px;
    height: 75px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube-loader .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube-loader .cube-wrapper .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
    background: linear-gradient(
      to top right,
      hsl(290, 100%, 50%) 0%,  /* Noodatiy binafsha */
      hsl(240, 100%, 50%) 50%,  /* Ko'k */
      hsl(200, 100%, 50%) 100%   /* Yashil */
    );
  }

  .cube-top {
    position: absolute;
    width: 75px;
    height: 75px;
    background: hsl(290, 100%, 50%);
    transform: rotateX(90deg) translateZ(37.5px);
    transform-style: preserve-3d;
  }

  .cube-top::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 75px;
    background: hsl(240, 100%, 40%);
    transform: translateZ(-90px);
    filter: blur(20px);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5),
                0 0 30px hsl(290, 100%, 40%),
                0 0 45px rgba(0, 0, 0, 0.5),
                0 0 60px hsl(240, 100%, 40%);
  }
`;

export default Loader;