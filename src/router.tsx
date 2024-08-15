import { createBrowserRouter } from "react-router-dom";
import Homepage from "./HomePage";
import Example from "./composition/composition";
import Game from "./game/game";
import MyApp from "./welcome/welcome";
import Clock from "./clock/clock";
import FunctionalClock from "./clock/functionalClock";
import ContextDemo from "./context/contextDemo";
import UseStateDemo from "./hooks/useState/useState";
import UseMemoDemo from "./hooks/useMemo/useMemo";
import UseRefDemo from "./hooks/useRef/useRef";
import ReducerDemo from "./hooks/userReducer/useReducer";
import UseEffectDemo from "./hooks/useEffect/useEffectDemo";
import UseContextDemo from "./hooks/useContext/useContextDemo";
import UseReducerDemo from "./hooks/userReducer/useReducerDemo";
import CustomHooks from "./hooks/customHooks/customHooks";
import UseCallbackDemo from "./hooks/useCallback/useCallback";
import UseLayoutEffectDemo from "./hooks/useLayoutEffect/useLayoutEffectDemo";
import { NumberListClass, NumberListFunction } from "./key/key";
import Calculator from "./liftingStateUp/Calculator";
import { FlavorFormFunction, NameForm, NameFormFunction } from "./form/form";
import Road2React from "./road2react/road2react";
import InAction from "./reactInAction/inAction";
import Bookings from "./reactInAction/bookings";
import BookablesList from "./reactInAction/bookablesList";
import Users from "./reactInAction/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children: [
      {
        path: "/ComponentsThroughProps",
        element: <Example></Example>
      }, {
        path: "/Game",
        element: <Game></Game>
      }, {
        path: "/MyApp",
        element: <MyApp names={['ni', 'wo']}></MyApp>,
      }, {
        path: "/Clock",
        element: <Clock></Clock>
      }, {
        path: "/FunctionalClock",
        element: <FunctionalClock></FunctionalClock>
      }, {
        path: "/Context",
        element: <ContextDemo></ContextDemo>
      }, {
        path: "/hooks",
        children: [
          {
            path: "/hooks/useState",
            element: <UseStateDemo title={'useState'}></UseStateDemo>
          },
          {
            path: "/hooks/useMemo",
            element: <UseMemoDemo></UseMemoDemo>
          },
          {
            path: "/hooks/useRef",
            element: <UseRefDemo></UseRefDemo>
          },
          {
            path: "/hooks/useReducer1",
            element: <ReducerDemo></ReducerDemo>
          },
          {
            path: "/hooks/useEffect",
            element: <UseEffectDemo></UseEffectDemo>
          },
          {
            path: "/hooks/useContext",
            element: <UseContextDemo></UseContextDemo>
          },
          {
            path: "/hooks/useReducer2",
            element: <UseReducerDemo></UseReducerDemo>
          },
          {
            path: "/hooks/customHooks",
            element: <CustomHooks></CustomHooks>
          },
          {
            path: "/hooks/useCallback",
            element: <UseCallbackDemo></UseCallbackDemo>
          },
          {
            path: "/hooks/useLayoutEffect",
            element: <UseLayoutEffectDemo></UseLayoutEffectDemo>
          },
        ]
      }, {
        path: "/key",
        children: [
          {
            path: "/key/class",
            element: <NumberListClass numbers={[1, 2, 3]}></NumberListClass>
          },
          {
            path: "/key/functional",
            element: <NumberListFunction numbers={[1, 2, 3]}></NumberListFunction>
          }
        ]
      },
      {
        path: "/Calculator",
        element: <Calculator></Calculator>
      },
      {
        path: "/form",
        children: [
          {
            path: "/form/nameForm",
            element: <NameForm></NameForm>
          },
          {
            path: "/form/nameFormFunction",
            element: <NameFormFunction></NameFormFunction>
          },
          {
            path: "/form/flavorForm",
            element: <FlavorFormFunction></FlavorFormFunction>
          }
        ]
      },
      {
        path: "/road2React",
        element: <Road2React></Road2React>
      },
      {
        path: "/inAction",
        element: <InAction></InAction>,
        children: [
          {
            path: "/inAction/bookings",
            element: <Bookings></Bookings>
          },
          {
            path: "/inAction/bookables",
            element: <BookablesList></BookablesList>
          },
          {
            path: "/inAction/users",
            element: <Users></Users>
          },
        ]
      }
    ]
  }
]);

export default router;