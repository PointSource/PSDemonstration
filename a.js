app.config(function($urlRouterProvider) {
    // Don't start the router until we can initialize the first state.
	$urlRouterProvider.deferIntercept();
})
.run(['$urlRouter', '$state', function($urlRouter, $state) {
	// Set the correct initial state, then start the router.
	$state.go('login.form');
	$urlRouter.listen();
}]);
