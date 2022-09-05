import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ categoryText, setCategoryText ] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        const category = categoryText.trim();
        if ( category <= 1 ) return; 
        onNewCategory( category );
        setCategoryText( '' );
    }

    const onTextChanged = ( {target} ) => {
        setCategoryText( target.value );
    }
    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Search Gifs"
                value={ categoryText }
                onChange={ onTextChanged }
            />
        </form>
    )
}
