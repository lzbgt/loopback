// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var SG = require('strong-globalize');
var g = SG();

var loopback = require('../../');
var client = loopback();
var CartItem = require('./models').CartItem;
var remote = loopback.createDataSource({
  connector: loopback.Remote,
  url: 'http://localhost:3000',
});

client.model(CartItem);
CartItem.attachTo(remote);

// call the remote method
CartItem.sum(1, function(err, total) {
  console.log(g.f('result:%s', err || total));
});

// call a built in remote method
CartItem.find(function(err, items) {
  g.log(items);
});
