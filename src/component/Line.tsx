function Line(prop:any) {
    const {Data} = prop
    return(
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl line-through"> {Data.title} </span>
        </div>
    );
}

export default Line