export const loadState =() =>{
    try{
        const TASKS = localStorage.getItem('state');
        if(TASKS === null){
            return undefined;
        }
        return JSON.parse(TASKS);
    }catch (err) {
        return undefined;
    }
};

export const saveState =(state) => {
    try{
        const TASKS = JSON.stringify(state);
        localStorage.setItem('state', TASKS)
    }catch (err) {
        ///
    }
};