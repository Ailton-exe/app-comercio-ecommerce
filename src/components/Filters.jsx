import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
"Todos",
"zapatos",
"pantuflas",
"tacones",
"camisetas",
"chaquetas",
"gorras",
"pantalones cortos",
"suéteres",
"zapatillas deportivas",
"camisas",
"botas",
"camisas exteriores",
"pantalones",
"jeans",
"calcetines",
"cinturones",
"zapatillas de entrenamiento",
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "Todos",
    "WALK LONDON",
    "Reebok",
    "Nike",
    "Jack & Jones",
    "Crocs",
    "Vans",
    "Puma",
    "New Balance",
    "Tommy Jeans",
    "Tommy Hilfiger",
    "Bershka",
    "New Look",
    "AllSaints",
    "Columbia",
    "The North Face",
    "Collusion",
    "ASOS DESIGN",
    "Topman",
    "Dr Denim",
    "Polo Ralph Lauren",
    "ASOS Dark Future",
    "Levi's",
    "Threadbare",
    "Calvin Klein",
    "AAPE BY A BATHING APE®",
    "Good For Nothing",
    "Timberland",
    "Pull and Bear",
    "Koi Footwear",
    "adidas performance",
    "Nike Running",
    "Dr Martens",
    "River Island",
  ]);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Buscar"
        name="search"
        size="input-sm"
        defaultValue="Buscar..."
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Categoría"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Marca"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="Ordenar por"
        name="order"
        list={["Ascendiente", "Descendente", "Más caro primero", "Más barato primero"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="Selecciona genero"
        name="gender"
        list={["Todos", "Masculino", "Femenino"]}
        size="select-sm"
        defaultValue="all"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="Selecciona el precio"
        size="range-sm"
        price={2000}
      />
      {/* Date Picker */}
      <FormDatePicker label="select minimum production date" name="date" />

      {/* In stock */}
      <FormCheckbox
        label="Productos con stock"
        name="stock"
        defaultValue="false"
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        BUSCAR
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        RESETEAR
      </Link>
    </Form>
  );
};

export default Filters;
