import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled components for the UI
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const VideoCard = styled.div`
  background-color: #fff;
  width: 280px;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
  font-weight: bold;
`;

const VideoDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  margin-bottom: 10px;
  height: 60px; /* Limits the description to a fixed height */
  overflow: hidden;
`;

const VideoLink = styled.a`
  display: inline-block;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-weight: bold;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;

const App = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [error, setError] = useState(null);

  // Memoized function to fetch related videos
  const fetchRelatedVideos = useCallback(async (videoId) => {
    try {
      const response = await axios.get(
        `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id,snippet&type=video&maxResults=10`,
        {
          headers: {
            "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      );
      setRelatedVideos(response.data.items);
    } catch (error) {
      setError("Error fetching related videos");
      console.error(error);
    }
  }, []);

  useEffect(() => {
    // Fetch related videos for a sample video ID
    const videoId = "7ghhRHRP6t4";  // Example video ID (Maroon 5's Sugar)
    fetchRelatedVideos(videoId);
  }, [fetchRelatedVideos]);

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {relatedVideos.length > 0 ? (
        <div>
          <Title>Related Videos</Title>
          <VideoList>
            {relatedVideos.map((video) => (
              <VideoCard key={video.id.videoId}>
                <VideoThumbnail
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <VideoTitle>{video.snippet.title}</VideoTitle>
                <VideoDescription>
                  {video.snippet.description}
                </VideoDescription>
                <VideoLink
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </VideoLink>
              </VideoCard>
            ))}
          </VideoList>
        </div>
      ) : (
        <LoadingMessage>Loading related videos...</LoadingMessage>
      )}
    </Container>
  );
};

export default App;
