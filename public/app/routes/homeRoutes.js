App.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'HomeController',
        templateUrl: 'old/app/templates/home.html'
      }
    )
    .when('/admin',
      {
        controller: 'AdminController',
        templateUrl: 'old/app/templates/admin.html'
      }
    )
    .when('/adminpage',
      {
        controller: "AdminPageController",
        templateUrl: 'old/app/templates/adminpage.html'
      }
    )
    .when('/contact',
      {
        controller: "ContactController",
        templateUrl: 'old/app/templates/contactus.html'
      }
    )
    .when('/aboutus',
      {
        controller: "AboutController",
        templateUrl: 'old/app/templates/aboutus.html'
      }
    )
    .when('/machinery',
      {
        controller: "MachineryController",
        templateUrl: 'old/app/templates/machinery.html'
      }
    )
    .when('/customer',
      {
        controller: "CustomerController",
        templateUrl: 'old/app/templates/customer.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
    $locationProvider.html5Mode(true);
});