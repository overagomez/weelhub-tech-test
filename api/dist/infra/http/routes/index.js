import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { glob } from "glob";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function registerRoutes(router) {
    const routes = glob.sync(path.join(__dirname, "/**/*.route.*"), {
        windowsPathsNoEscape: true,
    });
    // Load each route module dynamically
    for (const routePath of routes) {
        if (routePath.endsWith(".map"))
            continue;
        await register(routePath, router);
    }
}
async function register(routePath, router) {
    const routeModule = await import(pathToFileURL(routePath).href);
    if (typeof routeModule.register === "function") {
        routeModule.register(router);
    }
    else {
        console.warn(`Route file ${routePath} does not export a register() function`);
    }
}
