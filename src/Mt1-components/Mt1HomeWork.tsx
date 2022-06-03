import React from 'react';
import {HeaderHomeWork} from './HeaderHomeWork';
import {BodyHomeWork} from './BodyHomeWork';
import {FooterHomeWork} from './FooterHomeWork';


export const Mt1HomeWork = () => {
    return (
        <div>
            <h3>Mt1 Home Work</h3>
            <HeaderHomeWork titleForHeader={'NEW HEADER'}/>
            <BodyHomeWork titleForBody={'NEW BODY'}/>
            <FooterHomeWork titleForFooter={'NEW FOOTER'}/>
            <br/>
        </div>
    );
};
