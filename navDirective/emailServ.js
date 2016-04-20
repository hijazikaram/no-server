angular.module("solSiteRouter").service("emailServ", function($http) {

  this.sendEmail = function(name, email, message) {
    var mess = `<p> Name: ${name} </p>
            <p> Email: ${email} </p>
            <p> Message: ${message} </p>`;
    if (name && email && message) {
      return $http({
          method: 'POST',
          url: '',
          data: {
            'key': 'kLu16ufqZK6L8u1zYNyj6Q',
            'message': {
              'from_email': 'hijazikaram@gmail.com',
              'to': [{
                'email': 'hijazikaram@gmail.com',
                'name': 'Sol Innovations',
                'type': 'to'
              }],
              'autotext': 'true',
              'subject': 'Customer Inquiry - ' + name,
              'html': mess
            }
          }
        })
        .then(function itWorked(response) {
          return "Your email has been received. We will get back to you within the next 48 hours.";
        }, function itDidntWork(response){
          return "Woops! Something went wrong. Please contact us via linklden.";
        });
    }
  };
});
