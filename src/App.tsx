import { Player } from '@remotion/player';
import { ActualVideoComposition } from './ActualVideoComposition';

function App() {
  // Video configuration
  const fps = 30;
  
  // Actual video durations in seconds
  const videoDurations = [16, 12, 23]; // bles, brian, sydney
  const totalSequenceDuration = videoDurations.reduce((sum, duration) => sum + duration, 0);
  
  // Transition durations in seconds
  const fadeTransitionDuration = 15 / fps; // 0.5 seconds
  const wipeTransitionDuration = 15 / fps; // 0.5 seconds
  const totalTransitionDuration = fadeTransitionDuration + wipeTransitionDuration;
  
  // Total duration = sum of sequences - sum of transitions
  const totalDurationInSeconds = totalSequenceDuration - totalTransitionDuration;
  const totalDurationInFrames = Math.round(totalDurationInSeconds * fps); // ~1500 frames

  return (
    <div className="app">
      <h1>Remotion Player Test</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '800px',
          aspectRatio: '16/9',
        }}>
          <Player
            component={ActualVideoComposition}
            durationInFrames={totalDurationInFrames}
            compositionWidth={1280}
            compositionHeight={720}
            fps={fps}
            style={{
              width: '100%',
            }}
            controls
            autoPlay={false}
            loop={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App; 