const properties = [
  { id: 1, place: 'Chennai', bedrooms: 2, bathrooms: 1, nearby: 'Hospital', seller: 'John Doe', contact: 'john@example.com', likes: 0 },
  { id: 2, place: 'Trichy', bedrooms: 3, bathrooms: 2, nearby: 'Park', seller: 'Jane Smith', contact: 'jane@example.com', likes: 0 }
];

const itemsPerPage = 2;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
  displayProperties();
  displayPagination();
});

function displayProperties() {
  const propertyList = document.getElementById('propertyList');
  propertyList.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);
  currentProperties.forEach(function(property) {
    const propertyItem = document.createElement('div');
    propertyItem.classList.add('property');
    propertyItem.innerHTML = `
      <h3>${property.place}</h3>
      <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
      <p><strong>Nearby:</strong> ${property.nearby}</p>
      <button onclick="showSellerDetails(${property.id})">I'm Interested</button>
      <button onclick="likeProperty(${property.id})">Like</button>
      <span>Likes: ${property.likes}</span>
    `;
    propertyList.appendChild(propertyItem);
  });
}
