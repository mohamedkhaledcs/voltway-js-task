

let fontLink = document.createElement("link");

fontLink.rel = "stylesheet";
fontLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap";

document.head.appendChild(fontLink);


document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Inter, sans-serif";
document.body.style.backgroundColor = "#f5f9ff";
document.body.style.color = "#111827";


let mainPage = document.createElement("div");
mainPage.style.minHeight = "100vh";
mainPage.style.backgroundColor = "#f5f9ff";
mainPage.style.overflow = "hidden";


// Navbar
let navBar = document.createElement("nav");
navBar.style.height = "72px";
navBar.style.backgroundColor = "#ffffff";
navBar.style.display = "flex";
navBar.style.alignItems = "center";
navBar.style.justifyContent = "space-between";
navBar.style.padding = "0 6%";
navBar.style.boxSizing = "border-box";
navBar.style.borderBottom = "1px solid #edf1f7";


// Logo
let logo = document.createElement("div");
logo.innerHTML = `
    <span style="
        display:inline-block;
        width:14px;
        height:14px;
        border-radius:4px;
        margin-right:6px;
    "></span>
    <span>Voltway</span>
`;

logo.style.fontSize = "15px";
logo.style.fontWeight = "bold";
logo.style.display = "flex";
logo.style.alignItems = "center";
logo.style.fontFamily = "Manrope, sans-serif";
navBar.appendChild(logo);


// Navigation
let navLinks = document.createElement("div");
navLinks.style.display = "flex";
navLinks.style.alignItems = "center";
navLinks.style.gap = "24px";

let menuItems = [
    "Emergency",
    "Certificates",
    "Warning signs",
    "Companies",
    "About",
    "Prices",
    "Blog",
    "Contact"
];

menuItems.forEach(function (item) {
    let menuLink = document.createElement("span");
    menuLink.innerText = item;
    menuLink.style.fontSize = "10px";
    menuLink.style.color = "#777f8c";
    menuLink.style.cursor = "pointer";
    menuLink.style.transition = "0.3s";

    menuLink.addEventListener("mouseenter", function () {
        menuLink.style.color = "#2167dc";
    });
    menuLink.addEventListener("mouseleave", function () {
        menuLink.style.color = "#777f8c";
    });



    navLinks.appendChild(menuLink);

});
navBar.appendChild(navLinks);


// Navbar Right
let navActions = document.createElement("div");
navActions.style.display = "flex";
navActions.style.alignItems = "center";
navActions.style.gap = "18px";

let phoneIcon = document.createElement("span");
phoneIcon.innerText = "⌕";
phoneIcon.style.fontSize = "18px";
phoneIcon.style.color = "#606873";
phoneIcon.style.cursor = "pointer";

let bookingBtn = document.createElement("button");
bookingBtn.innerText = "Book an ECR";
bookingBtn.style.backgroundColor = "#2468df";
bookingBtn.style.color = "#fff";
bookingBtn.style.border = "none";
bookingBtn.style.borderRadius = "5px";
bookingBtn.style.padding = "10px 17px";
bookingBtn.style.fontSize = "10px";
bookingBtn.style.fontWeight = "600";
bookingBtn.style.cursor = "pointer";
bookingBtn.style.transition = "0.3s";

bookingBtn.addEventListener("mouseenter", function () {
    bookingBtn.style.backgroundColor = "#1555c4";
});

bookingBtn.addEventListener("mouseleave", function () {
    bookingBtn.style.backgroundColor = "#2468df";
});

navActions.appendChild(phoneIcon);
navActions.appendChild(bookingBtn);
navBar.appendChild(navActions);


// Hero
let heroSection = document.createElement("section");
heroSection.style.textAlign = "center";
heroSection.style.padding = "82px 20px 70px";
heroSection.style.boxSizing = "border-box";


// Badge
let heroBadge = document.createElement("div");
heroBadge.innerText = "✦ NICEIC approved · Fast · 24-hour emergency line";
heroBadge.style.display = "inline-block";
heroBadge.style.backgroundColor = "#eaf3ff";
heroBadge.style.color = "#2870dc";
heroBadge.style.padding = "7px 13px";
heroBadge.style.borderRadius = "20px";
heroBadge.style.fontSize = "9px";
heroBadge.style.fontWeight = "600";
heroBadge.style.marginBottom = "23px";
heroSection.appendChild(heroBadge);


// Heading
let heroTitle = document.createElement("h1");
heroTitle.innerHTML = `
    Electrical work that
    <br>
    <span style="color:#2869d8;">passes inspection</span>
`;

