import React from "react";

// React-Router
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";

// Pages
import Anasayfa from "../pages/Anasayfa";
import Projeler from "../pages/Projeler";
import Referanslar from "../pages/Referanslar";
import Iletisim from "../pages/Iletisim";
import Uyeler from "../pages/Uyeler";


export const routes = [
    {
        routePath: "/projeler",
        routeElement: <Projeler />,
        pageName: "Projeler"
    },
    {
        routePath: "/referanslar",
        routeElement: <Referanslar />,
        pageName: "Referanslar"
    },
    {
        routePath: "/iletisim",
        routeElement: <Iletisim />,
        pageName: "İletişim"
    },
    {
        routePath: "/uyeler",
        routeElement: <Uyeler />,
        pageName: "Uyeler"
    }
];


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Anasayfa />} />

            {routes.map((routeItem) => (
                <Route key={routeItem.routePath} path={routeItem.routePath} element={routeItem.routeElement} />
            ))}
        </Route>
    )
);