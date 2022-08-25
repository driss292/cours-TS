let code: string | number | boolean | object | Function;
code = 5;

let arr: (boolean | number)[];
arr = [true, false, 777];

const foo = (param: number | string) => {
    console.log(param);
};
foo("str");
foo(333);
// foo(true); // ERREUR

// Types Perso
type mixedNumStr = number | string;
type booleanOrObjetc = boolean | object;

const baz = (param: mixedNumStr | booleanOrObjetc) => {
    console.log(param);
};
baz("txt");
baz(111);
baz(false);
baz({ name: "txt" });

type element = {
    x: number;
    y: number;
    id: number | string;
    visible: boolean;
};

const button: element = {
    x: 1,
    y: 2,
    id: "fhdhhf",
    visible: true,
};
