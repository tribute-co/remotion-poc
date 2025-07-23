import { Video, AbsoluteFill, Sequence } from 'remotion';

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
  
  return (
    <AbsoluteFill style={{ 
      backgroundColor: 'black'
    }}>
      {/* Video 1: bles-720p.mp4 (0-16 seconds) */}
      <Sequence from={0} durationInFrames={videoFrameDurations[0]}>
        <Video
          src={videos[0]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Sequence>
      
      {/* Video 2: Brian.mp4 (16-28 seconds) */}
      <Sequence from={videoFrameDurations[0]} durationInFrames={videoFrameDurations[1]}>
        <Video
          src={videos[1]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Sequence>
      
      {/* Video 3: sydney-einstein-720p.mp4 (28-51 seconds) */}
      <Sequence from={videoFrameDurations[0] + videoFrameDurations[1]} durationInFrames={videoFrameDurations[2]}>
        <Video
          src={videos[2]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Sequence>
    </AbsoluteFill>
  );
}; 