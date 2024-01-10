let stateName = document.querySelector(".stateName");
let stateMaker = document.querySelector(".stateMaker");
let visitingStates = document.querySelector('.visiting');
let visitingBtn = document.querySelector('.addToVisiting');

let states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
]

stateMaker.addEventListener("click", function() {

    
    let randomState = Math.floor(Math.random() * states.length)
    stateName.innerText = states[randomState];

})

visitingBtn.addEventListener("click", function() {

        let vacationStates = document.createElement("div");
        vacationStates.classList.add("vacationStates");

        let li = document.createElement("li");
        li.classList.add("list")
        li.innerText = `${stateName.innerText}`;
        vacationStates.appendChild(li);

        if(stateName.innerText === "State will show up here") {
            alert("Please generate an actual state.")
        }else {
            visitingStates.appendChild(vacationStates);
            if(visitingStates.lastChild.previousSibling.innerText === li.innerText) {
                alert("State was already added, generate a new one.");
                visitingStates.lastChild.remove();
            }
        }

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class = "fa-solid fa-trash-can"></i>`
        deleteButton.classList.add("deleteButton")
        vacationStates.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            deleteButton.parentElement.remove();
        })
})