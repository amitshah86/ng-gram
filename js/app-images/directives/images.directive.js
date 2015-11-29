let amitImage = function($state, ImageService) {

  return {
   restrict: 'AE',
   replace: true,
   scope: {
   image: '='

   },
   template:
    <div class="picContainer" ng-repeat="vm.clicked(image)">
      <h5>{{ image.name }}</h5>
      <p>{{ image.athlete }} {{ image.url }} {{image.caption }}</p>
    </div>
  `,
  controller: 'ImagesController as vm',
  link: function (scope, element, attrs) {
    element.on('click', function () {
       $state.go('root.home', { id: scope.image.objectId });
    });
  }  
};  

};  

amitImage.$inject = ['$state', 'ImagesService'];

export default amitImage;