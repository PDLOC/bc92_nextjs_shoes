"use client"
import { useState, useEffect } from "react";
import type { TinitState, TShoes } from "./types"
import Shoes from "./components/Shoes";
import { fetchData } from "@/app/server/action/product";



export default function Home() {
  const [state, setState] = useState<TinitState<TShoes[]>>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const callApi = async () => {
      // pending
      setState({
        ...state,
        loading: true,
      });
      try {
        // const response = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
        // const result = await response.json();
        const result = await fetchData();
        // success
        setState({
          ...state,
          data: result,
        });
      } catch (error) {
        // fail
        setState({
          ...state,
          error: error,
        });
      }
    }
    callApi();
  }, []);

  const renderListShoes = () => {
    const { data } = state;
    if (data) {
      return data.map((shoes) => <Shoes key={shoes.id} shoes={shoes} />);
    }
  }

  if (state.loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mx-auto lg:mx-auto ">
      <div className="grid grid-cols-3 gap-4">
        {renderListShoes()}
      </div>
    </div>
  );
}
