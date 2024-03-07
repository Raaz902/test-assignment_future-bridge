import { useState } from "react";

const accordianData = [
    { title: 'First title', body: 'Body of First title', bodyVisible: false },
    { title: 'Second title', body: 'Body of Second title', bodyVisible: false },
    { title: 'Third title', body: 'Body of Third title', bodyVisible: false },
    { title: 'Fouth title', body: 'Body of Fourth title', bodyVisible: false },
    { title: 'Fifth title', body: 'Body of first title', bodyVisible: false },
];

export function Accordian() {
    const [accordianItems, setData] = useState(accordianData);

    const handleTitleClick = (index) => {
        const dataRef = [...accordianItems];
        const dataObject = dataRef[index];
        dataObject.bodyVisible = !dataObject?.bodyVisible;
        setData(dataRef);
    }
    return (
        <>
            <h1>Accordian component | Mohammad Raaz</h1>
            <hr />

            <div style={{ marginTop: 20, textAlign: 'left' }}>
                {accordianItems.map((accordianItem, index) => {
                    return (
                        <div style={{ padding: 7, width: 300 }}>
                            <span style={{ cursor: 'pointer' }} onClick={() => handleTitleClick(index)}>{accordianItem.title}</span>
                            <br />
                            {accordianItem.bodyVisible && <span style={{ opacity: 0.8, marginTop: 5, marginLeft: 5 }} >{accordianItem.body}</span>}
                            <hr />
                        </div>
                    )
                })}
            </div>
        </>
    );
}