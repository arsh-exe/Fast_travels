document.getElementById('airwaysBookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const flight = document.getElementById('flight').value;
    const seats = document.getElementById('seats').value;

    if (!name || !email || !flight || !seats) {
        alert('Please fill in all the fields.');
    } else {
        alert(`Flight booked successfully!\nName: ${name}\nEmail: ${email}\nFlight: ${flight}\nSeats: ${seats}`);
        
        document.getElementById('airwaysBookingForm').reset();
    }
});
