var registrationDetails = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
};

function saveRegistrationDetails() {
  registrationDetails.name = document.getElementById("name").value;
  registrationDetails.email = document.getElementById("email").value;
  registrationDetails.phone = document.getElementById("phone").value;
  registrationDetails.address = document.getElementById("address").value;
  registrationDetails.password = document.getElementById("password").value;

  localStorage.setItem(
    "registrationDetails",
    JSON.stringify(registrationDetails)
  );

  alert("Registration successful!");
  window.location.href = "login.html";
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var savedRegistrationDetails = JSON.parse(
    localStorage.getItem("registrationDetails")
  );

  if (
    email === savedRegistrationDetails.email &&
    password === savedRegistrationDetails.password
  ) {
    alert("Login successful!");
    window.location.href = "appointment.html";
  } else {
    alert("Incorrect email or password. Please try again.");
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.clear();

  window.location.href = "login.html";
}

var physicians = [
  {
    name: "John Doe",
    date: "2023-05-10",
    specialization: "Physiology",
  },
  {
    name: "Jane Grey",
    date: "2023-05-20",
    specialization: "Family Health",
  },
  {
    name: "Jonathan Moss",
    date: "2023-05-30",
    specialization: "Pediatrics",
  },
  {
    name: "John Doe",
    date: "2023-05-31",
    specialization: "Physiology",
  },
  {
    name: "Jane Grey",
    date: "2023-06-01",
    specialization: "Family Health",
  },
  {
    name: "Jonathan Moss",
    date: "2023-06-02",
    specialization: "Pediatrics",
  },
  {
    name: "John Doe",
    date: "2023-06-03",
    specialization: "Physiology",
  },
  {
    name: "Jane Grey",
    date: "2023-06-04",
    specialization: "Family Health",
  },
  {
    name: "Jonathan Moss",
    date: "2023-06-05",
    specialization: "Pediatrics",
  },
  {
    name: "John Doe",
    date: "2023-06-06",
    specialization: "Physiology",
  },
  {
    name: "Jane Grey",
    date: "2023-06-07",
    specialization: "Family Health",
  },
  {
    name: "Jonathan Moss",
    date: "2023-06-08",
    specialization: "Pediatrics",
  },
  {
    name: "John Doe",
    date: "2023-06-09",
    specialization: "Physiology",
  },
];

localStorage.setItem("physicians", JSON.stringify(physicians));

var savedPhysicians = JSON.parse(localStorage.getItem("physicians"));

function checkAvailability() {
  var physicianName = document.getElementById("physc").value;
  var physicianSpecialization = document.getElementById("spec").value;
  var PhysicianDate = document.getElementById("avail").value;
  var formData = {
    name: physicianName,
    specialization: physicianSpecialization,
    date: PhysicianDate,
  };
  var available = false;
  for (var i = 0; i < savedPhysicians.length; i++) {
    var physician = savedPhysicians[i];
    if (
      physician.name === formData.name &&
      physician.specialization === formData.specialization &&
      physician.date === formData.date
    ) {
      available = true;
      break;
    }
  }
  var result = document.getElementById("result");
  if (available) {
    result.innerHTML = "The physician is available on this date!";
    localStorage.setItem("doctor", formData.name);

    doctor.innerHTML = localStorage.getItem("doctor");
    localStorage.setItem("specialization", formData.specialization);

    specialization.innerHTML = localStorage.getItem("specialization");
    localStorage.setItem("date", formData.date);

    date.innerHTML = localStorage.getItem("date");
    /*     var xyx = document.getElementById("button");
    xyx.style.display = "block"; */
  } else {
    result.textContent = "The physician is not available on this date.";
    /*     var xyx = document.getElementById("button");
    xyx.style.display = "none"; */
  }
}
$(document).ready(function () {
  var table = $("#myTable").DataTable();
  var physicians = [
    { name: "John Doe", date: "2023-05-10", specialization: "Physiology" },
    { name: "Jane Grey", date: "2023-05-20", specialization: "Family Health" },
    { name: "Jonathan Moss", date: "2023-05-30", specialization: "Pediatrics" },
    { name: "John Doe", date: "2023-05-31", specialization: "Physiology" },
    { name: "Jane Grey", date: "2023-06-01", specialization: "Family Health" },
    { name: "Jonathan Moss", date: "2023-06-02", specialization: "Pediatrics" },
    { name: "John Doe", date: "2023-06-03", specialization: "Physiology" },
    { name: "Jane Grey", date: "2023-06-04", specialization: "Family Health" },
    { name: "Jonathan Moss", date: "2023-06-05", specialization: "Pediatrics" },
    { name: "John Doe", date: "2023-06-06", specialization: "Physiology" },
    { name: "Jane Grey", date: "2023-06-07", specialization: "Family Health" },
    { name: "Jonathan Moss", date: "2023-06-08", specialization: "Pediatrics" },
    { name: "John Doe", date: "2023-06-09", specialization: "Physiology" },
  ];

  for (var i = 0; i < physicians.length; i++) {
    var physician = physicians[i];
    var row = [physician.name, physician.specialization, physician.date];
    table.row.add(row).draw();
  }
});

function appointmentBooked() {
  const physician = localStorage.getItem("doctor");
  const clientName = localStorage.getItem("registrationDetails")
    ? JSON.parse(localStorage.getItem("registrationDetails")).name
    : "";
  receiptClient.innerHTML = clientName.toLowerCase();
  receiptDate.innerHTML = localStorage.getItem("date");
  receiptPhysician.innerHTML = localStorage.getItem("doctor");
  receiptSpecialization.innerHTML = localStorage.getItem("specialization");
}
function printReceipt() {
  const receiptClient = document.getElementById("receiptClient").innerHTML;
  const receiptDate = document.getElementById("receiptDate").innerHTML;
  const receiptPhysician =
    document.getElementById("receiptPhysician").innerHTML;
  const receiptSpecialization = document.getElementById(
    "receiptSpecialization"
  ).innerHTML;

  const receipt = `Client: ${receiptClient} <br>
                  Date: ${receiptDate} <br>
                  Physician: ${receiptPhysician} <br>
                  Specialization: ${receiptSpecialization}`;

  const printWindow = window.open("", "", "height=400,width=600");
  printWindow.document.write("<html><head><title>Appointment Receipt</title>");
  printWindow.document.write("</head><body >");
  printWindow.document.write(receipt);
  printWindow.document.write("</body></html>");

  printWindow.document.close();
  printWindow.print();
}

function suggestDiagnosis() {
  const symptoms = document.getElementById("symptoms").value;

  let diagnosis = "";
  let prescription = "";
  switch (symptoms.toLowerCase()) {
    case "cold and fever":
      diagnosis = "Malaria or Typhoid";
      prescription = "Artemether and Folic Acid";
      break;
    case "cough and shortness of breath":
      diagnosis = "Asthma or Bronchitis";
      prescription = "Albuterol and Prednisone";
      break;
    case "headache and fever":
      diagnosis = "Meningitis or Encephalitis";
      prescription = "Acetaminophen and Ceftriaxone";
      break;
    default:
      diagnosis = "Unknown Condition";
      prescription = "Consult with a doctor";
  }
  document.getElementById("diagnosis").innerHTML = `${diagnosis}`;
  document.getElementById("prescription").innerHTML = `${prescription}`;
}
