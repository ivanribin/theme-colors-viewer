import ColorsSettingsPage from "@pages/ColorsSettings";
import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";
import type { RouteObject } from "react-router";

const paths = {
    HOME: {
        id: "home",
        path: "/",
    },
    COLORS_SETTINGS: {
        id: "colorsSettings",
        path: "/settings/colors",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.HOME,
        element: <HomePage />,
    },
    {
        ...paths.COLORS_SETTINGS,
        element: <ColorsSettingsPage />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
];

export default routes;
