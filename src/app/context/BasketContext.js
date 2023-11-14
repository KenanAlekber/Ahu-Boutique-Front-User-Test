import React from "react";
import { useService } from "../../API/Services";
import { useMutation, useQuery } from "react-query";

export const BasketContext = React.createContext();
export const BasketProvider = ({ children }) => {
    const { basketService } = useService();
    const [basketItems, setBasketItems] = React.useState([]);
    const { isLoading: isBasketLoading } = useQuery([], () => basketService.getAllBasketItems().then(({ data }) => setBasketItems(data)))
    const { } = useMutation(()=>basketService.)

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    );
};