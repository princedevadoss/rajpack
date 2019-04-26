App.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'HomeController',
        templateUrl: 'app/templates/home.html'
      }
    )
    .when('/admin',
      {
        controller: 'AdminController',
        templateUrl: 'app/templates/admin.html'
      }
    )
    .when('/adminpage',
      {
        controller: "AdminPageController",
        templateUrl: 'app/templates/adminpage.html'
      }
    )
    .when('/contact',
      {
        controller: "ContactController",
        templateUrl: 'app/templates/contactus.html'
      }
    )
    .when('/aboutus',
      {
        controller: "AboutController",
        templateUrl: 'app/templates/aboutus.html'
      }
    )
    .when('/machinery',
      {
        controller: "MachineryController",
        templateUrl: 'app/templates/machinery.html'
      }
    )
    .when('/customer',
      {
        controller: "CustomerController",
        templateUrl: 'app/templates/customer.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
    $locationProvider.html5Mode(true);
});