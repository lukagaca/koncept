document.addEventListener('DOMContentLoaded', ()=>{
    const dropdownTogglerOne = document.querySelector('.nav__menu--dropdown-toggler-1');
    const dropdownTogglerTwo = document.querySelector('.nav__menu--dropdown-toggler-2');
    const dropdownArrowOne = document.querySelector('.nav__menu--down-1');
    const dropdownArrowTwo = document.querySelector('.nav__menu--down-2');
    const navMenuSubOne = document.querySelector('.nav__menu_sub-1');
    const navMenuSubTwo = document.querySelector('.nav__menu_sub-2');
    dropdownTogglerOne.addEventListener('click', ()=>{
        dropdownArrowOne.style.transform = 'rotate(' + 180 + 'deg)';
        if(navMenuSubOne.style.display === 'flex') {
            navMenuSubOne.style.display = 'none';
            dropdownArrowOne.style.transform = 'rotate(' + 0 + 'deg)';
        }
        else {
            navMenuSubOne.style.display = 'flex';
        }
    });
    dropdownTogglerTwo.addEventListener('click', ()=>{
        dropdownArrowTwo.style.transform = 'rotate(' + 180 + 'deg)';
        if(navMenuSubTwo.style.display === 'flex') {
            navMenuSubTwo.style.display = 'none';
            dropdownArrowTwo.style.transform = 'rotate(' + 0 + 'deg)';
        }
        else {
            navMenuSubTwo.style.display = 'flex';
        }
    });

    let buttons = document.querySelectorAll('.accordion__bulk_btn--open');
    let close = document.querySelectorAll('.accordion__bulk_btn--close');
    let content = document.querySelectorAll('.accordion__bulk_content');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=>{
            content[i].style.display = 'block';
            buttons[i].style.display = 'none';
            close[i].style.display = 'block';
        });
        close[i].addEventListener('click', ()=>{
            content[i].style.display = 'none';
            buttons[i].style.display = 'block';
            close[i].style.display = 'none';
        });
    }

    const burger = document.querySelector('.nav__burger');
    const x = document.querySelector('.nav__back');
    const navMenu = document.querySelector('.nav__menu');
    burger.addEventListener('click', ()=>{
        navMenu.style.left = '0';
        burger.style.display = 'none';
        x.style.display = 'flex';
    });
    x.addEventListener('click', ()=>{
        navMenu.style.left = '-100rem';
        burger.style.display = 'flex';
        x.style.display = 'none';
    });

    const nav = document.querySelector('nav');
    const stickyThreshold = nav.offsetTop;
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset >= stickyThreshold){
            nav.classList.add('sticky');
        }
        else {
            nav.classList.remove('sticky');
        }
    });

    let info = `[{
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim accusamus rem, sint inventore quasi!",
        "portrait": "images/portrait-square-03.jpg",
        "name": "Marko Markovic",
        "profession": "Lorem ipsum dolor sit amet"
    },{
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam magni reiciendis exercitationem.",
        "portrait": "images/portrait-square-10.jpg",
        "name": "Jovana Jovanovic",
        "profession": "consectetur adipisicing elit"
    },{
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum autem cupiditate, asperiores magni ut.",
        "portrait": "images/portrait-square-11.jpg",
        "name": "Mirko Mirkovic",
        "profession": "Nihil ipsum autem cupiditate"
    }]`;
    let person = JSON.parse(info);
    const quote = document.querySelector(".impressions__carousel_item--quote h3");
    const portrait = document.querySelector(".impressions__carousel_item--person-portrait");
    const name = document.querySelector(".impressions__carousel_item--person-info-name");
    const profession = document.querySelector(".impressions__carousel_item--person-info-profession");
    const arrowLeft = document.querySelector(".impressions__carousel_item--indicators-arrow-left");
    const arrowRight = document.querySelector(".impressions__carousel_item--indicators-arrow-right");
    let indicator1 = document.querySelector(".impressions__carousel_item--indicators-circle-1");
    let indicator2 = document.querySelector(".impressions__carousel_item--indicators-circle-2");
    let indicator3 = document.querySelector(".impressions__carousel_item--indicators-circle-3");
    let i = 0;
    const indicators = [indicator1, indicator2, indicator3];    
    function fillCarousel() {
        quote.innerHTML = person[i].quote;
        portrait.src = person[i].portrait;
        name.innerHTML = person[i].name;
        profession.innerHTML = person[i].profession;
        indicators.forEach((ind) => {
            ind.style.width = 15 + "px";
            ind.style.height = 15 + "px";
            ind.style.opacity = "50%";
        });
        indicators[i].style.width = 25 + "px";
        indicators[i].style.height = 25 + "px";
        indicators[i].style.opacity = "100%";
        if (i === 0) {
            arrowLeft.style.opacity = "40%";
        } else {
            arrowLeft.style.opacity = "100%";
        }
        if (i === person.length -1) {
            arrowRight.style.opacity = "40%";
        } else {
            arrowRight.style.opacity = "100%";
        }
    };
    fillCarousel();
    arrowLeft.addEventListener("click", () => {
        i--;
        if (i <= 0) {
            i = 0;
        }
        fillCarousel();
    });
    arrowRight.addEventListener("click", () => {
        i++;
        if (i >= person.length) {
            i = person.length - 1;
        }
        fillCarousel();
    });

    /*
    -------------------------------------------------------------------------------------------------------------------------
    ---Iznad je takoreći "offline" verzija/rešenje, tj. ne zahteva server, ali se JSON mora definisati onda unutar samog JS fajla, 
    dok drugo rešenje, ono ispod ovog komentara, povlači podatke iz zasebnog JSON fajla, ali zahteva server.
    -------------------------------------------------------------------------------------------------------------------------
    ---In the code above resides an "offline" solution, so to speak. It doesn't require the use of a server, however the JSON content 
    must be defined within the same JavaScript file. 
    In the code bellow this comment, carousel information is imported from a seperate JSON file, but requires the use of a server.
    -------------------------------------------------------------------------------------------------------------------------
    */

    /*
    const quote = document.querySelector(".impressions__carousel_item--quote h3");
    const portrait = document.querySelector(".impressions__carousel_item--person-portrait");
    const name = document.querySelector(".impressions__carousel_item--person-info-name");
    const profession = document.querySelector(".impressions__carousel_item--person-info-profession");
    const arrowLeft = document.querySelector(".impressions__carousel_item--indicators-arrow-left");
    const arrowRight = document.querySelector(".impressions__carousel_item--indicators-arrow-right");
    const indicator1 = document.querySelector(".impressions__carousel_item--indicators-circle-1");
    const indicator2 = document.querySelector(".impressions__carousel_item--indicators-circle-2");
    const indicator3 = document.querySelector(".impressions__carousel_item--indicators-circle-3");
    const indicators = [indicator1, indicator2, indicator3];
    function fillCarousel() {
        quote.innerHTML = persons[i].quote;
        portrait.src = persons[i].portrait;
        name.innerHTML = persons[i].name;
        profession.innerHTML = persons[i].profession;
        indicators.forEach((ind) => {
            ind.style.width = 15 + "px";
            ind.style.height = 15 + "px";
            ind.style.opacity = "50%";
        });
        indicators[i].style.width = 25 + "px";
        indicators[i].style.height = 25 + "px";
        indicators[i].style.opacity = "100%";
        if (i === 0) {
            arrowLeft.style.opacity = "40%";
        } else {
            arrowLeft.style.opacity = "100%";
        }
        if (i === persons.length - 1) {
            arrowRight.style.opacity = "40%";
        } else {
            arrowRight.style.opacity = "100%";
        }
    };
    let persons;
    let i;
    fetch("./info.json").then(response => {
    return response.json();
    }).then(data => {
        persons = data.persons;
        i = 0;
        fillCarousel();
    });
    arrowLeft.addEventListener("click", () => {
        i--;
        if (i <= 0) {
            i = 0;
        }
        fillCarousel();
    });
    arrowRight.addEventListener("click", () => {
        i++;
        if (i >= persons.length) {
            i = persons.length - 1;
        }
        fillCarousel();
    }); 
    */
});