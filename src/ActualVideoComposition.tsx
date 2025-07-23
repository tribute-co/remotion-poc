import { Video, AbsoluteFill, Audio } from 'remotion';
import { TransitionSeries, linearTiming, springTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { wipe } from '@remotion/transitions/wipe';

export const ActualVideoComposition: React.FC = () => {
  // Actual video durations in seconds at 30fps
  const videoDurations = [16, 12, 23]; // bles, brian, sydney
  const fps = 30;
  const videoFrameDurations = videoDurations.map(duration => duration * fps);
  
  // Video paths from public folder
  const videos = [
    '/bles-720p.mp4',
    '/Brian.mp4', 
    '/sydney-einstein-720p.mp4'
  ];
  
  // Detect mobile device for audio volume adjustment
  const isMobile = typeof window !== 'undefined' && 
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
     window.innerWidth <= 768);
  
  // Use lower volume on mobile devices due to browser audio handling differences
  const audioVolume = isMobile ? 0.03 : 0.10; // 3% on mobile, 10% on desktop
  
  return (
    <AbsoluteFill style={{ 
      backgroundColor: 'black'
    }}>
      {/* Background Audio - plays throughout entire composition */}
      <Audio
        src="/827581_826370_Assaf_Ayalon_-_Blues_Night_-__AO-000269-1_-_Master_V4_-_82_Bpm_-_300123_-_BOV_-_ORG_-_2444.mp3"
        volume={audioVolume}
        startFrom={0}
      />
      
      <TransitionSeries>
        {/* Video 1: bles-720p.mp4 */}
        <TransitionSeries.Sequence durationInFrames={videoFrameDurations[0]}>
          <Video
            src={videos[0]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </TransitionSeries.Sequence>
        
        {/* Fade transition between video 1 and 2 */}
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ 
            config: { damping: 200 },
            durationInFrames: 15 // 0.5 second fade
          })}
        />
        
        {/* Video 2: Brian.mp4 */}
        <TransitionSeries.Sequence durationInFrames={videoFrameDurations[1]}>
          <Video
            src={videos[1]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </TransitionSeries.Sequence>
        
        {/* Wipe transition between video 2 and 3 */}
        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-left' })}
          timing={linearTiming({ durationInFrames: 15 })} // 0.5 second wipe
        />
        
        {/* Video 3: sydney-einstein-720p.mp4 */}
        <TransitionSeries.Sequence durationInFrames={videoFrameDurations[2]}>
          <Video
            src={videos[2]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
}; 