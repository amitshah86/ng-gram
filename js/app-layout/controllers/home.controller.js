let HomeController = function(ImagesService) {

  let vm = this;

  vm.title = 'Sports Page';
  
  vm.activate = activate;

  vm.images = [];
  
  activate();

  function activate (obj) {
    ImagesService.getAllImages(obj).then( (res) => {
      vm.images = res.data.results;
    });
  }
};

HomeController.$inject = ['ImagesService'];

export default HomeController;