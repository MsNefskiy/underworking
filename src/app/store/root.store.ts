import { LocationStore } from "@features/location";
import { ShiftStore } from "@features/shift-list";
import { makeAutoObservable } from "mobx";

export class RootStore {
    locationStore: LocationStore;
    shiftStore: ShiftStore;

    constructor() {
        this.locationStore = new LocationStore();
        this.shiftStore = new ShiftStore();

        makeAutoObservable(this, {}, { autoBind: true });
    }

    initialize = async (): Promise<void> => {
        try {

        } catch (error) {
            console.warn('App initizialization warning', error);
        }
    }
}