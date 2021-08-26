

// ---ADD MEMBER TO LIST---

let people = []


function addToList() {
    let text = document.getElementById("person").value
    let li = document.createElement("li")
    li.innerHTML = text
    document.getElementById("list").appendChild(li)
    document.getElementById("person").value = ''
    people.push(text)
    console.log(people)
}

// ---CREATE TEAMS AS COLUMNS---

function createTeams() {
    let num = document.getElementById("teams").value
    let num2 = parseInt(num)
    for (let i = 0; i < num2; i++) {
        let col = document.createElement("div")
        col.classList.add("col")
        col.classList.add("teamcol")
        document.getElementById("teamsrow").appendChild(col)
        document.getElementById("teams").value = ''
        col.innerHTML = "Team " + i
    }
}

// ---ASSIGN PERSON FROM LIST TO TEAM---

function assignRandomly() {

}