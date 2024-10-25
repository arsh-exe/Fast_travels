document.getElementById('trainBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const train = document.getElementById('train').value;
    const seats = document.getElementById('seats').value;

    if (!name || !email || !train || !seats) {
        alert('Please fill in all the fields.');
    } else {

        alert(`Ticket booked successfully!\nName: ${name}\nEmail: ${email}\nTrain: ${train}\nSeats: ${seats}`);
        
        document.getElementById('trainBookingForm').reset();
    }
});
