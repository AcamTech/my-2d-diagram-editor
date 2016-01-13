(function() {

  'use strict';

  angular.module('my-2d-diagram-editor')
    .config(configApp);

  function configApp($translateProvider, $stateProvider, $urlRouterProvider) {
    configTranslations($translateProvider);
    configRoutes($stateProvider, $urlRouterProvider);
  }

  function configTranslations($translateProvider) {

    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/locales/',
        suffix: '.json'
      })
      .registerAvailableLanguageKeys(['en', 'de'], {
        'en' : 'en', 'en_GB': 'en', 'en_US': 'en',
        'pl' : 'pl', 'pl_PL': 'pl',
        'de' : 'de', 'de_DE': 'de', 'de_CH': 'de'
      })
      .preferredLanguage('de')
      .fallbackLanguage('de')
      .determinePreferredLanguage()
      .useSanitizeValueStrategy('escapeParameters');
  }

  function configRoutes($stateProvider, $urlRouterProvider) {

    /*
     * Routes allow you to define ways to navigate to specific states within your application.
     * They also allow you to define configuration options for each specific route, such as
     * which template and controller to use.
     */

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/layout.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

