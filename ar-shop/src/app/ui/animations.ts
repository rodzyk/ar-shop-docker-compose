import { trigger, style, animate, transition, keyframes } from "@angular/animations";

const TIME = ".3s";
const FN = "ease-in-out";

export let changeValueHighlight = trigger('changeValueHighlight', [
  transition('void => *', []),   // when the item is created
    transition('* => void', []),   // when the item is removed
    transition('* => *', [         // when the item is changed
        animate(`${TIME} ${FN}`, keyframes([  // animate for 1200 ms
            style ({ transform: "scale(1.2)", color : '#9F1941',  offset: 0.0 }),
            style ({ transform: "scale(1)", color : 'inherit',  offset: 1.0 }),
        ])),
    ]),
]);

export let changeValueScale = trigger('changeValueScale', [
  transition('void => *', []),   // when the item is created
    transition('* => void', []),   // when the item is removed
    transition('* => *', [         // when the item is changed
        animate(`${TIME} ${FN}`, keyframes([  // animate for 1200 ms
            style ({ transform: "scale(1.1)",  offset: 0.0 }),
            style ({ transform: "scale(1)", offset: 1.0 }),
        ])),
    ]),
]);

export let fadeHeight = trigger("fadeHeight", [
  transition(":enter", [
    style({ opacity: "0", maxHeight: "0px" }),
    animate(`${TIME} ${FN}`, style({ opacity: "1",  maxHeight: "400px" }))
  ]),
  transition(":leave", [
    style({ opacity: "1",  maxHeight: "400px" }),
    animate(`${TIME} ${FN}`, style({ opacity: "0", maxHeight: "0px" }))
  ])
]);

export let fadeScale = trigger("fadeScale", [
  transition(":enter", [
    style({ opacity: "0", transform: "scale(0)" }),
    animate(`${TIME} ${FN}`, style({ opacity: "1", transform: "scale(1)" })),
  ]),
  transition(":leave", [
    style({ opacity: "1" }),
    animate(
      `${TIME} ${FN}`,
      style({ opacity: "0", transform: "scale(0)", width: "0", height: "0" })
    ),
  ]),
]);

export let fade = trigger("fade", [
  transition(":enter", [
    style({ opacity: "0" }),
    animate(`${TIME} ${FN}`, style({ opacity: "1" }))
  ]),
  transition(":leave", [
    style({ opacity: "1" }),
    animate(`${TIME} ${FN}`, style({ opacity: "0" }))
  ])
]);

export let slideRight = trigger("slideRight", [
  transition(":enter", [
    style({ transform: "translateX(100%)" }),
    animate(`${TIME} ${FN}`, style({ transform: "translateX(0)" }))
  ]),
  transition(":leave", [
    style({ transform: "translateX(0)" }),
    animate(`${TIME} ${FN}`, style({ transform: "translateX(100%)" }))
  ])
]);

export let slideLeft = trigger("slideLeft", [
  transition(":enter", [
    style({ transform: "translateX(-100%)" }),
    animate(`${TIME} ${FN}`, style({ transform: "translateX(0)" }))
  ]),
  transition(":leave", [
    style({ transform: "translateX(0)" }),
    animate(`${TIME} ${FN}`, style({ transform: "translateX(-100%)" }))
  ])
]);
export let slideTop = trigger("slideTop", [
  transition(":enter", [
    style({ transform: "translateY(-100%)" }),
    animate(`${TIME} ${FN}`, style({ transform: "translateY(0)" }))
  ]),
  transition(":leave", [
    style({ transform: "translateY(0)" }),
    animate(`${TIME} ${FN}`, style({ transform: "translateY(-100%)" }))
  ])
]);

export const scale = trigger("scale", [
  transition(":enter", [
    style({ transform: "scale(0)" }),
    animate(`${TIME} ${FN}`, style({ transform: "scale(1)" }))
  ]),
  transition(":leave", [
    style({ transform: "scale(1)" }),
    animate(`${TIME} ${FN}`, style({ transform: "scale(0)" }))
  ])
]);