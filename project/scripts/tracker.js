
const maintenanceForm = document.querySelector("#maintenance-form");
const maintenanceList = document.querySelector("#maintenance-list");
const totalExpenses = document.querySelector("#total-expenses");
const serviceCount = document.querySelector("#service-count");

// Load saved records from localStorage
let maintenanceRecords = [];

try {
    const savedRecords = JSON.parse(
        localStorage.getItem("maintenanceRecords")
    );

    if (Array.isArray(savedRecords)) {
        maintenanceRecords = savedRecords;
    }
} catch (error) {
    console.error("Unable to load maintenance records.", error);
}

// Save records
function saveRecords() {
    localStorage.setItem(
        "maintenanceRecords",
        JSON.stringify(maintenanceRecords)
    );
}

// Display records and update summary
function displayRecords() {
    maintenanceList.innerHTML = "";

    if (maintenanceRecords.length === 0) {
        maintenanceList.innerHTML = `<p>No maintenance records yet.</p>`;
    } else {
        maintenanceRecords.forEach((record) => {
            const card = document.createElement("article");
            card.classList.add("maintenance-record");

            const heading = document.createElement("h3");
            heading.textContent = record.service;

            const details = document.createElement("p");
            details.textContent = `Date: ${record.date} | Mileage: ${record.mileage} | Cost: $${record.cost.toFixed(2)}`;

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.classList.add("delete-button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteRecord(record.id);
            });

            card.append(heading, details, deleteButton);
            maintenanceList.appendChild(card);
        });
    }

    const total = maintenanceRecords.reduce(
        (sum, record) => sum + record.cost,
        0
    );

    totalExpenses.textContent = `$${total.toFixed(2)}`;
    serviceCount.textContent = `${maintenanceRecords.length}`;
}

// Add a new record
function addRecord(event) {
    event.preventDefault();

    const service = document.querySelector("#service").value;
    const date = document.querySelector("#date").value;
    const mileage = Number(document.querySelector("#mileage").value);
    const cost = Number(document.querySelector("#cost").value);

    if (!service || !date || !Number.isFinite(mileage) ||
        mileage < 0 || !Number.isFinite(cost) || cost < 0) {
        return;
    }

    const record = {
        id: crypto.randomUUID(),
        service: service,
        date: date,
        mileage: mileage,
        cost: cost
    };

    maintenanceRecords.push(record);

    saveRecords();
    displayRecords();
    maintenanceForm.reset();
}

// Delete a record
function deleteRecord(id) {
    maintenanceRecords = maintenanceRecords.filter(
        (record) => record.id !== id
    );

    saveRecords();
    displayRecords();
}

// Form event
maintenanceForm.addEventListener("submit", addRecord);

// Display saved records when the page loads
displayRecords();
