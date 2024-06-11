const properties = [
  { id: 1, place: 'Chennai', bedrooms: 2, bathrooms: 1, nearby: 'Hospital', seller: 'John Doe', contact: 'john@example.com' },
  { id: 2, place: 'Trichy', bedrooms: 3, bathrooms: 2, nearby: 'Park', seller: 'Jane Smith', contact: 'jane@example.com' },
];

document.addEventListener('DOMContentLoaded', function() {
  displayProperties(properties);
});

function displayProperties(properties) {
  const propertyList = document.getElementById('propertyList');
  propertyList.innerHTML = '';
  properties.forEach(function(property) {
    const propertyItem = document.createElement('div');
    propertyItem.classList.add('property');
    propertyItem.innerHTML = `
      <h3>${property.place}</h3>
      <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
      <p><strong>Nearby:</strong> ${property.nearby}</p>
      <button onclick="showSellerDetails(${property.id})">I'm Interested</button>
    `;
    propertyList.appendChild(propertyItem);
  });
}

function showSellerDetails(propertyId) {
  const property = properties.find(prop => prop.id === propertyId);
//   alert(Seller: ${property.seller}\nContact: ${property.contact});
}

function applyFilters() {
  const placeFilter = document.getElementById('placeFilter').value.toLowerCase();
  const bedroomsFilter = parseInt(document.getElementById('bedroomsFilter').value);
  const bathroomsFilter = parseInt(document.getElementById('bathroomsFilter').value);

  const filteredProperties = properties.filter(function(property) {
    return (property.place.toLowerCase().includes(placeFilter) || placeFilter === '') &&
           (isNaN(bedroomsFilter) || property.bedrooms === bedroomsFilter) &&
           (isNaN(bathroomsFilter) || property.bathrooms === bathroomsFilter);
  });

  displayProperties(filteredProperties);
}

function resetFilters() {
  document.getElementById('placeFilter').value = '';
  document.getElementById('bedroomsFilter').value = '';
  document.getElementById('bathroomsFilter').value = '';
  displayProperties(properties);
}