heroTitle.style.fontFamily = "Manrope, sans-serif";
heroTitle.style.fontSize = "43px";
heroTitle.style.lineHeight = "1.12";
heroTitle.style.fontWeight = "800";
heroTitle.style.letterSpacing = "-1.5px";
heroTitle.style.margin = "0 auto 20px";
heroTitle.style.maxWidth = "650px";
heroSection.appendChild(heroTitle);


// Description
let heroText = document.createElement("p");
heroText.innerText =
    "Domestic and commercial electrical contractors across Tyne and Wear. EICR testing, consumer unit replacement, landlord certificates and fault finding — every job certified and logged, every time.";

heroText.style.maxWidth = "540px";
heroText.style.margin = "0 auto 30px";
heroText.style.color = "#737b87";
heroText.style.fontSize = "12px";
heroText.style.lineHeight = "1.7";
heroSection.appendChild(heroText);


// Hero Buttons
let actionArea = document.createElement("div");
actionArea.style.display = "flex";
actionArea.style.justifyContent = "center";
actionArea.style.alignItems = "center";
actionArea.style.gap = "10px";
actionArea.style.marginBottom = "58px";


let primaryBtn = document.createElement("button");
primaryBtn.innerText = "Book an ECR →";
primaryBtn.style.backgroundColor = "#2869d8";
primaryBtn.style.color = "#fff";
primaryBtn.style.border = "none";
primaryBtn.style.borderRadius = "5px";
primaryBtn.style.padding = "12px 19px";
primaryBtn.style.fontSize = "10px";
primaryBtn.style.fontWeight = "600";
primaryBtn.style.cursor = "pointer";


let secondaryBtn = document.createElement("button");
secondaryBtn.innerText = "See certificate prices";
secondaryBtn.style.backgroundColor = "#fff";
secondaryBtn.style.color = "#4b5563";
secondaryBtn.style.border = "1px solid #dfe5ed";
secondaryBtn.style.borderRadius = "5px";
secondaryBtn.style.padding = "12px 19px";
secondaryBtn.style.fontSize = "10px";
secondaryBtn.style.fontWeight = "500";
secondaryBtn.style.cursor = "pointer";


let playBtn = document.createElement("button");
playBtn.innerText = "▶";
playBtn.style.width = "36px";
playBtn.style.height = "36px";
playBtn.style.borderRadius = "50%";
playBtn.style.border = "none";
playBtn.style.backgroundColor = "#2869d8";
playBtn.style.color = "#fff";
playBtn.style.fontSize = "10px";
playBtn.style.cursor = "pointer";


let playText = document.createElement("span");
playText.innerText = "Watch Demo";
playText.style.fontSize = "10px";
playText.style.color = "#656d79";

actionArea.appendChild(primaryBtn);
actionArea.appendChild(secondaryBtn);
actionArea.appendChild(playBtn);
actionArea.appendChild(playText);
heroSection.appendChild(actionArea);


// Statistics
let statsRow = document.createElement("div");
statsRow.style.display = "flex";
statsRow.style.justifyContent = "center";
statsRow.style.alignItems = "center";
statsRow.style.gap = "75px";
statsRow.style.marginBottom = "48px";
statsRow.style.flexWrap = "wrap";


let statsData = [
    ["24/7", "Emergency line"],
    ["90 min", "Average response"],
    ["6,100+", "Certificates issued"],
    ["18", "Years NICEIC approved"]

];


statsData.forEach(function (data) {
    let statBox = document.createElement("div");
    let statNumber = document.createElement("h3");

    statNumber.innerText = data[0];
    statNumber.style.fontFamily = "Manrope, sans-serif";
    statNumber.style.fontSize = "20px";
    statNumber.style.fontWeight = "800";
    statNumber.style.margin = "0 0 4px";

    let statLabel = document.createElement("p");
    statLabel.innerText = data[1];
    statLabel.style.fontSize = "8px";
    statLabel.style.color = "#89919d";
    statLabel.style.margin = "0";

    statBox.appendChild(statNumber);
    statBox.appendChild(statLabel);
    statsRow.appendChild(statBox);



});
heroSection.appendChild(statsRow);


// Main Image
let heroImage = document.createElement("img");
heroImage.src = "assets/engPic.jpg";
heroImage.alt = "Electrical engineer working";

heroImage.style.width = "55%";
heroImage.style.maxWidth = "560px";
heroImage.style.minWidth = "300px";
heroImage.style.height = "260px";
heroImage.style.objectFit = "cover";
heroImage.style.display = "block";
heroImage.style.margin = "0 auto";
heroImage.style.borderRadius = "9px";
heroImage.style.boxShadow = "0 18px 40px rgba(32, 65, 110, 0.12)";
heroSection.appendChild(heroImage);


// Add page
mainPage.appendChild(navBar);
mainPage.appendChild(heroSection);
document.body.appendChild(mainPage);
