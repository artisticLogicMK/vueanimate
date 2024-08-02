import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
export function jello(element, options) {
    // Validate l options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    return new ConstructAnimation(element, __assign({ duration: options.duration ? options.duration : 2, keyframes: [
            { skewX: "-12.5deg", skewY: "-12.5deg", ease: "none", duration: 0.222 },
            { skewX: "6.25deg", skewY: "6.25deg", ease: "none", duration: 0.111 },
            { skewX: "-3.125deg", skewY: "-3.125deg", ease: "none", duration: 0.111 },
            { skewX: "1.5625deg", skewY: "1.5625deg", ease: "none", duration: 0.111 },
            { skewX: "-0.78125deg", skewY: "-0.78125deg", ease: "none", duration: 0.111 },
            { skewX: "0.390625deg", skewY: "0.390625deg", ease: "none", duration: 0.111 },
            { skewX: "-0.1953125deg", skewY: "-0.1953125deg", ease: "none", duration: 0.111 }
        ], repeat: options.loop ? -1 : 0, repeatDelay: options.delay ? options.delay : 0.111, yoyo: true }, options));
}
