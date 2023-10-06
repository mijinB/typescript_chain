/*
Your task is to translate the lodash comments of the following files to Typescript Type Declarations.

JSDoc 파일들의 코드는 "./jsdoc.txt" 파일에 적어둠
typescript로 정의해줄 javascript의 함수들은 "./lodash.js" 파일
challenge 제출 코드(typescript 타입 정의 코드)는 "./lodash.d.ts" 파일
현재 이 파일에는 잘 동작되는지 확인하는 코드들
*/

import { head, hasIn, isBoolean, toString, split, hasPath, filter, every, map } from "lodash";

//head.ts
head([5, 2, 3]);

//hasIn.ts
hasIn({ "dho": "dhkdl" }, "hello");

//isBoolean.ts
isBoolean("test");

//toString.ts
toString(12345);

//split.ts
split("a-b-c", "-", 2);

//hasPath.ts
hasPath({ "dho": "dhkdl" }, ["a", "b"]);

//filter.ts
const users = [
    { "user": "barney", "active": true },
    { "user": "fred", "active": false },
];
filter(users, ({ active }: { active: boolean }) => active);

//every.ts
every([true, 1, null, "yes"], Boolean);

//map.ts
function square(n: number) {
    return n * n;
}
map([4, 8], square);
