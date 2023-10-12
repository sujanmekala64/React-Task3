function C4(){

    const names = ["sujan","mekala","srinivas","sridevi","chintu"];

    const ListName = () => {
        return names.map((val)=>{
            return <li>{val}</li>
        })
    }
    return(
        <div>
            <ol>
                {ListName()}   {/**it will show all the names */}
            </ol>
        </div>
    )
}
export default C4;
