"use client";
import { fetchCartProducts } from "../../store/features/cart/cart.slice";
import { userAction } from "../../store/features/user/user.slice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Token() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(userAction.setToken(session));
    }
    dispatch(fetchCartProducts());
  }, [session, dispatch]);
  return;
}
