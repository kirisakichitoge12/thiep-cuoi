import { create } from "zustand"; 
import Invitation from "../Invitation";
import Biography from "../Biography";
import Story from "../Story";
import Journey from "../Journey";
import PhotoAlbum from "../PhotoAlbum";
import Timeline from "../Timeline";

type WidgetNumber = 1 | 2 | 3 | 4 | 5 | 6;

interface WidgetStore{
    widgets: React.ComponentType[]; 
    isOpen: boolean;
    index: number;
    onOpen: (index: number) => void;
    onClose: () => void;
    onAddWidget: (widget: WidgetNumber) => void;
}

const widgets = {
    1:Invitation, 
    2: Biography, 
    3: Story, 
    4: Journey, 
    5: PhotoAlbum, 
    6: Timeline
}

const useWidget = create<WidgetStore>((set) => ({
    widgets: [Invitation, Biography, Story, Journey, PhotoAlbum, Timeline], 
    isOpen: false,
    index: 0,
    onOpen: (index: number)=> set({isOpen: true, index}),
    onClose: ()=> set({isOpen: false}),
    onAddWidget: (widget: WidgetNumber) => set((state) => {
        const newWidgets = [...state.widgets];
        if (state.index !== undefined) {
            newWidgets.splice(state.index, 0, widgets[widget]);
        } else {
            newWidgets.push(widgets[widget]);
        }
        return { ...state, widgets: newWidgets };
    })
}))

export default useWidget;