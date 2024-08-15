import { createBrowserRouter } from "react-router-dom";
import Homepage from "./HomePage";
import Clock from "./clock/clock";
import FunctionalClock from "./clock/functionalClock";
import Example from "./composition/composition";
import ContextDemo from "./context/contextDemo";
import { FlavorFormFunction, NameForm, NameFormFunction } from "./form/form";
import Game from "./game/game";
import CustomHooks from "./hooks/customHooks/customHooks";
import UseCallbackDemo from "./hooks/useCallback/useCallback";
import UseContextDemo from "./hooks/useContext/useContextDemo";
import UseEffectDemo from "./hooks/useEffect/useEffectDemo";
import UseLayoutEffectDemo from "./hooks/useLayoutEffect/useLayoutEffectDemo";
import UseMemoDemo from "./hooks/useMemo/useMemo";
import UseRefDemo from "./hooks/useRef/useRef";
import UseStateDemo from "./hooks/useState/useState";
import ReducerDemo from "./hooks/userReducer/useReducer";
import UseReducerDemo from "./hooks/userReducer/useReducerDemo";
import { NumberListClass, NumberListFunction } from "./key/key";
import Calculator from "./liftingStateUp/Calculator";
import BookablesList from "./reactInAction/bookablesList";
import Bookings from "./reactInAction/bookings";
import InAction from "./reactInAction/inAction";
import Users from "./reactInAction/users";
import Road2React from "./road2react/road2react";
import MyApp from "./welcome/welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/ComponentsThroughProps",
        element: <Example />,
      },
      {
        path: "/Game",
        element: <Game />,
      },
      {
        path: "/MyApp",
        element: <MyApp names={["ni", "wo"]} />,
      },
      {
        path: "/Clock",
        element: <Clock />,
      },
      {
        path: "/FunctionalClock",
        element: <FunctionalClock />,
      },
      {
        path: "/Context",
        element: <ContextDemo />,
      },
      {
        path: "/hooks",
        children: [
          {
            path: "/hooks/useState",
            element: <UseStateDemo title={"useState"} />,
          },
          {
            path: "/hooks/useMemo",
            element: <UseMemoDemo />,
          },
          {
            path: "/hooks/useRef",
            element: <UseRefDemo />,
          },
          {
            path: "/hooks/useReducer1",
            element: <ReducerDemo />,
          },
          {
            path: "/hooks/useEffect",
            element: <UseEffectDemo />,
          },
          {
            path: "/hooks/useContext",
            element: <UseContextDemo />,
          },
          {
            path: "/hooks/useReducer2",
            element: <UseReducerDemo />,
          },
          {
            path: "/hooks/customHooks",
            element: <CustomHooks />,
          },
          {
            path: "/hooks/useCallback",
            element: <UseCallbackDemo />,
          },
          {
            path: "/hooks/useLayoutEffect",
            element: <UseLayoutEffectDemo />,
          },
        ],
      },
      {
        path: "/key",
        children: [
          {
            path: "/key/class",
            element: <NumberListClass numbers={[1, 2, 3]} />,
          },
          {
            path: "/key/functional",
            element: (
              <NumberListFunction numbers={[1, 2, 3]} />
            ),
          },
        ],
      },
      {
        path: "/Calculator",
        element: <Calculator />,
      },
      {
        path: "/form",
        children: [
          {
            path: "/form/nameForm",
            element: <NameForm />,
          },
          {
            path: "/form/nameFormFunction",
            element: <NameFormFunction />,
          },
          {
            path: "/form/flavorForm",
            element: <FlavorFormFunction />,
          },
        ],
      },
      {
        path: "/road2React",
        element: <Road2React />,
      },
      {
        path: "/inAction",
        element: <InAction />,
        children: [
          {
            path: "/inAction/bookings",
            element: <Bookings />,
          },
          {
            path: "/inAction/bookables",
            element: <BookablesList />,
          },
          {
            path: "/inAction/users",
            element: <Users />,
          },
        ],
      },
    ],
  },
]);

export default router;
