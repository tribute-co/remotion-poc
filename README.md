# Remotion Player Test

This project demonstrates how to use Remotion's Player component to play 3 videos in sequence. It showcases playing your MP4 files one after another in a single composition.

## Project Structure

- `src/ActualVideoComposition.tsx` - Main composition that plays the MP4 files from the public folder
- `src/App.tsx` - Main application with player and controls
- `public/` - Contains the video files:
  - `bles-720p.mp4`
  - `Brian.mp4`
  - `sydney-einstein-720p.mp4`

## How It Works

The composition is configured to:
- Run at 30 FPS
- Play each video for 10 seconds (300 frames each)
- Total duration: 30 seconds (900 frames)
- Videos transition seamlessly from one to the next

The logic calculates which video should be playing based on the current frame:
```typescript
const currentVideoIndex = Math.floor(frame / framesPerVideo);
```

## Features

- **Sequential video playback** of your 3 MP4 files
- **Seamless transitions** between videos
- **Full player controls** for seeking, pause/play, volume, fullscreen
- **Clean interface** with just the videos and timeline
- **Responsive design** with proper aspect ratio

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

4. **Test the player**:
   - Use the player controls to seek through the timeline
   - Watch how the videos transition at 10 and 20-second marks
   - Videos will play automatically in sequence

## Controls

- **Play/Pause**: Space bar or click the play button
- **Seek**: Click on the timeline or drag the slider
- **Volume**: Adjust with the volume slider
- **Fullscreen**: Click the fullscreen button

## Video Sequence

1. **0-10 seconds**: `bles-720p.mp4`
2. **10-20 seconds**: `Brian.mp4`  
3. **20-30 seconds**: `sydney-einstein-720p.mp4`

## Technical Notes

- Built with React 18 and Vite
- Uses Remotion Player 4.0.325
- Compatible with Node.js 14+
- Videos are loaded from the public folder
- Each video loops within its 10-second segment
- Composition automatically switches videos based on timeline position
- Clean, minimal interface focusing on the video content

## Customization

To modify the video sequence:
1. Update the `videos` array in `ActualVideoComposition.tsx`
2. Adjust `videoDuration` to change how long each video plays
3. Modify `fps` for different frame rates
4. Add more videos by extending the array and increasing `numberOfVideos` in App.tsx

## Browser Compatibility

- Works in all modern browsers that support HTML5 video
- Requires JavaScript enabled
- Best performance in Chrome, Firefox, Safari, and Edge 