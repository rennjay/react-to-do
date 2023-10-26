function ListOfTask()
{
    return(
        <div className="my-5">
            <ul>
                <li className="border-b border-slate-400 py-3"><input type="checkbox" /><span>&nbsp;Task 1</span></li>
                <li className="border-b border-slate-400 py-3"><input type="checkbox" /><span>&nbsp;Task 2</span></li>
                <li className="border-b border-slate-400 py-3"><input type="checkbox" /><span>&nbsp;Task 3</span></li>
                <li className="border-b border-slate-400 py-3"><input type="checkbox" /><span>&nbsp;Task 4</span></li>
            </ul>
        </div>
    );
}

export default ListOfTask;