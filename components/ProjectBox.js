

const ProjectBox = (props) => {
    const viewRep = (e) => {
        e.preventDefault(e);
        if(props.isPublic === false){
            window.alert("Private")
        }else{
            window.open(props.link);
        }
    }
    return (
        <div className="shadow-2xl bg-slate-800  rounded xl:h-72 h-80 w-full">
            <div className="w-4/5 ml-auto mr-auto">
                <div class="grid grid-cols-2 gap-2">
                    <h1 className="text-3xl mt-10 font-bold">{props.title}</h1>
                    <div>
                        <button className="bg-red-500 ml-10 font-bold w-20 text-sm h-8 rounded-l rounded-r mt-10 float-right" onClick={(e)=>{viewRep(e)}}>GitHub</button>
                    </div>
                    
                </div>
                
                <div className="flex mt-8">
                    {props.tags.map((val, id) => {
                        if(id === 0){
                            return (
                                <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">
                                    {val}
                                </span>
                            )
                        }else {
                            return (
                                <span className="ml-2 text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">
                                    {val}
                                </span>
                            )
                        }
                        
                    }) 

                    }
                    
                    
                </div>
                <div className="mt-5">
                    <p>
                       {props.description}
                    </p>
                </div>
                
                
            </div>
            
            
        </div>
    );
}

export default ProjectBox;