/*
document.addEventListener('DOMContentLoaded', () => {
    // Get the boat element
    const boat = document.getElementById('boat');

    // Set initial position
    let boatX = 0;
    let boatY = 0;
    const stepSize = 10; // Adjust this value to change the boat's speed

    // Function to update the boat's position on the screen
    function updateBoatPosition() {
        boat.style.left = boatX + 'px';
        boat.style.top = boatY + 'px';
    }

    // Function to handle arrow key inputs
    function handleArrowKeys(event) {
        switch (event.key) {
            case 'ArrowUp':
                boatY -= stepSize;
                break;
            case 'ArrowDown':
                boatY += stepSize;
                break;
            case 'ArrowLeft':
                boatX -= stepSize;
                break;
            case 'ArrowRight':
                boatX += stepSize;
                break;
            default:
                return; // Do nothing if other keys are pressed
        }

        // Ensure the boat stays within the visible area
        boatX = Math.max(0, Math.min(window.innerWidth - 50, boatX));
        boatY = Math.max(0, Math.min(window.innerHeight - 50, boatY));

        // Update the boat's position on the screen
        updateBoatPosition();
    }

    // Listen for arrow key presses
    document.addEventListener('keydown', handleArrowKeys);
});
*/
document.addEventListener("DOMContentLoaded", () => {
    const boat = document.querySelector(".boat");
    //const river = document.querySelector(".river");

    const step = 5;

    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();

        if (key === "arrowup" && boat.offsetTop > 220) {
            boat.style.top = `${boat.offsetTop - step}px`;
        } else if (key === "arrowdown" && boat.offsetTop + boat.clientHeight < 530) {
            boat.style.top = `${boat.offsetTop + step}px`;
        }
    });
});
/*
function canMoveUp(element) {
    return element.offsetTop - step > 0 && !isCollidingWithBarriers(element, -step);
}

function canMoveDown(element, container) {
    return element.offsetTop + element.clientHeight + step <= container.clientHeight &&
        !isCollidingWithBarriers(element, step);
}

function isCollidingWithBarriers(element, movement) {
    const nextPosition = element.offsetTop + movement;
    for (const barrier of barriers) {
        const barrierTop = barrier.offsetTop;
        const barrierBottom = barrierTop + barrier.clientHeight;
        if (nextPosition + element.clientHeight > barrierTop && nextPosition < barrierBottom) {
            return true;
        }
    }
    return false;
}
});*/
