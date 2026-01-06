import React from "react";

// React-Router
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";

// Pages
import Anasayfa from "../pages/Anasayfa";
import Kurumsal from "../pages/Kurumsal";
import Kvkk from "../pages/KVKK";
import CerezPolitikasi from "../pages/CerezPolitikasi";
import Projeler from "../pages/Projeler";
import Referanslar from "../pages/Referanslar";
import TicariBilgiler from "../pages/TicariBilgiler";
import Iletisim from "../pages/Iletisim";


export const routes = [
    {
        routePath: "/kurumsal",
        routeElement: <Kurumsal />,
        pageName: "Kurumsal"
    },
    {
        routePath: "/kvkk",
        routeElement: <Kvkk />,
        pageName: "KVKK"
    },
    {
        routePath: "/cerez-politikasi",
        routeElement: <CerezPolitikasi />,
        pageName: "Çerez Politikası"
    },
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
        routePath: "/ticari-bilgiler",
        routeElement: <TicariBilgiler />,
        pageName: "Ticari Bilgiler"
    },
    {
        routePath: "/iletisim",
        routeElement: <Iletisim />,
        pageName: "İletişim"
    },
];


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={ <Anasayfa /> } />

            {routes.map((routeItem) => (
                <Route key={routeItem.routePath} path={routeItem.routePath} element={routeItem.routeElement} />
            ))}
        </Route>
    )
);