function goToPage(pageName) {
    switch (pageName) {
        case "home":
            window.location.href = "../index.html";
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