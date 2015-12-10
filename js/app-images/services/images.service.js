let ImagesService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/images';

  this.getAllImages = getAllImages;
  this.addImage     = addImage;
  this.like         = like;

  function Image (imageObj) {
    this.athlete = imageObj.athlete;
    this.url = imageObj.url;
    this.caption = imageObj.caption;
  }

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (imageUrl, image) {
    image.image = imageUrl;
    return $http.put(url + '/' + image.objectId, image, PARSE.CONFIG);
  }
  function like(obj) {
    updateLikes();

  }
  function updatesLikes (obj) {
    obj.likes = obj.likes + 1;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);

  }

};

ImagesService.$inject = ['$http', 'PARSE'];

export default ImagesService;