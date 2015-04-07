module.exports = {


  bind : function(app) {


    // index
    app.get('/', function(req, res, next) {

      var data = {doctitle: 'Index'};
      res.render('home', data);

    });



    // application
    app.get('/pages/application/', function(req, res, next) {

      var data = {doctitle: "Confirm your 2015 Basic Payment Scheme application"};
      res.render('pages/application/home', data);

    });


      app.get('/pages/application/confirmation/', function(req, res, next) {

        var data = {doctitle: "You’ve made your 2015 Basic Payment Scheme application"};
        res.render('pages/application/confirmation/home', data);

      });


      app.get('/pages/application/submitted/', function(req, res, next) {

        var data = {doctitle: "You've made your 2015 BPS application"};
        res.render('pages/application/submitted/home', data);

      });


    // invalid application token
    app.get('/pages/invalid-application-token/', function(req, res, next) {

      var data = {doctitle: "Invalid Token"};
      res.render('pages/invalid-application-token/home', data);

    });


    // service unavailable
    app.get('/pages/service-unavailable/', function(req, res, next) {

      var data = {doctitle: "Service Unavailable"};
      res.render('pages/service-unavailable/home', data);

    });


  }


};