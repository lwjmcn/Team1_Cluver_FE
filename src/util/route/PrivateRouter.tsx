import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IPrivateRouteProps {
  children?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
  authentication: boolean;
  // true :인증을 반드시 해야하만 접속가능
  // false : 인증 안 해야만 접속 가능
}

export default function PrivateRoute({
  authentication,
}: IPrivateRouteProps): ReactElement | null {
  // const isLogined = !!localStorage.getItem("token"); //로그인 토큰 존재 여부
  const isLogined = document.cookie.split("; token=").length === 2;

  if (authentication) {
    // 로그인 시 페이지
    return isLogined ? <Outlet /> : <Navigate to="/login" />;
  } else {
    // 로그아웃 시 페이지
    // 로그인 상태에서 접속 시 홈으로 이동
    return isLogined ? <Navigate to="/" /> : <Outlet />;
  }
}
