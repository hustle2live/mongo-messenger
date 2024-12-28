const cutString = (str, end = 10, add = '') => str.slice(0, end).concat(add);
const notEmpty = (obj) => obj.length > 0;
const lastElem = (array) => [...array].reverse()[0];
const toLocalDate = (str) => new Date(str).toLocaleDateString();
const copyArr = (array) => [...array];

export { cutString, notEmpty, lastElem, toLocalDate, copyArr };
