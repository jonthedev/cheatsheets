# GSAP 


[www.greensock.com/get-started](https://greensock.com/get-started)

## Installing

[www.greensock.com/get-started](https://www.npmjs.com/package/gsap)

```terminal
$npm install gsap
````

```js
// typical import
import gsap from "gsap";
 
// or get other plugins:
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
 
// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
 
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 
```
