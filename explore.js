async function fetchExploreData() {
 try {
    const response = await fetch('explore.json');
    if (!response.ok) {
      throw new Error('Failed to fetch the explore data.');
    }
    const data = await response.json();
    return data;
 } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
 }
}

// Usage
fetchExploreData().then(data => {
 console.log('Explore data:', data);
});
