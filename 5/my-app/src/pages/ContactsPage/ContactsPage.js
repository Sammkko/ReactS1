import React, {useState} from 'react';

function ContactsPage(props) {

     const [product, setProduct] = useState("");

     const change = (event) => {
        setProduct(event.target.value);
    };

     const addBtn = () => {
         console.log(product)
         setProduct("")
     };

     const clearBtn = () => {
         setProduct("")
     };

    return (
        <div className="contactsPage">
            <h2>3</h2>
            <input type="text" onChange={change} value={product}
            />
            <button onClick={addBtn} >add</button>
            <button onClick={clearBtn}>clear</button>
        </div>
    );
}

export default ContactsPage;