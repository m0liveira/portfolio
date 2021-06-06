// start screen variables
const startScreen = document.getElementById("startScreen"); // start screen container
const elipse1 = document.getElementById("elipse1");
const elipse2 = document.getElementById("elipse2"); // elipses 
const elipse3 = document.getElementById("elipse3");

// nav bar variables
const mainNav = document.getElementById("mainNav");
const switchTheme = document.getElementById("switchTheme");
const themeIcon = document.getElementById("themeIcon");
// subnav
const subNav = document.getElementById("subNav");
const switchTheme2 = document.getElementById("switchTheme2");
const themeIcon2 = document.getElementById("themeIcon2");
var darkTheme = true;

// navbar clickables
const home = document.getElementById("homeImg");
const about = document.getElementById("aboutImg");
const portfolio = document.getElementById("portfolioImg");
const contact = document.getElementById("contactImg");


// header variables
const headerSection = document.getElementById("header");
const headerText = document.getElementById("headerText");

// about variables
const aboutSection = document.getElementById("about");
const sectionTitle = document.querySelector(".textFadeIn");
const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");

// portfolio variables
const portfolioSection = document.getElementById("portfolio");
const cards = document.querySelectorAll(".card");

// contact variables
const contactSection = document.getElementById("contact");

//footer variable
const footer = document.querySelector("footer");


//#region intersection observer

//#region Know Where u are

const homeOptions = {
    threshold: .5
};

const homeObserver = new IntersectionObserver((entries, homeObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            home.classList.remove("imHere");
        } else {
            home.classList.add("imHere");
        }
    })
}, homeOptions);

homeObserver.observe(headerSection);

const aboutOptions = {
    threshold: .5
};

const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            about.classList.remove("imHere");
        } else {
            about.classList.add("imHere");
        }
    })
}, aboutOptions);

aboutObserver.observe(aboutSection);

const portfolioOptions = {
    threshold: .5
    // rootMargin: "-52% 0px 0px 0px"
};

const portfolioObserver = new IntersectionObserver((entries, portfolioObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            portfolio.classList.remove("imHere");
        } else {
            portfolio.classList.add("imHere");
        }
    })
}, portfolioOptions);

portfolioObserver.observe(portfolioSection);

const contactOptions = {
    threshold: .5
};

const contactObserver = new IntersectionObserver((entries, contactObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            contact.classList.remove("imHere");
        } else {
            contact.classList.add("imHere");
        }
    })
}, contactOptions);

contactObserver.observe(contactSection);

//#endregion

// nav obsever
const navOptions = {
    rootMargin: "-52% 0px 0px 0px",
};

const navObserver = new IntersectionObserver((entries, navObserver) => {
    entries.forEach(entry => {
        // console.log(entry);

        // if header text stop being observed the navbar changes
        if (!entry.isIntersecting) {
            mainNav.classList.toggle("hide");
            setTimeout(() => {
                mainNav.classList.toggle("showIn");
            }, 200);

            subNav.classList.toggle("hide");
            setTimeout(() => {
                subNav.classList.toggle("showIn");
            }, 100);
        } else {
            // if header text starts being observed the navbar changes
            subNav.classList.toggle("hide");
            setTimeout(() => {
                subNav.classList.toggle("showIn");
            }, 200);

            mainNav.classList.toggle("hide");
            setTimeout(() => {
                mainNav.classList.toggle("showIn");
            }, 100);
        }
    })
}, navOptions);

navObserver.observe(headerText);

// show elements on scroll
const aboutTitleOptions = {
    threshold: .3
};

const aboutTitleObserver = new IntersectionObserver((entries, aboutTitleObserver) => {
    entries.forEach(entry => {
        // if header text stop being observed the navbar changes
        if (!entry.isIntersecting) {
            return;
        } else {
            // if header text starts being observed the navbar changes
            sectionTitle.classList.toggle("textFadeIn");
            aboutTitleObserver.unobserve(aboutSection);
        }
    })
}, aboutTitleOptions);

