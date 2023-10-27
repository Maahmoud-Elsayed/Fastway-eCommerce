import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";

import { lazy, Suspense } from "react";
import Spinner from "./components/Ui/Spinner";
import Loading from "./components/Ui/Loading";
import RequireAuth from "./components/auth/RequireAuth";
import { useAuth } from "./context/AuthContext";

const SearchPage = lazy(() => import("./pages/Search"));
const ErrorPage = lazy(() => import("./pages/Error"));
const HomePage = lazy(() => import("./pages/Home"));
const ProductsPage = lazy(() => import("./pages/Products"));
const CategoryPage = lazy(() => import("./pages/Category"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetails"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const ProductsLayout = lazy(() => import("./pages/ProductsLayout"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const MyAccountPage = lazy(() => import("./pages/MyAccount"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));

function App() {
  const auth = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <Suspense fallback={<Spinner />}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          ),
        },

        {
          path: "Products",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductsLayout />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loading />}>
                  <ProductsPage />
                </Suspense>
              ),
              loader: () =>
                import("./pages/Products").then((module) => module.loader()),
            },
            {
              path: ":category",
              element: (
                <Suspense fallback={<Loading />}>
                  <CategoryPage />
                </Suspense>
              ),
              loader: (meta) =>
                import("./pages/Category").then((module) =>
                  module.loader(meta)
                ),
            },
            {
              path: ":category/:productId",
              element: (
                <Suspense fallback={<Spinner />}>
                  <ProductDetailsPage />
                </Suspense>
              ),
              loader: (meta) =>
                import("./pages/ProductDetails").then((module) =>
                  module.loader(meta)
                ),
            },
            {
              path: "search",
              element: (
                <Suspense fallback={<Loading />}>
                  <SearchPage />
                </Suspense>
              ),
              loader: () =>
                import("./pages/Search").then((module) => module.loader()),
            },
          ],
        },
        {
          path: "reset-password",
          element: (
            <Suspense fallback={<Spinner />}>
              <ResetPasswordPage />
            </Suspense>
          ),
          action: (meta) =>
            import("./pages/ResetPasswordPage").then((module) =>
              module.action(auth, meta)
            ),
        },
        {
          element: <RequireAuth />,
          children: [
            {
              path: "my-account",
              element: (
                <Suspense fallback={<Spinner />}>
                  <MyAccountPage />
                </Suspense>
              ),
            },
            {
              path: "checkout",
              element: (
                <Suspense fallback={<Spinner />}>
                  <CheckoutPage />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<Spinner />}>
              <LoginPage />
            </Suspense>
          ),
          action: (meta) =>
            import("./pages/Login").then((module) => module.action(auth, meta)),
        },
        {
          path: "signup",
          element: (
            <Suspense fallback={<Spinner />}>
              <SignupPage />
            </Suspense>
          ),
          action: (meta) =>
            import("./pages/Signup").then((module) =>
              module.action(auth, meta)
            ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
