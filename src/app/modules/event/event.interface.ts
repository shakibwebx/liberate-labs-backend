export interface IEvent {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    time: string; // HH:MM
    notes?: string;
    category: "Work" | "Personal" | "Other";
    archived: boolean;
}
