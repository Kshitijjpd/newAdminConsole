export default async function handler(req, res) {
    try {
      // Fetch data from the HTTP API endpoint
      const response = await fetch('http://34.170.86.192/admin/trove');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON data
      const data = await response.json();
      
      // Send the data to the frontend
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  