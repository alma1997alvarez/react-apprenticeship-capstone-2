import { useState, useEffect } from "react";

const useFetchPOD = () => {
  const [fetchedMedia, setFetchedMedia] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [fetchURL, setFetchURL] = useState("");

  const APIKey = "sy8fG8GZwY63l3pHMwVhXt0LiD5LipkOhg5OCg3W";

  useEffect(async () => {
    if (fetchURL) {
      try {
        const response = await fetch(fetchURL);
        const data = await response.json();
        if (!response.ok) {
          const { msg = "", error: { message = "" } = {} } = data;
          throw new Error(message || msg);
        }
        setFetchedMedia(data);
      } catch (err) {
        const errMsg = await err.message;
        errMsg === "Failed to fetch"
          ? setErrorMessage("There was an error, please try again.")
          : setErrorMessage(errMsg);
      }
    }
  }, [fetchURL]);

  const fetchPOD = (date = "") => {
    setFetchURL(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${APIKey}&thumbs=true`
    );
  };

  return { fetchedMedia, fetchPOD, errorMessage, setErrorMessage };
};

export default useFetchPOD;
