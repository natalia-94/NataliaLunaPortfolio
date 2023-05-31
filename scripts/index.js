function goToPage(pageName) {
    switch (pageName) {
        case "home":
            window.location.href = "index.html";
            break;
        case "work":
            window.location.href = "../index.html#mywork";
            break;
        case "virtualReality":
            window.location.href = "WorkPages/virtualReality.html";
            break;
        case "webDev":
            window.location.href = "WorkPages/webDev.html";
            break;
        case "videoEdition":
            window.location.href = "WorkPages/videoEdition.html";
            break;
        case "animation":
            window.location.href = "WorkPages/animation.html";
            break;
            // case "desktopApp":
            //     window.location.href = "WorkPages/desktopApp.html";
            //     break;
        case "uxui":
            window.location.href = "WorkPages/uxui.html";
            break;
        default:
            window.location.href = "../index.html";
            break;
    }

}

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction(); };

// Get the header
var header = document.getElementById("menuBtn");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function showMenu() {
    const showPanel = [
        { width: "100%" }
    ];

    const timing = {
        duration: 2000,
        iterations: 1,
    };
    var menuPanel = document.getElementById("menu-panel");
    menuPanel.animate(showPanel);
}