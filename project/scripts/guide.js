
const maintenanceServices = [
    {
        name: "Oil Change",
        category: "engine",
        description: "Changing engine oil helps reduce friction, protect engine parts, and maintain performance."
    },
    {
        name: "Air Filter",
        category: "engine",
        description: "A clean engine air filter helps maintain proper airflow and engine performance."
    },
    {
        name: "Tire Maintenance",
        category: "safety",
        description: "Checking tire pressure and tread condition helps improve safety and reduce tire wear."
    },
    {
        name: "Brake Inspection",
        category: "safety",
        description: "Regular brake inspections help identify worn components and potential braking problems."
    },
    {
        name: "Battery Check",
        category: "electrical",
        description: "Checking the battery and its connections can help prevent unexpected starting problems."
    },
    {
        name: "Vehicle Lights",
        category: "electrical",
        description: "Inspecting headlights, brake lights, and turn signals helps keep your vehicle visible."
    }
];

const categoryFilter = document.querySelector("#category-filter");
const guideCards = document.querySelector("#guide-cards");

function displayServices(services) {
    guideCards.innerHTML = "";

    if (services.length === 0) {
        guideCards.innerHTML = `<p>No services found.</p>`;
        return;
    }

    services.forEach((service) => {
        const card = document.createElement("article");
        card.classList.add("guide-card");

        const heading = document.createElement("h3");
        heading.textContent = service.name;

        const description = document.createElement("p");
        description.textContent = service.description;

        const category = document.createElement("p");
        category.classList.add("service-category");
        category.textContent = `Category: ${service.category}`;

        card.append(heading, description, category);
        guideCards.appendChild(card);
    });
}

function filterServices() {
    const selectedCategory = categoryFilter.value;

    if (selectedCategory === "all") {
        displayServices(maintenanceServices);
    } else {
        const filteredServices = maintenanceServices.filter(
            (service) => service.category === selectedCategory
        );

        displayServices(filteredServices);
    }
}

categoryFilter.addEventListener("change", filterServices);

displayServices(maintenanceServices);
