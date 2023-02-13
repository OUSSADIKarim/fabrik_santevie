// links current code
const links = document.querySelectorAll("nav ul li a");

links.forEach((a) => {
  const aPath = a.href;
  if (aPath == window.location.href) {
    a.setAttribute("data-current", "true");
  }
});

// path / code
if (window.location.pathname === "/") {
  // num of patients code

  let patientCount;
  const patientCountSpan = document.querySelector("#patient_count");

  fetch("/patient/patient-count")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      patientCount = data[0].patientCount;
      patientCountSpan.innerHTML = patientCount;
    });

  // charts code

  // gender chart
  let homme;
  let femme;

  fetch("/patient/sex/count")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      result = [data[0].homme, data[1].femme];

      return result;
    })
    .then((result) => {
      const data = {
        labels: ["Homme", "Femme"],
        datasets: [
          {
            label: "Patient / sex",
            data: [result[0], result[1]],
            backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
            hoverOffset: 4,
          },
        ],
      };

      const ctx = document.getElementById("chart-canvas_sex").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: data,
      });
    });

  // ages chart

  let patientsCountPerAge;

  fetch("/patient/patient-count-per-age")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return (patientsCountPerAge = data);
    })
    .then((patientsCountPerAge) => {
      const labels = [];
      const counts = [];
      patientsCountPerAge.forEach((e) => {
        labels.push(e.age);
      });

      patientsCountPerAge.forEach((e) => {
        counts.push(e.patientsCountPerAge);
      });
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Patients count per ages",
            data: counts,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };

      const ctx = document.getElementById("chart-canvas_age").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: data,
      });
    });
}

// path /patient code
if (window.location.pathname === "/patient") {
  // Edit patient code
  const btnEdit = document.querySelectorAll(".btn-edit");
  const formEdit = document.querySelector(".form-edit");
  const btnQuit = formEdit.querySelector(".btn-quit");
  btnEdit.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id_p =
        btn.parentElement.parentElement.querySelector("#input-id_p").value;
      let result;
      fetch(`/patient/${id_p}`).then((res) => {
        res.json().then((data) => {
          result = data[0];

          formEdit.classList.add("form-edit_open");
          formEdit.querySelector("#lastname").value = result.nom;
          formEdit.querySelector("#firstname").value = result.prenom;
          formEdit.querySelector("#sex").value = result.sex;
          formEdit.querySelector("#input-edit_id").value = result.id_p;
          document.querySelector(".body-patient").classList.add("overlay");

          btnQuit.addEventListener("click", () => {
            formEdit.classList.remove("form-edit_open");
            document.querySelector(".body-patient").classList.remove("overlay");
          });
        });
      });
    });
  });
}
