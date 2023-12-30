document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const fileInput = document.getElementById('pointCloudFile');
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('pointCloud', file);
  
      try {
        const response = await fetch('YOUR_BACKEND_ENDPOINT', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const result = await response.json();
          document.getElementById('result').innerText = result.message;
        } else {
          throw new Error('Conversion failed');
        }
      } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = 'Error during conversion';
      }
    }
  });



document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
});

function convertPointCloud() {
    const inputFile = document.getElementById('pointCloudInput').files[0];

    if (inputFile) {
        // Implement your point cloud to mesh conversion logic here
        // You may use libraries like Three.js for 3D graphics

        // Example: Display a message
        const meshViewer = document.getElementById('meshViewer');
        meshViewer.innerHTML = '<p>Mesh conversion result will be displayed here.</p>';
    } else {
        alert('Please select a point cloud file.');
    }
}
