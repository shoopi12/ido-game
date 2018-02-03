export const _Data = {
    1: {
        text: 'You wake up. You find yourself lying on a cold floor, inside an empty room you\'ve never seen before.'
            + '\n\nYou\'re naked.',
        button1: { text: 'Panic', target: 2 },
        id: 1,
    },
    2: {
        text: 'You start panicking, screaming for help frantically. Screaming for mom.'
            + '\nThere is no answer.'
            + '\n\nYou notice a locked door.',
        button1: { text: 'Cry', target: 3 },
        button2: { text: 'Go towards door', target: 4 },
        id: 2,
    },
    3: {
        text: 'You breakdown. You start crying like a little girl. It makes you feel a little better.',
        button1: { text: 'Go towards door', target: 4 },
        id: 3,
    },
    4: {
        text: 'You examine the lock on the door. It appears to be rusty. '
            + 'You are wondering whether you could possibly break it with your hands.',
        button1: { text: 'Try to break the lock', target: 5 },
        button2: { text: 'Knock on the door', target: 6 },
        id: 4,
    },
    5: {
        text: 'You attempt to break the lock with your bare hands. The lock may be rusty, but it still won\'t budge. '
        + 'You look at your bruised hands. You\'re bleeding. \nThat was a dumb idea.',
        button1: { text: 'Knock on the door', target: 6 },
        id: 5,
    },
    6: {
        text: 'You knock on the door as loud as you can. After a moment, you hear something on the other side. '
        + 'A man\'s voice suddenly mutters - "What?"',
        button1: { text: '"What is this?!"', target: 7 },
        button2: { text: '"Who are you?!"', target: 7 },
        button3: { text: '"Help!"', target: 7 },
        id: 6,
    },
    7: {
        text: 'You hear the man laugh. Then the door opens and before you can see anything, you feel a sharp pain. '
        + 'You\'ve been hit in the head really hard. You pass out.',
        button1: { text: 'Wake up', target: 1 },
        id: 7,
    },
}
