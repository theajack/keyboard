
const os = getQueryString('os');

export const mac = os ? (os === 'mac') : navigator.userAgent.includes('Macintosh');

function getQueryString (name: string) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

export const isMobile = /Android|iPhone|iPad/.test(navigator.userAgent);

// ⌥ ⌘ ⇧ ^ ↵
export const keyboardData: any = [
    [
        { n: 'Esc', mr: mac ? 0 : 60, c: 'Escape', kc: 27, w: mac ? 80 : 50 },
        { n: 'F1', c: 'F1', kc: 112 },
        { n: 'F2', c: 'F2', kc: 113 },
        { n: 'F3', c: 'F3', kc: 114 },
        { n: 'F4', mr: mac ? 0 : 30, c: 'F4', kc: 115 },
        { n: 'F5', c: 'F5', kc: 116 },
        { n: 'F6', c: 'F6', kc: 117 },
        { n: 'F7', c: 'F7', kc: 118 },
        { n: 'F8', mr: mac ? 0 : 30, c: 'F8', kc: 119 },
        { n: 'F9', c: 'F9', kc: 120 },
        { n: 'F10', c: 'F10', kc: 121 },
        { n: 'F11', c: 'F11', kc: 122 },
        { n: 'F12', mr: mac ? 0 : 10, c: 'F12', kc: 123 },
        ...(mac ? [
            { n: '', d: true, half: true, hb: true, gh: true },
        ] : [
            // { n: 'SysRq', sn: 'PrtSc', c: 'F13', kc: 124, d: true },
            { n: 'SysRq', d: true },
            { n: 'ScrLk', c: 'ScrollLock' },
            { n: 'Break', sn: 'Pause', mr: 130, c: 'Pause' },
            { n: 'Mac', c: 'SwitchMac', d: true },
            { n: '', d: true, gh: true },
        ])
    ],
    [
        { n: '`', sn: '~', c: 'Backquote', kc: 192 },
        { n: '1', sn: '!', c: 'Digit1', kc: 49 },
        { n: '2', sn: '@', c: 'Digit2', kc: 50 },
        { n: '3', sn: '#', c: 'Digit3', kc: 51 },
        { n: '4', sn: '$', c: 'Digit4', kc: 52 },
        { n: '5', sn: '%', c: 'Digit5', kc: 53 },
        { n: '6', sn: '^', c: 'Digit6', kc: 54 },
        { n: '7', sn: '&', c: 'Digit7', kc: 55 },
        { n: '8', sn: '*', c: 'Digit8', kc: 56 },
        { n: '9', sn: '(', c: 'Digit9', kc: 57 },
        { n: '0', sn: ')', c: 'Digit0', kc: 48 },
        { n: '-', sn: '_', c: 'Minus', kc: 189 },
        { n: '=', sn: '+', c: 'Equal', kc: 187 },
        { n: '<-', w: mac ? 80 : 110, mr: mac ? 0 : 10, c: 'Backspace', kc: 8 },
        ...(mac ? [
        ] : [
            { n: 'Ins', c: 'Insert', kc: 45 },
            { n: 'Home', c: 'Home', kc: 36 },
            { n: 'PgUp', mr: 10, c: 'PageUp', kc: 33 },
            { n: 'NumLk', c: 'NumLock', kc: 144 },
            { n: '/', c: 'NumpadDivide', kc: 111 },
            { n: '*', c: 'NumpadMultiply', kc: 106 },
            { n: '-', c: 'NumpadSubtract', kc: 109 }
        ])
    ],
    [
        { n: 'Tab', w: 80, c: 'Tab', kc: 9 },
        { n: 'Q', c: 'KeyQ', kc: 81 },
        { n: 'W', c: 'KeyW', kc: 87 },
        { n: 'E', c: 'KeyE', kc: 69 },
        { n: 'R', c: 'KeyR', kc: 82 },
        { n: 'T', c: 'KeyT', kc: 84 },
        { n: 'Y', c: 'KeyY', kc: 89 },
        { n: 'U', c: 'KeyU', kc: 85 },
        { n: 'I', c: 'KeyI', kc: 73 },
        { n: 'O', c: 'KeyO', kc: 79 },
        { n: 'P', c: 'KeyP', kc: 80 },
        { n: '[', sn: '{', c: 'BracketLeft', kc: 219 },
        { n: ']', sn: '}', c: 'BracketRight', kc: 221 },
        { n: '\\', sn: '|', w: mac ? 50 : 80, mr: mac ? 0 : 10, c: 'Backslash', kc: 220 },
        ...(mac ? [
        ] : [
            { n: 'Del', c: 'Delete', kc: 46 },
            { n: 'End', c: 'End', kc: 35 },
            { n: 'PgDn', mr: 10, c: 'PageDown', kc: 34 },
            { n: '7', sn: 'Home', c: 'Numpad7', kc: 103 },
            { n: '8', sn: '↑', c: 'Numpad8', kc: 104 },
            { n: '9', sn: 'PgUp', c: 'Numpad9', kc: 105 },
            { n: '+', tw: true, c: 'NumpadAdd', kc: 107 }
        ])
    ],
    [
        { n: 'Caps Lock', w: mac ? 95 : 110, c: 'CapsLock', kc: 20 },
        { n: 'A', c: 'KeyA', kc: 65 },
        { n: 'S', c: 'KeyS', kc: 83 },
        { n: 'D', c: 'KeyD', kc: 68 },
        { n: 'F', c: 'KeyF', kc: 70 },
        { n: 'G', c: 'KeyG', kc: 71 },
        { n: 'H', c: 'KeyH', kc: 72 },
        { n: 'J', c: 'KeyJ', kc: 74 },
        { n: 'K', c: 'KeyK', kc: 75 },
        { n: 'L', c: 'KeyL', kc: 76 },
        { n: ';', sn: ':', c: 'Semicolon', kc: 186 },
        { n: '\'', sn: '"', c: 'Quote', kc: 222 },
        { n: '↵', w: mac ? 95 : 110, mr: mac ? 0 : 200, c: 'Enter', kc: 13 },
        ...(mac ? [
        ] : [
            { n: '4', sn: '←', c: 'Numpad4', kc: 100 },
            { n: '5', sn: ' ', c: 'Numpad5', kc: 101 },
            { n: '6', sn: '→', c: 'Numpad6', kc: 102 }
        ])
    ],
    [
        { n: 'Shift', w: mac ? 125 : 140, c: 'ShiftLeft', kc: 16 },
        { n: 'Z', c: 'KeyZ', kc: 90 },
        { n: 'X', c: 'KeyX', kc: 88 },
        { n: 'C', c: 'KeyC', kc: 67 },
        { n: 'V', c: 'KeyV', kc: 86 },
        { n: 'B', c: 'KeyB', kc: 66 },
        { n: 'N', c: 'KeyN', kc: 78 },
        { n: 'M', c: 'KeyM', kc: 77 },
        { n: ',', sn: '<', c: 'Comma', kc: 188 },
        { n: '.', sn: '>', c: 'Period', kc: 190 },
        { n: '/', sn: '?', c: 'Slash', kc: 191 },
        { n: 'Shift', mr: mac ? 0 : 70, w: mac ? 125 : 140, c: 'ShiftRight', kc: 16 },
        ...(mac ? [
        ] : [
            { n: '↑', mr: 70, c: 'ArrowUp', kc: 38 },
            { n: '1', sn: 'End', c: 'Numpad1', kc: 97 },
            { n: '2', sn: '↓', c: 'Numpad2', kc: 98 },
            { n: '3', sn: 'PgDn', c: 'Numpad3', kc: 99 },
            { n: 'Enter', tw: true, c: 'NumpadEnter', kc: 13 }
        ])
    ],
    [
        ...(mac ? [
            { n: 'Fn', c: 'None', d: true, kc: 17 },
            { n: 'Ctrl', sn: '^', c: 'ControlLeft', kc: 17 },
            { n: 'Opt', sn: '⌥', c: 'AltLeft', kc: 18 },
            { n: 'Cmd', sn: '⌘', c: 'MetaLeft', kc: 91, w: 65 },
        ] : [
            { n: 'Ctrl', c: 'ControlLeft', kc: 17 },
            { n: 'Win', c: 'MetaLeft', kc: 91 },
            { n: 'Alt', c: 'AltLeft', kc: 18 },
        ]),
        { n: 'Space', w: mac ? 290 : 470, c: 'Space', kc: 32 },
        ...(mac ? [
            { n: 'Cmd', sn: '⌘', c: 'MetaRight', kc: 93, w: 65 },
            { n: 'Opt', sn: '⌥', c: 'AltRight', kc: 18 },
            { n: '←', c: 'ArrowLeft', half: true, kc: 37 },
            { n: '↓', c: 'ArrowDown', half: true, hb: true, kc: 40 },
            { n: '→', c: 'ArrowRight', half: true, kc: 39 },
        ] : [
            { n: 'Alt', c: 'AltRight', kc: 18 },
            { n: 'Fn', d: true },
            { n: 'Ctx', c: 'ContextMenu', kc: 93 },
            { n: 'Ctrl', mr: mac ? 0 : 10, c: 'ControlRight', kc: 17 },
            { n: '←', c: 'ArrowLeft', kc: 37 },
            { n: '↓', c: 'ArrowDown', kc: 40 },
            { n: '→', mr: 10, c: 'ArrowRight', kc: 39 },
            { n: '0', sn: 'Ins', w: 110, c: 'Numpad0', kc: 96 },
            { n: '.', sn: 'Del', c: 'NumpadDecimal', kc: 110 }
        ])
    ]
];

