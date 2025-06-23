"use strict";
isLessThan(new Date(), new Date());
isLessThan(new Date(), Date.now());
isLessThan(12, 23);
isLessThan('A', 'B');
// isLessThan(12, 'B');
let dateOrStr = Math.random() < 0.5 ? new Date() : 'A';
