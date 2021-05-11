define(["./calculation"], function (_calculation) {
  "use strict";

  console.log('running in browser runtime....');
  console.log((0, _calculation.add)(10, 20));
  console.log((0, _calculation.subtract)(10, 5));
});