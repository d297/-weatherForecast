import React from "react";
import { Input } from '../Input/index';
import { CardList } from '../CardList/index';
import {ErrorBoundary} from '../ErrorBoundary/index';

export default function Home (){
    return (
        <>
            <Input/>
            <ErrorBoundary>
                <CardList/>
            </ErrorBoundary>
        </>
    )
}