function submitForm() {
    var fullName = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var mobilenumber= document.getElementById("mobilenumber").value;
    var formData = JSON.parse(localStorage.getItem("formData")) || [];

    if (fullName.trim() !== "" && address.trim() !== "" && mobilenumber.trim() !=="") {
        // Push the new data to the array
        formData.push({fullname: fullName, address: address,mobilenumber: mobilenumber});

        // Store the updated array in localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Display the submitted data in table format
        displayFormData(formData);
    } else {
        alert("Please fill in both name and address fields.");
    }
}

function displayFormData(formData) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content

    // Create a table
    var table = document.createElement("table");
    table.innerHTML = "<tr><th>Name</th><th>Address</th></tr><tr><th>mobilenumber</th>";

    // Populate the table with data
    formData.forEach(function(entry) {
        var row = table.insertRow();
        row.insertCell(0).innerText = entry.fullname;
        row.insertCell(1).innerText = entry.address;
        row.insertCell(2).innerText = entry.mobilenumber;
    });

    // Append the table to the output div
    outputDiv.appendChild(table);
}