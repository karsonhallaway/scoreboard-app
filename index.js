

let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeScore = 0
let guestScore = 0

function addHomePoints(points) {
    homeScore += points 
    homeScoreEl.innerText = homeScore
}

function addGuestPoints(points) {
    guestScore += points 
    guestScoreEl.innerText = guestScore
}

function resetPoints() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore

}