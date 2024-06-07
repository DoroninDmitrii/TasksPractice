async function fetchRetry(url, retries = 5, delay = 2000) {
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (attempt < retries) {
        console.log(
          `Attempt ${attempt + 1} failed: ${error.message}. Retrying in ${delay / 1000} seconds...`
        );
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.log('All retry attempts failed.');
        throw error;
      }
    }
  }
}

(async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        const response = await fetchRetry(url, 5, 1000);
        console.log("Request successful!");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Request failed: ${error.message}`);
    }
})();
