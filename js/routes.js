import Navigo from 'navigo'; // When using ES modules.

const router = new Navigo('/');
router.on({
    '/': () => {
      $("#loadDivs").load("/components/navbar.html");
    },
    '/about': () => {
        $("#loadDivs").load("/pages/about.html");
    }
  });


  router.resolve();