const newsevent = document.getElementById("news-event");

const getData = async () => {
  try {
    const response = await fetch('/headline');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const titles = {
  NewsHeadline: 'News',
  Event: 'Events',
  Certificate: 'Certificates'
};

const renderData = async () => {
  try {
    const data = await getData();

    // Clear existing content
    newsevent.innerHTML = '';

    Object.keys(titles).forEach((key) => {
      const div = document.createElement('div');
      div.className = "col-md-4 mb-4";

      const items = data?.[0]?.[key] || []; // Retrieve items or fallback to an empty array

      // Build the UI for each category
      div.innerHTML = `
        <div class="card h-100">
          <div class="card-header bg-primary text-white text-center">
            <h5 class="m-0">${titles[key]}</h5>
          </div>
          <div class="card-body">
            ${
              items.length === 0
                ? `<p class="text-center text-muted">No ${titles[key]} available.</p>`
                : items
                    .map((item) =>
                      item.type === "Certificate"
                        ? `<a href="${item.pdf}" target="_blank" class="d-block text-primary mb-2">📄 ${item.description}</a>`
                        : `<p class="border p-2 mb-2"> 
                            <span class="badge bg-danger new-badge">NEW</span> 
                            ${item.description}
                          </p>`
                    )
                    .join("")
            }
          </div>
        </div>
      `;
      newsevent.appendChild(div);
    });
  } catch (error) {
    console.error('Error rendering data:', error);

    // Display fallback message if an error occurs
    newsevent.innerHTML = `<div class="text-center">
      <p class="border p-3 text-danger">An error occurred while loading the data.</p>
    </div>`;
  }
};

renderData();
