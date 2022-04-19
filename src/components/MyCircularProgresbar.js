import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MyCircularProgressbar = () => {
  const [value, setValue] = useState(0);
  const valueEnd = 584;

  useEffect(() => {
    if(value < valueEnd) {
      setValue(value + 1);
    }
  }, [value]);

  return (
    <div style={{ width: 200, height: 200, marginLeft: "50px" }}>
      <CircularProgressbarWithChildren
        value={value}
        maxValue={2000}
        text={value + " PPM"}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          //rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'round',

          // Text size
          textSize: '14px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.15,
          //pathTransition: 'none',

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(62, 152, 199, ${value / 2000})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      >
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default MyCircularProgressbar;