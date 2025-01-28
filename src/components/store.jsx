// store.js
// import create from 'zustand';
import { create } from 'zustand';


export const useFormStore = create((set) => ({
    formData: {},
    setFormData: (data) => set({ formData: data }),
}));
