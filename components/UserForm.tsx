import { FormWrapper } from "./FormWrapper";

type UserFormProps = {
    firstname: string,
    lastname: string,
    age: string,
    updateFields: (fields) => void
}

export function UserForm({ firstname, lastname, age, updateFields }:UserFormProps) {
    
    return (
        <FormWrapper title="User Details">
            <label htmlFor="firstname">First Name</label>
            <input type="text" required autoFocus name="firstname" id="firstname" value={firstname} onChange={e => updateFields({firstname: e.target.value})} />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" required name="lastname" id="lastname" value={lastname} onChange={e => updateFields({lastname: e.target.value})} />
            <label htmlFor="age">Age</label>
            <input type="number" required name="age" id="age" value={age} onChange={e => updateFields({age: e.target.value})} />
        </FormWrapper>
    );
}