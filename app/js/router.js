(function ()
 {
   angular
   .module ( 'app' , ['ui.router'])
   .config ( configFunc );

   configFunc.$inject = [ '$stateProvider', '$urlRouterProvider' ];

   function configFunc ( $stateProvider, $urlRouterProvider)
   {
     $stateProvider
     .state ( 'home', {
       url   : '/home',
       views : {
         content : {
           templateUrl : 'app/js/home.html'
         }
       }
     } )
     .state ( 'about', {
       url   : '/about',
       views : {
         content : {
           templateUrl : 'app/js/about.html'
         }
       }
     } )
     ;

     $urlRouterProvider.otherwise('/home');

   }
 }) ();

