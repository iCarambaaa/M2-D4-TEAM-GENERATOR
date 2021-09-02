

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

// ---USE ENTER TO TRIGGER ADD MEMBER BUTTON---


document.getElementById("person").addEventListener("keyup", function(event) {

      
    if (event.key === "Enter") {
      // Trigger the button element with a click
      document.getElementById("button-add-to-list").click()
    }
});


// ---CREATE TEAMS AS COLUMNS---

function createTeams() {
    let num = document.getElementById("teams").value
    num = parseInt(num)
    document.getElementById("teamsrow").innerHTML = ""
    for (let i = 1; i <= num; i++) {
        let col = document.createElement("div")
        col.classList.add("col", "teamcol")
        document.getElementById("teamsrow").appendChild(col)
        document.getElementById("teams").value = ''
        //let ul = document.createElement("ul")
        //ul.setAttribute("id", "memberUl")
        col.innerHTML = "Team " + i //+ ul
    }
}

// ---USE ENTER TO TRIGGER CREATE TEAMS BUTTON---


document.getElementById("teams").addEventListener("keyup", function(event) {

      
    if (event.key === "Enter") {

      // Trigger the button element with a click
      document.getElementById("button-create-teams").click()
    }
});


// ---ASSIGN PERSON FROM LIST TO TEAM---

// function assignRandomly() {
//    let one = people.pop()
//    let li = document.createElement("li")
//    li.innerText = one
//    document.getElementById("memberUl").appendChild(li)
// }