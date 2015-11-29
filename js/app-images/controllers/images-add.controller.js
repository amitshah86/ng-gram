let ImagesAddController = function(ImagesService) {

  let vm = this;

  vm.addImage = addImage;

  function addImage (imageObj) {
    ImagesService.addImage(imageObj).then( (res) => {
      console.log(res);
    });
  }
};

ImagesAddController.$inject = ['ImagesService'];

export default ImagesAddController;