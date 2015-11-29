let amitImage = function($state, ImagesService) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '='
    
    },
    template: `
      <div class="picContainer">
        <img ng-src="{{ image.URL }}">
        <p>{{ image.Athlete }} {{ image.Url }} {{ image.caption }}</p>
      </div>
    `,
    link: function (scope, element, attrs) {
    }  
  };  
};  

amitImage.$inject = ['$state', 'ImagesService'];

export default amitImage;