import cv2
import os


def main():
    # Path to the video file
    video_path = "wx_camera_1532557787464.mp4"

    # Check if the video file exists
    if not os.path.exists(video_path):
        print(f"Error: Video file '{video_path}' not found!")
        return

    # Open the video file
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print(f"Error: Could not open video file '{video_path}'")
        return

    print(f"Playing video: {video_path}")
    print("Press 'q' to quit")

    # Get video properties for proper playback speed
    fps = cap.get(cv2.CAP_PROP_FPS)
    delay = int(1000 / fps) if fps > 0 else 30

    # Play the video frame by frame
    while True:
        ret, frame = cap.read()

        # If frame reading was not successful, video has ended
        if not ret:
            print("Video playback finished")
            break

        # Display the frame
        cv2.imshow('Video Player', frame)

        # Wait for delay ms and check for 'q' key press
        if cv2.waitKey(delay) & 0xFF == ord('q'):
            print("Playback stopped by user")
            break

    # Release the video capture object and close windows
    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()
