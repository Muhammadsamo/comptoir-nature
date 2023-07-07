export default defineNuxtRouteMiddleware((to, from) => {
  if (
    from.path === "/" ||
    (from.path === "/ProductsAndServices" && to.path === "/Contact")
  ) {
    to.meta.pageTransition = { name: "page-left" };
    from.meta.pageTransition = { name: "page-left" };
  } else {
    to.meta.pageTransition = { name: "page-right" };
    from.meta.pageTransition = { name: "page-right" };
  }
});
