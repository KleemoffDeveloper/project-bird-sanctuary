export default function Checkout({formComplete, handleForm}){
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(formComplete){
                window.alert('You have adopted birds. Thank you!')
                window.location.reload()
            }
        }}className="checkout side-card">
            <h1>Checkout</h1>
            <ul>
                <div>
                    <label>First Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Zip Code</label>
                    <input type="text"/>
                </div>
            </ul>
            <input onClick={() => handleForm()}type="submit"/>
        </form>
    );
}