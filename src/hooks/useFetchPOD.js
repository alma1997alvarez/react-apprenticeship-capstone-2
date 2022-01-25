import { useState, useEffect } from "react";

const useFetchPOD = ({ date = "" }) => {
  const [fetchedMedia, setFetchedMedia] = useState([]);

  const APIKey = "sy8fG8GZwY63l3pHMwVhXt0LiD5LipkOhg5OCg3W";
  let fetchURL = `https://api.nasa.gov/planetary/apod?date=${date}api_key=${APIKey}&thumbs=true`;

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => setFetchedMedia(data));
  }, [fetchURL]);

  if (fetchedMedia.error) {
    return fetchedMedia.error.message;
  }

  return fetchedMedia;
};

export default useFetchPOD;
