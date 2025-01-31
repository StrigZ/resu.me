import CVContextProvider from "~/context/CVContextProvider";
import ThemeContextProvider from "~/context/ThemeContextProvider";
import App from "~/components/App";

export default function HomePage() {
  return (
    <ThemeContextProvider>
      <CVContextProvider>
        <App />
      </CVContextProvider>
    </ThemeContextProvider>
  );
}
