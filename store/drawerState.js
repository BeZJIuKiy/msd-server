class DrawerState {
    id = null;
    currentMenuNum = -1;
    
    indexSubMenuItem = -1;
    nameSubMenuItem = "";

    selectedEvent = null;

    pointOnMap = null;

    iconSize = 36;

    man = {name: "", age: null}
    
    constructor() {

    }

    setMan = (man) => {
        this.man = man;
    }
    // getMan = () => this.man
}

// export default new drawerState;