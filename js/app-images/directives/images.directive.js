let amitImage = function($state, ImagesService) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '='
    
    },
    template: `
      <div class="picContainer">
        <section class="large-3 columns">
          <img ng-src="{{ image.URL }}">
          <p>{{ image.Athlete }} {{ image.Url }} {{ image.caption }}</p>
          <button ng-click="count">Like <span>{{ image.likes }}</button>
        </section>  
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function() {
        element.addClass('heart');
        ImagesService.likes(scope.image); 
      
      });
    }  
  };  
};  

amitImage.$inject = ['$state', 'ImagesService'];

export default amitImage;