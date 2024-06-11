document.addEventListener("DOMContentLoaded", function () {
  const propertyForm = document.getElementById("propertyForm");
  const propertyList = document.getElementById("propertyList");
  const properties = [];

  propertyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const place = document.getElementById("place").value;
    const area = document.getElementById("area").value;
    const bedrooms = document.getElementById("bedrooms").value;
    const bathrooms = document.getElementById("bathrooms").value;
    const nearby = document.getElementById("nearby").value;

    const property = {
      place,
      area,
      bedrooms,
      bathrooms,
      nearby,
    };

    properties.push(property);
    displayProperties();
    propertyForm.reset();
  });

  function displayProperties() {
    propertyList.innerHTML = "";
    properties.forEach(function (property, index) {
      const propertyItem = document.createElement("div");
      propertyItem.classList.add("property");
      propertyItem.innerHTML = `
        <h3>Property ${index + 1}</h3>
        <p><strong>Place:</strong> ${property.place}</p>
        <p><strong>Area:</strong> ${property.area}</p>
        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
        <p><strong>Nearby:</strong> ${property.nearby}</p>
        <button onclick="deleteProperty(${index})">Delete</button>
      `;
      propertyList.appendChild(propertyItem);
    });
  }

  window.deleteProperty = function (index) {
    properties.splice(index, 1);
    displayProperties();
  };
});
