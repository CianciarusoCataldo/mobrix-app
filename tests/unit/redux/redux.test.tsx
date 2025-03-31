import { store } from "@root/src/store";
import { useMbxAppSelector } from "@root/src/store/utils";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";


describe("MoBrix app redux utils",()=>{
    describe("useMbxAppSelector", () => {
        it("should return the correct state from the store", () => {
            const TestComponent = () => {
                const lang = useMbxAppSelector((state) => state.localization.lang);
                return <div>Lang: {lang}</div>;
              };
        
            const { getByText } = render(
            <Provider store={store}>
              <TestComponent />
            </Provider>
          );
      
          // Verifica che il componente abbia accesso al valore dal Redux store
          expect(getByText("Lang: en")).toBeInTheDocument();
        });
      });
})