export const Map = {
    Escape: { kc: 27, k: 'Escape', l: 0 },
    F1: { kc: 112, k: 'F1', l: 0 },
    F2: { kc: 113, k: 'F2', l: 0 },
    F3: { kc: 114, k: 'F3', l: 0 },
    F4: { kc: 115, k: 'F4', l: 0 },
    F5: { kc: 116, k: 'F5', l: 0 },
    F6: { kc: 117, k: 'F6', l: 0 },
    F7: { kc: 118, k: 'F7', l: 0 },
    F8: { kc: 119, k: 'F8', l: 0 },
    F9: { kc: 120, k: 'F9', l: 0 },
    F10: { kc: 121, k: 'F10', l: 0 },
    F11: { kc: 122, k: 'F11', l: 0 },
    F12: { kc: 123, k: 'F12', l: 0 },
    ScrollLock: { kc: 145, k: 'ScrollLock', l: 0 },
    Pause: { kc: 19, k: 'Pause', l: 0 },
    Insert: { kc: 45, k: 'Insert', l: 0 },
    Delete: { kc: 46, k: 'Delete', l: 0 },
    Home: { kc: 36, k: 'Home', l: 0 },
    End: { kc: 35, k: 'End', l: 0 },
    PageUp: { kc: 33, k: 'PageUp', l: 0 },
    PageDown: { kc: 34, k: 'PageDown', l: 0 },
    Backquote: { kc: 192, k: '`', l: 0 },
    Digit1: { kc: 49, k: '1', l: 0 },
    Digit2: { kc: 50, k: '2', l: 0 },
    Digit3: { kc: 51, k: '3', l: 0 },
    Digit4: { kc: 52, k: '4', l: 0 },
    Digit5: { kc: 53, k: '5', l: 0 },
    Digit6: { kc: 54, k: '6', l: 0 },
    Digit7: { kc: 55, k: '7', l: 0 },
    Digit8: { kc: 56, k: '8', l: 0 },
    Digit9: { kc: 57, k: '9', l: 0 },
    Digit0: { kc: 48, k: '0', l: 0 },
    Minus: { kc: 189, k: '-', l: 0 },
    Equal: { kc: 187, k: '=', l: 0 },
    Backspace: { kc: 8, k: 'Backspace', l: 0 },
    NumLock: { kc: 144, k: 'NumLock', l: 0 },
    NumpadDivide: { kc: 111, k: '/', l: 3 },
    NumpadMultiply: { kc: 106, k: '*', l: 3 },
    NumpadSubtract: { kc: 109, k: '-', l: 3 },
    Tab: { kc: 9, k: 'Tab', l: 0 },
    KeyQ: { kc: 81, k: 'q', l: 0 },
    KeyW: { kc: 87, k: 'w', l: 0 },
    KeyE: { kc: 69, k: 'e', l: 0 },
    KeyR: { kc: 82, k: 'r', l: 0 },
    KeyT: { kc: 84, k: 't', l: 0 },
    KeyY: { kc: 89, k: 'y', l: 0 },
    KeyU: { kc: 85, k: 'u', l: 0 },
    KeyI: { kc: 73, k: 'i', l: 0 },
    KeyO: { kc: 79, k: 'o', l: 0 },
    KeyP: { kc: 80, k: 'p', l: 0 },
    BracketLeft: { kc: 219, k: '[', l: 0 },
    BracketRight: { kc: 221, k: ']', l: 0 },
    Backslash: { kc: 220, k: '\\', l: 0 },
    Numpad7: { kc: 103, k: '7', l: 3 },
    Numpad8: { kc: 104, k: '8', l: 3 },
    Numpad9: { kc: 105, k: '9', l: 3 },
    NumpadAdd: { kc: 107, k: '+', l: 3 },
    CapsLock: { kc: 20, k: 'CapsLock', l: 0 },
    KeyA: { kc: 65, k: 'a', l: 0 },
    KeyS: { kc: 83, k: 's', l: 0 },
    KeyD: { kc: 68, k: 'd', l: 0 },
    KeyF: { kc: 70, k: 'f', l: 0 },
    KeyG: { kc: 71, k: 'g', l: 0 },
    KeyH: { kc: 72, k: 'h', l: 0 },
    KeyJ: { kc: 74, k: 'j', l: 0 },
    KeyK: { kc: 75, k: 'k', l: 0 },
    KeyL: { kc: 76, k: 'l', l: 0 },
    Semicolon: { kc: 186, k: ';', l: 0 },
    Quote: { kc: 222, k: '\'', l: 0 },
    Enter: { kc: 13, k: 'Enter', l: 0 },
    Numpad4: { kc: 100, k: '4', l: 3 },
    Numpad5: { kc: 101, k: '5', l: 3 },
    Numpad6: { kc: 102, k: '6', l: 3 },
    ShiftLeft: { kc: 16, k: 'Shift', l: 1 },
    KeyZ: { kc: 90, k: 'z', l: 0 },
    KeyX: { kc: 88, k: 'x', l: 0 },
    KeyC: { kc: 67, k: 'c', l: 0 },
    KeyV: { kc: 86, k: 'v', l: 0 },
    KeyB: { kc: 66, k: 'b', l: 0 },
    KeyN: { kc: 78, k: 'n', l: 0 },
    KeyM: { kc: 77, k: 'm', l: 0 },
    Comma: { kc: 188, k: ',', l: 0 },
    Period: { kc: 190, k: '.', l: 0 },
    Slash: { kc: 191, k: '/', l: 0 },
    ShiftRight: { kc: 16, k: 'Shift', l: 2 },
    ArrowUp: { kc: 38, k: 'ArrowUp', l: 0 },
    Numpad1: { kc: 97, k: '1', l: 3 },
    Numpad2: { kc: 98, k: '2', l: 3 },
    Numpad3: { kc: 99, k: '3', l: 3 },
    NumpadEnter: { kc: 13, k: 'Enter', l: 3 },
    ControlLeft: { kc: 17, k: 'Control', l: 1 },
    MetaLeft: { kc: 91, k: 'Meta', l: 1 },
    AltLeft: { kc: 18, k: 'Alt', l: 1 },
    Space: { kc: 32, k: ' ', l: 0 },
    AltRight: { kc: 18, k: 'Alt', l: 2 },
    ContextMenu: { kc: 93, k: 'ContextMenu', l: 0 },
    ControlRight: { kc: 17, k: 'Control', l: 2 },
    ArrowLeft: { kc: 37, k: 'ArrowLeft', l: 0 },
    ArrowDown: { kc: 40, k: 'ArrowDown', l: 0 },
    ArrowRight: { kc: 39, k: 'ArrowRight', l: 0 },
    Numpad0: { kc: 96, k: '0', l: 3 },
    NumpadDecimal: { kc: 110, k: '.', l: 3 },
    // mac 特有
    MetaRight: { kc: 93, k: 'Meta', l: 2 },
};
