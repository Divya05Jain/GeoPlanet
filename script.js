
function showDialog() {
    document.getElementById("dialog").classList.add("show");
}

function closeDialog() {
    document.getElementById("dialog").classList.remove("show");
}

document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;

    const apiEndpoint = 'https://your-api-endpoint.com/reset-password'; // Replace with API endpoint

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showDialog();
        } else {
            alert('Failed to send reset link. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
