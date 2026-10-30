const table = document.getElementById("sta");

async function loadData(){
  try {
    const response = await fetch("./data.json");

    if(!response.ok){
        throw new Error("HTTP error: link not supported");
    }

    const data = await response.json();

    const elements = data.response[0].league.standings[0].map(item => ({
      ePos: item.rank,
      eTeam: item.team.name,
      ePlayed: item.all.played,
      eWon: item.all.win,
      eDrawn: item.all.draw,
      eLost: item.all.lose,
      eGoalDiff: item.goalsDiff,
      ePoints: item.points,
    }));

    elements.forEach(item => {
      const row = document.createElement("tr");

      const tdPos = document.createElement("td");
      tdPos.textContent = item.ePos;

      const tdTeam = document.createElement("td");
      tdTeam.textContent = item.eTeam;

      const tdPlayed = document.createElement("td");
      tdPlayed.textContent = item.ePlayed;

      const tdWon = document.createElement("td");
      tdWon.textContent = item.eWon;

      const tdDrawn = document.createElement("td");
      tdDrawn.textContent = item.eDrawn;

      const tdLost = document.createElement("td");
      tdLost.textContent = item.eLost;

      const tdGoalDiff = document.createElement("td");
      tdGoalDiff.textContent = item.eGoalDiff;

      const tdPoints = document.createElement("td");
      tdPoints.textContent = item.ePoints;

      row.append(tdPos, tdTeam, tdPlayed, tdWon, tdDrawn, tdLost, tdGoalDiff, tdPoints);

      table.appendChild(row);
    });

  } catch(error) {
     console.log("This is error", error);
  }
}

loadData();