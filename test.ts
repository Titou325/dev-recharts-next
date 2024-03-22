import { Chart } from "@/components/chart";
import { renderToString } from "react-dom/server";

const test = async () => {
  const html = renderToString(Chart());
  console.log(html);
};

test();
