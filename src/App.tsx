import { Player } from '@remotion/player';
import { ActualVideoComposition } from './ActualVideoComposition';

function App() {
  // Video configuration
  const fps = 30;
  
  // Actual video durations in seconds
  const videoDurations = [16, 12, 23]; // bles, brian, sydney
  const totalDurationInSeconds = videoDurations.reduce((sum, duration) => sum + duration, 0);
  const totalDurationInFrames = totalDurationInSeconds * fps; // 51 seconds = 1530 frames

  return (
    <div className="app">
      <h1>Remotion Player Test</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        width: '100%'
      }}>
        <Player
          component={ActualVideoComposition}
          durationInFrames={totalDurationInFrames}
          compositionWidth={1280}
          compositionHeight={720}
          fps={fps}
          style={{
            width: 800,
            height: 450,
          }}
          controls
          autoPlay={false}
          loop={false}
        />
      </div>
    </div>
  );
}

export default App; 