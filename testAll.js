import { runTests } from "./util.js";
import { tests as test01 } from "./Solution_01.js";
import { tests as test02 } from "./Solution_02.js";
import { tests as test03 } from "./Solution_03.js";
import { tests as test04 } from "./Solution_04.js";
import { tests as test05 } from "./Solution_05.js";
import { tests as test06 } from "./Solution_06.js";
import { tests as test07 } from "./Solution_07.js";
import { tests as test08 } from "./Solution_08.js";
import { tests as test09 } from "./Solution_09.js";
import { tests as test10 } from "./Solution_10.js";

runTests([
    ...test01, ...test02, 
    ...test03, ...test04,
    ...test05, ...test06,
    ...test07, ...test08,
    ...test09, ...test10
]);
