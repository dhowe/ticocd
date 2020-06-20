let gr, count = 0, footerPosition = 'above', fetching = false;

//////////////////////////////////////////////////////////////////

let context = {
  qq: (s) => '<q>' + s + '</q>',
  randomJob: () => faker.company.companyName(),
  catchPhrase: () => faker.company.catchPhrase(),
  pluralNoun: () => RiTa.randomWord({ pos: 'nns' }),
  randomAdjective: () => RiTa.randomWord({ pos: 'jjs' }),
  randomPosition: () => faker.name.jobArea() + " " + faker.name.jobType(),
  randomPosition: () => faker.name.jobArea() + " " + faker.name.jobType(),
  randomLocation: () => faker.address.city() + ", " + faker.address.state(),
  randomPerson: () => faker.name.firstName() + " " + faker.name.lastName()
};

window.onload = () => {
  gr = new RiTa.Grammar(grammar, context);
  generate();
}

function generate() {
  let plot = document.getElementById('plot');
  plot.innerHTML += '<li>' + gr.expand() + '</li>';
  if (++count < 25) setTimeout(generate, 50);
}

//////////////////////////////////////////////////////////////////

// based on: http://www.jquery4u.com/snippets/jquery-capture-vertical-scroll-percentage/
$(window).scroll(function () {
  watchForHeader();
  var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
  var scrolltrigger = 0.90;
  if ((wintop / (docheight - winheight)) > scrolltrigger) {
    if (!fetching) {
      generate();
    }
  }
});

watchForHeader = function () {
  if ($(window).scrollTop() > ($('#title').position().top + $('#title').height())) {
    if (footerPosition == 'above') {
      footerPosition = 'below';
      $('#footer').animate({ top: 0 }, 500, 'swing');
    }
  }
  if ($(window).scrollTop() < 60 && footerPosition == 'below') {
    footerPosition = 'above';
    $('#footer').animate({ top: -80 }, 500, 'swing');
    $('#icon').animate({ top: -80 }, 500);
  }
};