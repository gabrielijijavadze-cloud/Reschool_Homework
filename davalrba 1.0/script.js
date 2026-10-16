
const table = document.getElementById("sta");
async function loadData(){
  try {
    const response = await fetch("./data.json");
    if(!response.ok){
        throw new Error("HTTP error: link not supported");
    }
    const data = await response.json();


    const elements = data.drivers_championship.map(item => ({
      eDriver: item.driverId,
      eTeam: item.teamId,
      ePoints: item.points,
      ePos: item.position,
    }));  

    elements.forEach(item => {
      const row = document.createElement("tr");

      const tdPos = document.createElement("td");
      tdPos.textContent = item.ePos;

      const tdDriver = document.createElement("td");
      tdDriver.textContent = item.eDriver;

      const tdTeam = document.createElement("td");
      tdTeam.textContent = item.eTeam;

      const tdPoints = document.createElement("td");
      tdPoints.textContent = item.ePoints;

      row.append(tdPos, tdDriver, tdTeam, tdPoints);

      table.appendChild(row);
    });

  } catch(error) {
     console.log("This is error", error);
  }
}

loadData();