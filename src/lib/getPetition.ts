interface Props {
    collection: string;
  }
  
  export async function getPetition({ collection }: Props) {
    try {
      const response = await fetch(`http://localhost:1337/api/${collection}?populate=*`);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
      if (Array.isArray(data)) {
        return data;
      } else if (data && data.data) {
        return data.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  