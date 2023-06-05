function goToPage(pageName) {
    switch (pageName) {
        case "home":
            window.location.href = "../index.html";
            // hideMenu();
            break;
        case "homeFromHome":
            window.location.href = "index.html";
            // hideMenu();
            break;
        case "work":
            window.location.href = "index.html#work";
            break;
        case "virtualReality":
            window.location.href = "WorkPages/virtualReality.html";
            // hideMenu();
            break;
        case "webDev":
            window.location.href = "WorkPages/webDev.html";
            // hideMenu();
            break;
        case "videoEdition":
            window.location.href = "WorkPages/videoEdition.html";
            // hideMenu();
            break;
        case "animation":
            window.location.href = "WorkPages/animation.html";
            // hideMenu();
            break;
        case "illustration":
            window.location.href = "WorkPages/illustration.html";
            break;
        case "uxui":
            window.location.href = "WorkPages/uxui.html";
            // hideMenu();
            break;
        default:
            window.location.href = "../index.html";
            break;
    }

}

function hideMenu() {
    var menuButton = document.getElementById("menuBtn");
    var menuPanel = document.getElementById("menu-panel");
    menuButton.classList.toggle("active");
    menuPanel.classList.toggle("active");
    // element.classList.remove(className);
}

$(document).ready(function() {
    $('.menu-button').click(function() {
        $('.menu-button').toggleClass('active');
        $('.menu-panel').toggleClass('active');
        // $('body').toggleClass('stop-scrolling');
    });
});