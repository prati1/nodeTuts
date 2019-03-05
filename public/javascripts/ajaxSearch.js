// $('#search').bind('keyup', function () {
//   queryFunction($('#search').val(), function (data) {
//     //console.log('index data', data);
//     //var res = JSON.parse(data.queryResult);
//     //console.log('parsed',res);
//     //$('#searchResult').html("<p>" + res.name + "</p>");
//     $('#searchResult').html(data);
//   });
// });

$('#search').bind('keyup', () => {
  queryFunction($('#search').val().toLowerCase(), (data) => {
    $('#searchResult').html(data);
  });
});

// function queryFunction(value, callback) {
//   $.ajax('/search/' + value + '/', {
//     type: 'GET',
//     //dataType: 'json',
//     success: function (data) { if (callback) callback(data); },
//     error: function () { if (callback) callback(null); }
//   });
// }

function queryFunction(value, callback) {
  $.ajax('/search/' + value + '/', {
    type: 'GET',
    success: (data) => {
      if (callback) callback(data);
    },
    error: () => {
      if (callback) callback(null);
    }
  });
}