document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Handle Button Clicks
    const findSpecialistBtn = document.querySelector(".btn-specialist");
    const donateBtn = document.querySelector(".btn-donate");
    const langBtn = document.querySelector(".btn-lang");

    findSpecialistBtn.addEventListener("click", function () {
        document.getElementById("map-container").scrollIntoView({ behavior: "smooth" });
    });

    donateBtn.addEventListener("click", function () {
        alert("Redirecting to donation page...");
    });

    langBtn.addEventListener("click", function () {
        alert("Language switch feature coming soon!");
    });

    // 🔹 Load Google Map with Autism Specialists
    function initMap() {
        var map = L.map("map-container").setView([56.1304, -106.3468], 4); // Center Canada

        // Load OpenStreetMap tiles
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // List of Autism Specialists in Ontario
        var locations = [
            { name: "Jake’s House", address: "200 Consumers Rd, North York, ON", lat: 43.775, lng: -79.34 },
            { name: "Autism Ontario", address: "1179 King St W, Toronto, ON", lat: 43.637, lng: -79.424 },
            { name: "Shining Through Centre", address: "7365 Martin Grove Rd, Woodbridge, ON", lat: 43.773, lng: -79.595 },
            { name: "Geneva Centre for Autism", address: "112 Merton St, Toronto, ON", lat: 43.698, lng: -79.391 }
        ];

        // Add markers
        locations.forEach((loc) => {
            var marker = L.marker([loc.lat, loc.lng]).addTo(map)
                .bindPopup(`<strong>${loc.name}</strong><br>${loc.address}`);
        });

        // Add Search Bar
        var searchControl = new L.Control.Search({
            layer: L.featureGroup(),
            initial: false,
            textPlaceholder: "🔍 Search for a specialist...",
            position: "topright"
        }).addTo(map);
    }

    // Load Map when the page is ready
    initMap();
});
