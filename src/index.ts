/*
Your task is to translate the lodash comments of the following files to Typescript Type Declarations.

JSDoc 파일들의 코드는 "./jsdoc.txt" 파일에 적어둠
typescript로 정의해줄 javascript의 함수들은 "./lodash.js" 파일
challenge 제출 코드(typescript 타입 정의 코드)는 "./lodash.d.ts" 파일
현재 이 파일에는 잘 동작되는지 확인하는 코드들
*/

import { head, hasIn } from "lodash";

//head.ts
head({
    array: [5, 2, 3],
});

//hasIn.ts
hasIn({ "dho": "dhkdl" }, "hello");
