module.exports = {


  bind : function(app) {


    // index
    app.get('/', function(req, res, next) {

      var data = {doctitle: 'Index'};
      res.render('home', data);

    });



    // application
    app.get('/pages/application/', function(req, res, next) {

      var data = {doctitle: 'Application'};
      res.render('pages/application/home', data);

    });


      app.get('/pages/application/confirmation/', function(req, res, next) {

        var data = {doctitle: 'Confirmation'};
        res.render('pages/application/confirmation/home', data);

      });


      app.get('/pages/application/submitted/', function(req, res, next) {

        var data = {doctitle: 'Sbmitted'};
        res.render('pages/application/submitted/home', data);

      });


    // invalid application token
    app.get('/pages/invalid-application-token/', function(req, res, next) {

      var data = {doctitle: 'Invalid Application Token'};
      res.render('pages/invalid-application-token/home', data);

    });


    // service unavailable
    app.get('/pages/service-unavailable/', function(req, res, next) {

      var data = {doctitle: 'Service Unavailable'};
      res.render('pages/service-unavailable/home', data);

    });


  }


};