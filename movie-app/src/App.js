import React from "react";

function Test2({ text }) {
    return <h2>It also {text}</h2>;
}

const testList = [
    {
        id: 1,
        name: "TEST1",
        number: 1,
    },
    { id: 2, name: "TEST2", number: 2 },
    { id: 3, name: "TEST3", number: 3 },
    { id: 4, name: "TEST4", number: 4 },
    { id: 5, name: "TEST5", number: 5 },
];

function App() {
    return (
        <div>
            {testList.map(function (number) {
                return <Test2 key={number.id} text={number.name} />;
            })}
            <br></br>
            {testList.map((number) => (
                <Test2 key={number.id} text={number.name} />
            ))}
        </div>
    );
}

export default App;
