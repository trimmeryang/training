var express = require('express');
var router = express.Router();
var elastic = require('elasticsearch');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(111, req.query.order);
    var newClient =  new elastic.Client({ hosts: ['http://192.168.11.173:9200/'] });
// get data from elasticsearch 1006385232 1005700831 1005441686



//     var query = {
//         "query": {
//             "bool": {
//                 "must": [
//                     {
//                         "match": {
//                             "details.sales_document": '1006385232'
//                         }
//                     }
//                 ]
//             }
//         }
//     };

    newClient.search({
        index: 'sap',
        type : 'sap_order',
        q    : ('details.sales_document:"1006385232" OR details.sales_document:"1005700831" OR details.sales_document:"1005441686"')
        // body : query
    }).then(function (resp) {
        newClient.close();
        console.log(222, resp.hits.hits);
        var vals = 111;
        res.render('index', { title: vals });
        // return 'test';
        // return resp.hits.hits.map(hit => hit._source);
    });
    console.log(333);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
