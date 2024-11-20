import { create } from "zustand";


interface ChangeAlbumModalStore{
    isOpen: boolean;
    album: string[];
    onOpen: () => void;
    onClose: () => void;
    onChangeAlbum: (album: string[]) => void;
}

const useChangeAlbumModal = create<ChangeAlbumModalStore>((set) => ({
    isOpen: false,
    album: [],
    onChangeAlbum: (album: string[])=> set({album}),
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}))

export default useChangeAlbumModal;