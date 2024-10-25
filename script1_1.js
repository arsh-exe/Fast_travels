
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const bus = document.getElementById('bus').value;
    const seats = document.getElementById('seats').value;

    if (!name || !email || !bus || !seats) {
        alert('Please fill in all the fields.'); 
    } else {
        alert(`Ticket booked successfully!\nName: ${name}\nEmail: ${email}\nBus: ${bus}\nSeats: ${seats}`);
        
        document.getElementById('bookingForm').reset();
    }
});
