import {useSearchParams} from "react-router-dom";

export default function () {
    const [searchParams, setSearchParams] = useSearchParams();
    return (params)=>{
        setSearchParams({...Object.fromEntries([...searchParams]),    ...params,page:params.page || 1
        });
    }
}