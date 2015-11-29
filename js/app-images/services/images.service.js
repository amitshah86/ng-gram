let ImageService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/image';

  this.getAllImages = getAllImages;
  this.addImage     = addImage;

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

};

ImageService.$injet = ['$http', 'PARSE'];

export default ImageService;