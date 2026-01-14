// Routes
import { routes } from "../routes/routes";


const appName = "İyonya Mühendsilik | "


export const findCurrentPage = () => {
    if (location.pathname.startsWith("/proje")) {
        document.title = appName + "Projeler"
        return;
    }

    if (location.pathname === "/") {
        document.title = "İyonya Mühendsilik";
        return;
    }

    else {
        document.title = appName + routes.find((routeItem) => routeItem.routePath === location.pathname).pageName;
    }
}