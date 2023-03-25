import { useEffect, useState } from "react";


const Demo=()=>{

    const [qustn,setQustn]=useState(['What is your favourite food'])
    const [data,setData]=useState([['a','b']])

    useEffect(()=>{
        setQustn(['What is your favourite food'])
        setData([['a','b']])
    },[])

    return(
        <>
           
            <ol>
                {qustn.map((obj1,key)=>{
                    return(
                        <>
                            <li>{obj1}</li>
                            <ol>
                                {data[key].map((obj2)=>{
                                return(
                                    <li>
                                        obj2
                                    </li>
                                );
                                })}
                            </ol>
                        </>
                        
                        
                    );
                })}
            </ol>
            <button onClick={()=>{
                setQustn(prevState=>[...prevState,'what is your pet'])
                setData(prevState=>[...prevState,['a1','a2']])
            }}>bdkjhjasbdkj</button>
        </>
    );
}

export default Demo;