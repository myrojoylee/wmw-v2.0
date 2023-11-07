import { useState } from "react";

const App = () => {
  const [testMessage, setTestMessage] = useState<string>("");
  async function fetchApiKey() {
    try {
      const apiKeyFetch = await fetch("/api/apiKey");
      const apiKeyFetchData = await apiKeyFetch.json();
      const apiKey = apiKeyFetchData.apiKey;
      return apiKey;
    } catch (e) {
      console.error(e);
    }
  }

  const testServer = async () => {
    const data = await fetchApiKey();
    setTestMessage(data);
  };

  return (
    <>
      <div>
        <button onClick={testServer}>Click to see what the server says:</button>
        <p>{testMessage}</p>
      </div>
    </>
  );
};

export default App;
