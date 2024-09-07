/**
 * Auth Routes
 * The array of routes that used for Authentication
 * These are the routes which will redirect loggedin user to dashboard
 * @type {String[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * Public Routes
 * The array of routes that are public and can be accessed without login
 *
 * @type {String[]}
 */

export const publicRoutes = ["/", "/about", "/contact", "/service", "/gallery"];

export const DEFAULT_REDIRECT = "/dashboard";
