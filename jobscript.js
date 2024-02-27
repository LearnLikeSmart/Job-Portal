document.addEventListener('DOMContentLoaded', function () {
    // Sample job listings data
    const jobListings = [
        { title: 'CustomerService', type: 'full-time', location: 'Hyderabad', salary: 'Rs.30,000' },
        { title: 'Designer', type: 'part-time', location: 'New York', salary: 'Rs.5o,000' },
        { title: 'Product Developer', type: 'full-time', location: 'Los Angeles', salary: 'Rs.90,000' }
        // Add more job listings as needed
    ];

    const jobListingsContainer = document.getElementById('job-listings');

    // Function to display job listings
    function displayJobListings(listings) {
        jobListingsContainer.innerHTML = '';

        listings.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('job-listing');
            listingElement.innerHTML = `
                <h4>${listing.title}</h4>
                <p><strong>Type:</strong> ${listing.type}</p>
                <p><strong>Location:</strong> ${listing.location}</p>
                <p><strong>Salary:</strong> ${listing.salary}</p>
            `;
            jobListingsContainer.appendChild(listingElement);
        });
    }

    // Initial display of job listings
    displayJobListings(jobListings);

    // Search functionality
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const filteredListings = jobListings.filter(listing =>
            listing.title.toLowerCase().includes(searchTerm) ||
            listing.type.toLowerCase().includes(searchTerm) ||
            listing.location.toLowerCase().includes(searchTerm) ||
            listing.salary.includes(searchTerm)
        );
        displayJobListings(filteredListings);
    });

    // Filter functionality
    const filterOptions = document.getElementById('filter-options');
    const jobTypeSelect = document.getElementById('job-type');

    filterOptions.addEventListener('change', function () {
        const selectedType = jobTypeSelect.value;
        if (selectedType === 'all') {
            displayJobListings(jobListings);
        } else {
            const filteredListings = jobListings.filter(listing => listing.type === selectedType);
            displayJobListings(filteredListings);
        }
    });
});