import { createContext, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Track = styled.span`
  width: 100%;
  display: inline-block;
  background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : "var(--color-blue-200)"};
  height: ${({ height }) => (height ? `${height}px` : "2px")};

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${({ color }) =>
      color ? color : "var(--color-blue-500)"};
    width: ${({ currtrack }) => (currtrack ? `${currtrack}%` : "25%")};
  }
`;

const TrackerContext = createContext();

function useTracker() {
  const context = useContext(TrackerContext);
  if (context === undefined)
    throw new Error("useTracker must be used within a TrackerProvider");
  return context;
}

function Tracker({ currtrack, height, children, bgcolor }) {
  return (
    <TrackerContext.Provider value={{ currtrack, height, bgcolor }}>
      {children}
    </TrackerContext.Provider>
  );
}

function Bar({ color }) {
  const { currtrack, height, bgcolor } = useTracker();
  return (
    <Track
      currtrack={currtrack}
      height={height}
      color={color}
      bgcolor={bgcolor}
    />
  );
}

function Progress({ color }) {
  const { currtrack } = useTracker();
  return (
    <span style={{ color: color ? color : "var(--color-ash-900)" }}>
      {currtrack}%
    </span>
  );
}

Tracker.Bar = Bar;
Tracker.Progress = Progress;

Tracker.propTypes = {
  currtrack: PropTypes.number.isRequired,
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
  bgcolor: PropTypes.string,
};

Bar.propTypes = {
  color: PropTypes.string,
};

Progress.propTypes = {
  color: PropTypes.string,
};

export default Tracker;
