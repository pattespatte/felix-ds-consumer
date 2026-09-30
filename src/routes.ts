// Pure route metadata (no component imports) so tests can iterate it too.
export interface AppRoute {
    path: string;
    name: string;
    title: string;
}

export const routes: AppRoute[] = [
    { path: "/", name: "start", title: "Start" },
    { path: "/formular", name: "formular", title: "Formulär" },
    { path: "/tabeller", name: "tabeller", title: "Tabeller" },
    { path: "/atkoppling", name: "atkoppling", title: "Återkoppling" },
];
