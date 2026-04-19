const modal = document.getElementById("regModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("registrationForm");


btn.onclick = () => {
    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = (e) => {
    e.preventDefault(); // 

    
    const attendee = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        ticket: document.getElementById("ticketType").value,
        id: Math.floor(Math.random() * 1000000) // Fake ticket ID
    };


    localStorage.setItem("eventRegistration", JSON.stringify(attendee));

    
    alert(`Success! See you there, ${attendee.name}. Ticket ID: ${attendee.id}`);
    
    form.reset();
    modal.style.display = "none";
    
    console.log("Registration Saved:", attendee);
};

form.onsubmit = (e) => {
    e.preventDefault();

 const attendee = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        ticket: document.getElementById("ticketType").value,
        id: "TKT-" + Math.floor(Math.random() * 90000 + 10000)
    };

    // 2. Update the Success Section UI
    document.getElementById("displayTicketName").innerText = attendee.name;
    document.getElementById("displayTicketEmail").innerText = attendee.email;
    document.getElementById("displayTicketType").innerText = attendee.ticket.toUpperCase();
    document.getElementById("displayTicketID").innerText = attendee.id;

    // 3. Switch Views
    form.style.display = "none"; // Hide Form
    document.getElementById("successState").style.display = "block"; // Show Success

    // 4. Save to LocalStorage
    localStorage.setItem("latestTicket", JSON.stringify(attendee));
};

// "Done" button to close modal and reset
document.getElementById("downloadBtn").onclick = () => {
    modal.style.display = "none";
    // Optional: Reset for next time
    setTimeout(() => {
        form.style.display = "block";
        document.getElementById("successState").style.display = "none";
        form.reset();
    }, 500);
};
