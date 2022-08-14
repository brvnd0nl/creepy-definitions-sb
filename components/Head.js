import { useSupabaseContext } from "../context/SupabaseContext";
import HeadNext from "next/head";

const Head = () => {
  const { titlePage } = useSupabaseContext();
  const title = `Creepy Definitions${
    titlePage !== "" ? ` - ${titlePage}` : ""
  }`;
  return (
    <>
      <HeadNext>
        <title>{title}</title>
        <meta
          name="description"
          content="Diccionario para guardar vainas raras."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </HeadNext>
    </>
  );
};

export default Head;
