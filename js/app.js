/*varibols */
let sections = document.querySelectorAll("section");
let navBars = document.querySelectorAll("a");

/**move by click*/
navBars.forEach(navBar => {
  navBar.addEventListener('click', function () {
    navBars.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
    console.log(navBar.childNodes[0].nodeValue);    
    const hhh = navBar.childNodes[0].nodeValue;
    addActive(hhh.replace(/\s/g, ''));
    console.log("hey");
  });
});

/**onscroll function */
onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
     /* console.log(section.attributes.id)*/
      let currentId = section.attributes.id.value;
      removeAllActiveClasses();      
      addActiveClass(currentId);
      
    }
  });
};

/**remove active class */
const removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};



/**adding active class */
const addActiveClass = function (id) {
  // console.log(id);
  let selector = `nav a[class="${id}"]`;
  document.querySelector(selector).classList.add("active");
};

const addActive =function(id){
  let selector = `index.html#${id}`;
  window.location.href=selector;
}


/**scrool smooth */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let section = document.querySelector(currentId);
    let sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