aboutTitleObserver.observe(aboutSection);

// slide elements on scroll
const leftSlideOptions = {
    threshold: .75
};

const leftSlideObserver = new IntersectionObserver((entries, leftSlideObserver) => {
    entries.forEach(entry => {
        // if header text stop being observed the navbar changes
        if (!entry.isIntersecting) {
            leftSide.classList.toggle("fromLeft");
        } else {
            // if header text starts being observed the navbar changes
            leftSide.classList.toggle("fromLeft");
            leftSlideObserver.unobserve(aboutSection);
        }
    })
}, leftSlideOptions);

leftSlideObserver.observe(aboutSection);

const rightSlideOptions = {
    threshold: .87
};

const rightSlideObserver = new IntersectionObserver((entries, rightSlideObserver) => {
    entries.forEach(entry => {
        // if header text stop being observed the navbar changes
        if (!entry.isIntersecting) {
            rightSide.classList.toggle("fromRight");
        } else {
            // if header text starts being observed the navbar changes
            rightSide.classList.toggle("fromRight");
            rightSlideObserver.unobserve(aboutSection);
        }
    })
}, rightSlideOptions);

rightSlideObserver.observe(aboutSection);

//#endregion

//#region initial screen
function elipseAnim() {
    elipse1.classList.add("bounceUp");
    setTimeout(() => {
        elipse2.classList.add("bounceUp");
        elipse1.classList.remove("bounceUp");
    }, 250);

    setTimeout(() => {
        elipse3.classList.add("bounceUp");
        elipse2.classList.remove("bounceUp");
    }, 500);

    setTimeout(() => {
        elipse3.classList.remove("bounceUp");
    }, 750);
}

function loopElipseAnim() {
    let z = 0;
    let x = setInterval(() => {
        elipseAnim();
        z++;

        if (z == 2) {
            clearInterval(x);
        }
    }, 1000);

}

function clearAnim() {
    elipse1.classList.remove("bounceUp");
    elipse2.classList.remove("bounceUp");
    elipse3.classList.remove("bounceUp");
}

function loadScreen() {
    home.classList.add("imHere");

    elipseAnim();
    loopElipseAnim();

    setTimeout(() => {
        clearAnim();
        startScreen.classList.add("sendDown");

        headerSection.classList.remove("hide");

        setTimeout(() => {
            headerText.classList.add("fadeIn");
        }, 750);

        setTimeout(() => {
            startScreen.classList.add("hide");
            aboutSection.classList.remove("hide");
            portfolioSection.classList.remove("hide");
            contactSection.classList.remove("hide");
            footer.classList.remove("hide");
        }, 2100);
    }, 3100);
}
//#endregion

// call loadScreen function after DOM fully loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadScreen()); // carrega o dom e chama funçao
} else {
    loadScreen();
}

// #region switch theme

function changeTheme() {
    if (darkTheme) {
        // change Theme
        switchTheme.classList.add("slideButton");
        themeIcon.src = "assets/moon.png";

        switchTheme2.classList.add("slideButton");
        themeIcon2.src = "assets/moon.png";

        document.body.setAttribute("data-theme", "light");

        // changed theme elements correction
        cards.forEach(element => {
            element.classList.add("boxShadowFix");
        });

        darkTheme = false;
    } else {
        // change Theme
        switchTheme.classList.remove("slideButton");
        themeIcon.src = "assets/sun.png";

        switchTheme2.classList.remove("slideButton");
        themeIcon2.src = "assets/sun.png";

        document.body.removeAttribute("data-theme", "light");

        // changed theme elements correction
        cards.forEach(element => {
            element.classList.remove("boxShadowFix");
        });

        darkTheme = true;
    }
}

switchTheme.addEventListener("click", () => {
    changeTheme();
})

switchTheme2.addEventListener("click", () => {
    changeTheme();
})
//#endregion