const FirstComponent = () => {
    const name = "Tazul";
    return (
    <>
        <h1 className="text-xl text-bold text-red-500">Hello {name || "World"}</h1>
         <p>hi</p>
    </>
    )
};

export default FirstComponent;