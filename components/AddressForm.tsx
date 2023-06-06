import { FormWrapper } from "./FormWrapper";

type AddressFormProps = {
    street: string,
    city: string,
    state: string,
    zip: string,
    updateFields: (fields) => void
}

export function AddressForm({ street, city, state, zip, updateFields }: AddressFormProps) {
    return (
        <FormWrapper title="Address">
            <label htmlFor="">street</label>
            <input type="text" required autoFocus name="street" id="street" value={street} onChange={e => updateFields({street: e.target.value})} />
            <label htmlFor="">City</label>
            <input type="text" required name="city" id="city" value={city} onChange={e => updateFields({city: e.target.value})} />
            <label htmlFor="">state</label>
            <input type="text" required name="state" id="state" value={state} onChange={e => updateFields({state: e.target.value})} />
            <label htmlFor="">zip</label>
            <input type="text" required name="zip" id="zip" value={zip} onChange={e => updateFields({zip: e.target.value})} />
        </FormWrapper>
    );
}