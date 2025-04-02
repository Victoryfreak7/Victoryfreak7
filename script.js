const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

let totalDrank = 0; // Stores total water intake over multiple sessions
const cupVolume = 250; // ml
const goal = 2000; // 2L in ml

updateBigCup();

smallCups.forEach((cup) => {
    cup.addEventListener('click', () => {
        totalDrank += cupVolume; // Increment total water intake
        updateBigCup();
    });
});

function updateBigCup() {
    const fullCups = totalDrank / cupVolume;
    const totalCups = goal / cupVolume;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(totalDrank / goal) * 330}px`;
        percentage.innerText = `${Math.min((totalDrank / goal) * 100, 100)}%`;
    }

    if (totalDrank >= goal) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${(goal - totalDrank) / 1000}L`;
    }
}

// Optional: Add a reset button for a new day
const resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";
resetBtn.style.cssText = "margin-top: 20px; padding: 10px; font-size: 16px; cursor: pointer;";
document.body.appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
    totalDrank = 0;
    updateBigCup();
});
