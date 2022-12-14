import React from "react";
import ItemTech from "../component/ItemTech";

export default function ProductTech() {
  return (
    <div className="pt-28">
      <h1 className="text-center text-xl font-bold">Product</h1>
      <div className="item w-full px-10 lg:grid lg:grid-cols-4">
        <ItemTech />
        <ItemTech />
        <ItemTech />
        <ItemTech />
        <ItemTech />
      </div>
    </div>
  );
}
