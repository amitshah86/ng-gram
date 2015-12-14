let ImagesService = function($http, PARSE, $stateParams) {

  let url = PARSE.URL + 'classes/images';

  this.image        = image;
  this.getAllImages = getAllImages;
  this.addImage     = addImage;
  this.likes        = likes;
  this.updateLikes  = updateLikes;

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }
  function image (imageObj) {
    this.athlete = imageObj.athlete;
    this.url = imageObj.url;
    this.caption = imageObj.caption;
    this.objectId = imageObj.objectId;
    this.likes = [];

  }

  function addImage (imageObj) {
    let img = new Image(imageObj);
    image.image = imageUrl;
    return $http.post(url + '/' + image.objectId, image, PARSE.CONFIG);
  }
  function likes(obj) {
    updateLikes();

  }
  function updateLikes (obj) {
    obj.likes = obj.likes + 1;
    console.log(obj.likes);
    return $http.post(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  } 



};

ImagesService.$inject = ['$http', 'PARSE', '$stateParams'];

export default ImagesService;