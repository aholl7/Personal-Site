import useWindowSize from "./windowDimensions";

const ProjectBox = (props) => {
    const { height, width } = useWindowSize();
    const viewRep = (e) => {
        e.preventDefault(e);
        if(props.isPublic === false){
            window.alert("Private")
        }else{
            window.open(props.link);
        }
    }

    const viewDemo = (e) => {
        e.preventDefault(e);
        window.open(props.demoLink);
        
    }
    return (
        <div className="shadow-2xl bg-slate-800 rounded xl:h-72 md:h-[16rem] h-[24rem] w-full">
            <div className="w-4/5 ml-auto mr-auto">
                <div className="md:grid md:grid-cols-2 md:gap-2 flex">
                    <h1 className="text-3xl mt-10 font-bold">{props.title}</h1>
                    <div className="md:grid md:grid-cols-2 md:gap-4 hidden">
                        <button className="bg-red-500 font-bold text-sm h-8 rounded-l rounded-r mt-10 float-right"onClick={(e) => {props.isPublic ? viewRep(e) : props.toggleModal()}}>GitHub</button>
                        <button className="bg-red-500 font-bold text-sm h-8 rounded-l rounded-r mt-10 float-right" onClick={(e)=>{viewDemo(e)}}>Demo</button>
                    </div>
                    
                </div>
            
                
                <div className="flex mt-5">
                    {props.tags.map((val, id) => {
                        if(id === 0){
                            return (
                                <span key={id} className="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">
                                    {val}
                                </span>
                            )
                        }else{
                            if(width <= 390){
                                if(id < 4){
                                    return (
                                        <span key={id} className="ml-2 text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">
                                            {val}
                                        </span>
                                    )
                                }
                            }else{
                                return (
                                    <span key={id} className="ml-2 text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">
                                        {val}
                                    </span>
                                )
                            }
                            
                        }
                        
                    }) 

                    }
                    
                    
                </div>
                <div>
                {props.tags.map((val, id) => {
                    if(width <= 390 && id >= 4){
                        return (
                            <span key={id} className="mt-2 text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">
                                {val}
                            </span>
                        )
                        
                    }
                        
                })}
                </div>
                
                
                <div className="mt-5">
                    <p>
                       {props.description}
                    </p>
                </div>
                <div className="md:hidden grid grid-cols-2 gap-2 mt-5">
                        <button className="bg-red-500 font-bold text-sm h-8 rounded-l rounded-r float-right" onClick={(e) => {props.isPublic ? viewRep(e) : props.toggleModal()}}>GitHub</button>
                        <button className="bg-red-500 font-bold text-sm h-8 rounded-l rounded-r float-right" onClick={(e)=>{viewDemo(e)}}>Demo</button>
                </div>
                
            </div>
            
            
            
        </div>
    );
}

export default ProjectBox;