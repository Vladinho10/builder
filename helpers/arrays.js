'use strict';
const isEmptyArray = arr => !Array.isArray(arr) || !arr.length;
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const multiplyItems = numArray => numArray.reduce((acc, val) => acc * val, 1n);
const breakSegments = (arr, cpuCount) => {
    const segmentSize = Math.ceil(arr.length / cpuCount);
    const segments = [];

    for (let i = 0; i < cpuCount; i += 1) {
        const start = i * segmentSize;  // 0 * 10000
        const end = start + segmentSize;
        const segment = arr.slice(start, end);

        if (segment.length) {
            segments.push(segment);
        }
    }

    return segments;
};
const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }

    return res;
};
const arrays = {
    isEmptyArray,
    getRandomItem,
    multiplyItems,
    sliceIntoChunks,
    breakSegments,
};

module.exports = { arrays };
