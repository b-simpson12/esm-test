import { upperCase } from 'lodash-es';
import { basicLib } from '@esm-test/basic-lib';
import { lowercase } from '@esm-test/cjs-lib';
import { lowercase as esmLowercase } from '@esm-test/esm-lib';


console.log(upperCase('Hello World'));
console.log(basicLib());
console.log(lowercase('Hello World'));
console.log(esmLowercase('Hello World'));
console.log('Hello World');
