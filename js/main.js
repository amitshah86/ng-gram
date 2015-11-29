import angular from 'angular';

import './app-core/index';
import './app-images/index';
import './app-layout/index';

angular
.module('app', ['app.core', 'app.images', 'app.layout'])
;
  