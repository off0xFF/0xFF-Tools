// ===============================
// Recherche
// ===============================

const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            const txt = card.innerText.toLowerCase();

            card.style.display = txt.includes(value) ? "block" : "none";

        });

    });
}

// ===============================
// Halo de la souris
// ===============================

const glow = document.createElement("div");
glow.id = "cursorGlow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ===============================
// Etoiles
// ===============================

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.opacity = Math.random();
    star.style.transform = `scale(${Math.random() * 1.5})`;

    document.body.appendChild(star);

}

// ===============================
// Etoiles filantes
// ===============================

function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";
    meteor.style.left = "-250px";
    meteor.style.top = Math.random() * 40 + "vh";
    meteor.style.animationDuration = (1 + Math.random() * 1.5) + "s";

    document.body.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 3000);

}

setInterval(createMeteor, 800);

// ===============================
// Cartes 3D
// ===============================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = (rect.height / 2 - y) / 18;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)`;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});
