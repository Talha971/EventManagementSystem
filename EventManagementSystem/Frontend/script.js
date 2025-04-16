
function loadTableData(data) {
    const tableBody = document.getElementById("tableBody");
    data.forEach(event => {

        let row = tableBody.insertRow();

        let id = row.insertCell(0);
        id.innerHTML = event.id;

        let title = row.insertCell(1);
        title.innerHTML = event.title;

        let description = row.insertCell(2);
        description.innerHTML = event.description;

        let start = row.insertCell(3);
        start.innerHTML = event.start;

        let end = row.insertCell(4);
        end.innerHTML = event.end;

        let allDay = row.insertCell(5);
        allDay.innerHTML = event.allDay;

        let createdAt = row.insertCell(6);
        createdAt.innerHTML = event.createdAt;
    });
}
fetch("https://localhost:4000/api/Events")
    .then((response) => response.json())
    .then((data) => loadTableData(data))
    .catch((error) => {
        console.log("error: ", error)
    });