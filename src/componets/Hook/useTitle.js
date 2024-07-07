import { useEffect } from "react"

export const useTitle = (pageTitle) => {
    useEffect(function () {
        document.title =pageTitle
    } , []);
}