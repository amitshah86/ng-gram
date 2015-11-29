let ImagesController = function(ImagesService) {

  let vm = this;

  vm.images = [];
  vm.clicked = clicked;

  activate();

  function activate () {
    ImagesService.getAllImages().then( (res) => {
      vm.images = res.data.results;
    });
  }

  // function clicked (image) {
  //   console.log('clicked', image.name);
  // }

};
 
ImagesController.$inject = ['ImagesService'];

export default ImagesController;