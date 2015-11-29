import angular from 'angular';
import '../app-core/index';

import ImagesAddController from './controllers/images-add.controller';


import ImagesService from './services/images.service';

import amitImage from './directives/images.directive';

angular
  .module('app.images', ['app.core'])
  .controller('ImagesAddController', ImagesAddController)
  .service('ImagesService', ImagesService)
  .directive('amitImage', amitImage)
  
;